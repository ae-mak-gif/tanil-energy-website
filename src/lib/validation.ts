import type { EnquiryFormValues } from '../types'

export type FormErrors = Partial<Record<keyof EnquiryFormValues, string>>

/** Accepts common Zimbabwe formats: 07XXXXXXXX, +2637XXXXXXXX, 2637XXXXXXXX, with spaces/dashes. */
export function isValidMobile(input: string): boolean {
  const digits = input.replace(/[\s-]/g, '')
  return /^(\+?263|0)?7\d{8}$/.test(digits)
}

export function validateEnquiry(values: EnquiryFormValues): FormErrors {
  const errors: FormErrors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.mobile.trim()) errors.mobile = 'Please enter your mobile number.'
  else if (!isValidMobile(values.mobile)) errors.mobile = 'Enter a valid Zimbabwe mobile number, e.g. 0771 234 567.'
  if (!values.category) errors.category = 'Please select your category.'
  if (!values.location.trim()) errors.location = 'Please enter your town or location.'
  if (!values.service) errors.service = 'Please select the service you need.'
  if (!values.contactMethod) errors.contactMethod = 'Please choose how we should contact you.'
  if (values.description.trim().length > 1000)
    errors.description = 'Please keep the description under 1000 characters.'
  return errors
}
