import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormValidationService {
  createContactForm() {
    return new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)]),
      subject: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required, Validators.minLength(10)]),
      preferredContact: new FormControl('email', [Validators.required]),
      courseInterest: new FormControl('')
    });
  }

  createAdmissionForm() {
    return new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/)]),
      dateOfBirth: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required, Validators.minLength(10)]),
      educationLevel: new FormControl('', [Validators.required]),
      courseOfInterest: new FormControl('', [Validators.required]),
      preferredBatch: new FormControl('weekday', [Validators.required]),
      previousExperience: new FormControl(''),
      additionalNotes: new FormControl(''),
      agreeToTerms: new FormControl(false, [Validators.requiredTrue])
    });
  }

  getErrorMessage(control: FormControl): string {
    if (control.hasError('required')) {
      return 'This field is required';
    }
    if (control.hasError('email')) {
      return 'Please enter a valid email address';
    }
    if (control.hasError('pattern')) {
      return 'Please enter a valid phone number';
    }
    if (control.hasError('minlength')) {
      return `Minimum length is ${control.errors?.['minlength'].requiredLength} characters`;
    }
    if (control.hasError('requiredTrue')) {
      return 'You must agree to the terms and conditions';
    }
    return '';
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  isFieldInvalid(form: FormGroup, fieldName: string): boolean {
    const field = form.get(fieldName);
    return field ? field.invalid && field.touched : false;
  }

  getEducationLevels() {
    return [
      { label: 'High School', value: 'high-school' },
      { label: 'Diploma', value: 'diploma' },
      { label: 'Bachelor\'s Degree', value: 'bachelor' },
      { label: 'Master\'s Degree', value: 'master' },
      { label: 'Other', value: 'other' }
    ];
  }

  getBatchOptions() {
    return [
      { label: 'Weekday (Mon-Fri)', value: 'weekday' },
      { label: 'Weekend (Sat-Sun)', value: 'weekend' },
      { label: 'Online (Flexible)', value: 'online' }
    ];
  }

  getContactSubjects() {
    return [
      { label: 'General Inquiry', value: 'general' },
      { label: 'Course Information', value: 'courses' },
      { label: 'Admission Process', value: 'admission' },
      { label: 'Call Center Services', value: 'call-center' },
      { label: 'Corporate Training', value: 'corporate' },
      { label: 'Technical Support', value: 'technical' }
    ];
  }
}