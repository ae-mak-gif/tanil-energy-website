/** Documented lead data structure — the contract for future Supabase / n8n integrations. */

export type LeadStatus = 'new' | 'contacted' | 'assessment' | 'quoted' | 'won' | 'lost'

export interface Lead {
  leadId: string
  dateCreated: string // ISO 8601
  customerName: string
  contactNumber: string
  customerCategory: string
  location: string
  serviceRequested: string
  enquiryDescription: string
  preferredContactMethod: string
  leadStatus: LeadStatus
  followUpNotes: string
}

export interface EnquiryFormValues {
  name: string
  mobile: string
  category: string
  location: string
  service: string
  description: string
  contactMethod: string
}
