export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  preferredContact: 'email' | 'phone';
  courseInterest?: string;
}

export interface AdmissionFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  address: string;
  educationLevel: string;
  courseOfInterest: string;
  preferredBatch: 'weekday' | 'weekend' | 'online';
  previousExperience?: string;
  additionalNotes?: string;
  agreeToTerms: boolean;
}

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select' | 'date' | 'checkbox' | 'radio';
  required: boolean;
  placeholder?: string;
  options?: { label: string; value: string }[];
  validation?: {
    pattern?: string;
    minLength?: number;
    maxLength?: number;
    email?: boolean;
    phone?: boolean;
  };
}