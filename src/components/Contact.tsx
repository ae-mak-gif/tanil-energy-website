import { site } from '../config/site'
import EnquiryForm from './EnquiryForm'

export default function Contact() {
  return (
    <section className="pathways" id="contact">
      <div className="container">
        <div className="section-head">
          <h2>Contact Tanil Solar</h2>
          <p className="lead">Call, WhatsApp, email or send us an enquiry — whichever works for you.</p>
        </div>
        <div className="contact-grid">
          <div>
            <h3>Talk to us</h3>
            <ul className="contact-list">
              {site.phones.map((p) => (
                <li key={p.tel}>
                  <a href={`tel:${p.tel}`}>{p.label}</a>{' '}
                  (<a href={`https://wa.me/${p.wa}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>)
                </li>
              ))}
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            </ul>
            <h3>Follow &amp; message</h3>
            <div className="social-row">
              <a className="btn btn-secondary" href={site.facebookUrl} target="_blank" rel="noopener noreferrer">
                Facebook — Tanil Solar Energy Engineering
              </a>
              <a className="btn btn-outline" href={site.linkedinUrl} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
            <p className="form-note">
              Facebook and LinkedIn links are placeholders pending confirmation of the official page
              URLs. WhatsApp availability of each number should be verified by Tanil Solar.
            </p>
          </div>
          <EnquiryForm />
        </div>
      </div>
    </section>
  )
}
