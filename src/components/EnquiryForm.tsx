import { useMemo, useState, type ChangeEvent, type FormEvent } from 'react'
import { site, services, customerCategories, contactMethods } from '../config/site'
import { createLead, buildWhatsappMessage, buildWhatsappUrl } from '../lib/leads'
import { validateEnquiry, type FormErrors } from '../lib/validation'
import type { EnquiryFormValues } from '../types'

type Field = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement

/** Reads ?service=… from the URL (works for both ?service= and #contact?service= forms). */
function readPreselect(): string | null {
  const fromSearch = new URLSearchParams(window.location.search).get('service')
  if (fromSearch) return fromSearch
  const hash = window.location.hash
  const idx = hash.indexOf('?')
  if (idx >= 0) return new URLSearchParams(hash.slice(idx + 1)).get('service')
  return null
}

export default function EnquiryForm() {
  const preselect = useMemo(readPreselect, [])
  const [values, setValues] = useState<EnquiryFormValues>({
    name: '',
    mobile: '',
    category: '',
    location: '',
    service: services.some((s) => s.id === preselect) ? preselect! : '',
    description: '',
    contactMethod: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [result, setResult] = useState<{ message: string; url: string } | null>(null)

  const set = (field: keyof EnquiryFormValues) => (e: ChangeEvent<Field>) => {
    setValues((v) => ({ ...v, [field]: e.target.value }))
    setErrors((er) => ({ ...er, [field]: undefined }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const errs = validateEnquiry(values)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    const lead = createLead(values)
    const message = buildWhatsappMessage(lead)
    const url = buildWhatsappUrl(message, site.whatsappEnquiryNumber)
    window.open(url, '_blank', 'noopener,noreferrer')
    setResult({ message, url })
  }

  const reset = () => {
    setValues({ name: '', mobile: '', category: '', location: '', service: '', description: '', contactMethod: '' })
    setErrors({})
    setResult(null)
  }

  if (result) {
    return (
      <div className="form-card" role="status">
        <div className="form-status ok">
          Your enquiry has been prepared. <strong>WhatsApp should have opened in a new tab —
          press Send there to deliver it to Tanil Solar.</strong> Your enquiry is only sent once you
          press Send in WhatsApp; nothing has been stored on this website.
        </div>
        <p className="form-note"><strong>Message preview:</strong></p>
        <div className="wa-preview">{result.message}</div>
        <a className="btn btn-whatsapp" href={result.url} target="_blank" rel="noopener noreferrer">
          Reopen WhatsApp
        </a>{' '}
        <button type="button" className="btn btn-outline" onClick={reset}>
          Start a New Enquiry
        </button>
      </div>
    )
  }

  const err = (f: keyof EnquiryFormValues) => errors[f]

  return (
    <form className="form-card" onSubmit={handleSubmit} noValidate>
      <div className="form-status info">
        This form prepares your enquiry in WhatsApp and opens it for you to review and send.
        Nothing is transmitted or stored until you press Send in WhatsApp.
      </div>
      <div className={`field${err('name') ? ' invalid' : ''}`}>
        <label htmlFor="f-name">Your name <span className="req">*</span></label>
        <input id="f-name" autoComplete="name" value={values.name} onChange={set('name')} />
        {err('name') && <span className="error">{err('name')}</span>}
      </div>
      <div className={`field${err('mobile') ? ' invalid' : ''}`}>
        <label htmlFor="f-mobile">Mobile number <span className="req">*</span></label>
        <input id="f-mobile" type="tel" inputMode="tel" autoComplete="tel" placeholder="e.g. 0771 234 567" value={values.mobile} onChange={set('mobile')} />
        {err('mobile') && <span className="error">{err('mobile')}</span>}
      </div>
      <div className={`field${err('category') ? ' invalid' : ''}`}>
        <label htmlFor="f-category">Customer category <span className="req">*</span></label>
        <select id="f-category" value={values.category} onChange={set('category')}>
          <option value="">Select…</option>
          {customerCategories.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
        {err('category') && <span className="error">{err('category')}</span>}
      </div>
      <div className={`field${err('location') ? ' invalid' : ''}`}>
        <label htmlFor="f-location">Location / town <span className="req">*</span></label>
        <input id="f-location" autoComplete="address-level2" value={values.location} onChange={set('location')} />
        {err('location') && <span className="error">{err('location')}</span>}
      </div>
      <div className={`field${err('service') ? ' invalid' : ''}`}>
        <label htmlFor="f-service">Service required <span className="req">*</span></label>
        <select id="f-service" value={values.service} onChange={set('service')}>
          <option value="">Select…</option>
          {services.map((s) => <option key={s.id} value={s.id}>{s.title}</option>)}
        </select>
        {err('service') && <span className="error">{err('service')}</span>}
      </div>
      <div className={`field${err('description') ? ' invalid' : ''}`}>
        <label htmlFor="f-description">Brief description of your requirement</label>
        <textarea id="f-description" rows={4} maxLength={1000} value={values.description} onChange={set('description')} />
        {err('description') && <span className="error">{err('description')}</span>}
      </div>
      <div className={`field${err('contactMethod') ? ' invalid' : ''}`}>
        <label htmlFor="f-method">Preferred contact method <span className="req">*</span></label>
        <select id="f-method" value={values.contactMethod} onChange={set('contactMethod')}>
          <option value="">Select…</option>
          {contactMethods.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
        {err('contactMethod') && <span className="error">{err('contactMethod')}</span>}
      </div>
      <button className="btn btn-primary" type="submit">Send Enquiry via WhatsApp</button>
      <p className="form-note">
        Opens WhatsApp to {site.phones[0].label}. You must press Send in WhatsApp to complete the
        enquiry. Prefer email? <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
    </form>
  )
}
