/**
 * Lead capture logic.
 *
 * MVP behaviour (honest and transparent):
 *  - The website does NOT silently store or transmit enquiry data anywhere.
 *  - On submit, a WhatsApp message is prepared and the customer sends it
 *    manually from their own WhatsApp app. Nothing is stored on our side.
 *
 * Future integrations (planned, not implemented):
 *  - Supabase: set VITE_SUPABASE_URL + VITE_SUPABASE_ANON_KEY and implement
 *    saveLeadToSupabase (RLS-protected `leads` table matching the Lead type).
 *  - n8n: set VITE_N8N_WEBHOOK_URL and POST the lead to a notification workflow.
 */
import type { EnquiryFormValues, Lead } from '../types'

export function createLead(values: EnquiryFormValues): Lead {
  return {
    leadId: `lead_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`,
    dateCreated: new Date().toISOString(),
    customerName: values.name.trim(),
    contactNumber: values.mobile.trim(),
    customerCategory: values.category,
    location: values.location.trim(),
    serviceRequested: values.service,
    enquiryDescription: values.description.trim(),
    preferredContactMethod: values.contactMethod,
    leadStatus: 'new',
    followUpNotes: '',
  }
}

export function buildWhatsappMessage(lead: Lead): string {
  const lines = [
    'New website enquiry for Tanil Solar Energy Engineering',
    `Name: ${lead.customerName}`,
    `Mobile: ${lead.contactNumber}`,
    `Category: ${lead.customerCategory}`,
    `Location: ${lead.location}`,
    `Service required: ${lead.serviceRequested}`,
    `Preferred contact: ${lead.preferredContactMethod}`,
  ]
  if (lead.enquiryDescription) lines.push(`Details: ${lead.enquiryDescription}`)
  return lines.join('\n')
}

export function buildWhatsappUrl(message: string, number: string): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

// PLANNED — not wired up in the MVP. Implement when Supabase credentials exist.
export async function saveLeadToSupabase(_lead: Lead): Promise<never> {
  throw new Error('Supabase integration not configured yet. Enquiry was not stored.')
}

// PLANNED — not wired up in the MVP. Implement when an n8n webhook exists.
export async function postLeadToAutomation(_lead: Lead): Promise<never> {
  throw new Error('Automation webhook not configured yet. Enquiry was not forwarded.')
}
