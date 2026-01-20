import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
// PrimeNG v21 Components
import { InputTextModule } from 'primeng/inputtext';
import { TabsModule } from 'primeng/tabs';
import { InputMaskModule } from 'primeng/inputmask';
import { TextareaModule } from 'primeng/textarea';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ToastModule, Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { SectionHeader } from '../../shared/components/section-header/section-header';
import { CtaButton } from '../../shared/components/cta-button/cta-button';
import { FormValidationService } from '../../core/services/form-validation.service';
import { COURSE_DATA } from '../../shared/models/course';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admissions',
  imports: [CommonModule,TextareaModule,SelectModule,DatePickerModule,RouterModule,InputTextModule,InputMaskModule,RadioButtonModule,CheckboxModule,ButtonModule,ReactiveFormsModule, CardModule,ToastModule,TabsModule,Toast],
  templateUrl: './admissions.html',
  styleUrl: './admissions.css',
  providers: [MessageService],
})
export class Admissions implements OnInit {
  bgPattern = `url("data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.4\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;
  
  contactForm!: FormGroup;
  isSubmitting = false;
  
  subjectOptions = [
    { label: 'Course Inquiry', value: 'course' },
    { label: 'Admission Information', value: 'admission' },
    { label: 'Call Center Services', value: 'services' },
    { label: 'Partnership Opportunities', value: 'partnership' },
    { label: 'Career Counseling', value: 'counseling' },
    { label: 'Technical Support', value: 'support' },
    { label: 'Other', value: 'other' }
  ];
  
  contactMethods = [
    { id: 'email', value: 'email', label: 'Email', icon: 'pi pi-envelope' },
    { id: 'phone', value: 'phone', label: 'Phone Call', icon: 'pi pi-phone' },
    { id: 'whatsapp', value: 'whatsapp', label: 'WhatsApp', icon: 'pi pi-whatsapp' }
  ];

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?[\d\s\-\(\)]+$/)]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
      preferredContact: ['email']
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const control = this.contactForm.get(fieldName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  getErrorMessage(fieldName: string): string {
    const control = this.contactForm.get(fieldName);
    
    if (!control || !control.errors) return '';
    
    if (control.errors['required']) {
      return 'This field is required';
    }
    
    if (control.errors['email']) {
      return 'Please enter a valid email address';
    }
    
    if (control.errors['minlength']) {
      return `Minimum length is ${control.errors['minlength'].requiredLength} characters`;
    }
    
    if (control.errors['pattern']) {
      return 'Please enter a valid phone number';
    }
    
    return 'Invalid value';
  }

  onSubmit(): void {
    if (this.contactForm.invalid) {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        const control = this.contactForm.get(key);
        control?.markAsTouched();
      });
      return;
    }

    this.isSubmitting = true;
    const formData = this.contactForm.value;

    // For now, log to console and show success message
    // Later, replace with actual API call
    console.log('Contact Form Submitted:', formData);

    // Simulate API call delay
    setTimeout(() => {
      this.isSubmitting = false;
      
      // Reset form
      this.contactForm.reset({
        preferredContact: 'email'
      });
      
      // Show success message
      this.messageService.add({
        severity: 'success',
        summary: 'Message Sent Successfully!',
        detail: 'Thank you for contacting Gateway Institute. We will respond within 24 hours.',
        life: 5000
      });
      
      // For development: Show what would be sent to API
      console.log('API Payload:', {
        ...formData,
        timestamp: new Date().toISOString(),
        source: 'website_contact_form'
      });
      
    }, 1500);
  }

  // Method for actual API call (uncomment when API is ready)
  private submitToApi(formData: any): void {
    // Uncomment this when your Node.js API is ready
    /*
    this.http.post('http://localhost:3000/api/contact', formData)
      .subscribe({
        next: (response) => {
          this.isSubmitting = false;
          this.messageService.add({
            severity: 'success',
            summary: 'Message Sent!',
            detail: 'We will contact you soon.',
            life: 5000
          });
          this.contactForm.reset({ preferredContact: 'email' });
        },
        error: (error) => {
          this.isSubmitting = false;
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Failed to send message. Please try again.',
            life: 5000
          });
        }
      });
    */
  }
}