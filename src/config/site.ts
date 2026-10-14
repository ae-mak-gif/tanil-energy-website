/**
 * Central configuration for Tanil Solar Energy Engineering.
 * All business facts verified against supplied marketing material / brief.
 * Edit placeholders here once official URLs are confirmed.
 */

export const site = {
  name: 'Tanil Solar Energy Engineering',
  tagline: 'Solar energy solutions for homes, farms and businesses in Zimbabwe',
  email: 'tanilsolar@gmail.com',
  phones: [
    { label: '+263 713 799 295', tel: '+263713799295', wa: '263713799295' },
    { label: '+263 781 680 565', tel: '+263781680565', wa: '263781680565' },
    { label: '+263 773 390 860', tel: '+263773390860', wa: '263773390860' },
  ],
  // PLACEHOLDER — confirm the official Facebook page URL before going live.
  facebookUrl: 'https://www.facebook.com/',
  facebookName: 'Tanil Solar Energy Engineering',
  // PLACEHOLDER — LinkedIn company page URL to be confirmed.
  linkedinUrl: 'https://www.linkedin.com/',
  // WhatsApp number that receives website enquiries (international format, no "+").
  whatsappEnquiryNumber:
    (import.meta.env.VITE_WHATSAPP_ENQUIRY_NUMBER as string | undefined) ?? '263713799295',
  siteUrl:
    (import.meta.env.VITE_SITE_URL as string | undefined) ?? 'https://www.example.com',
}

export type Service = { id: string; title: string; short: string; audience: string }

/** The seven verified service categories. */
export const services: Service[] = [
  {
    id: 'residential',
    title: 'Residential Solar Solutions',
    short: 'Solar power systems designed around the needs of your home.',
    audience: 'Homeowners',
  },
  {
    id: 'commercial-industrial',
    title: 'Commercial & Industrial Solar',
    short: 'Solar solutions for businesses, factories and institutions.',
    audience: 'Businesses & industry',
  },
  {
    id: 'agricultural',
    title: 'Agricultural & Farm Solar',
    short: 'Solar energy for farms, including power for remote operations.',
    audience: 'Farmers',
  },
  {
    id: 'solar-pumps',
    title: 'Solar Pumps & Irrigation',
    short: 'Solar-powered pumping and irrigation solutions.',
    audience: 'Farmers & growers',
  },
  {
    id: 'equipment-sales',
    title: 'Solar Equipment Sales',
    short: 'Supply of solar panels, inverters, batteries and accessories.',
    audience: 'All customers',
  },
  {
    id: 'electrical-engineering',
    title: 'Electrical Engineering Services',
    short: 'Professional electrical engineering support for your project.',
    audience: 'All customers',
  },
  {
    id: 'maintenance-repairs',
    title: 'Solar Maintenance & Repairs',
    short: 'Maintenance and repair of existing solar installations.',
    audience: 'Existing system owners',
  },
]

export const customerCategories = [
  'Residential',
  'Civil Servant',
  'Farmer / Agricultural',
  'Commercial / Industrial',
  'Other',
] as const

export const contactMethods = ['Phone call', 'WhatsApp', 'Email'] as const
