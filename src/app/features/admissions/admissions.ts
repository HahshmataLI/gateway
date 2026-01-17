import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
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

@Component({
  selector: 'app-admissions',
  imports: [CommonModule,TextareaModule,SelectModule,DatePickerModule,RouterModule,InputTextModule,InputMaskModule,RadioButtonModule,CheckboxModule,ButtonModule,ReactiveFormsModule, CardModule,ToastModule,TabsModule,Toast],
  templateUrl: './admissions.html',
  styleUrl: './admissions.css',
  providers: [MessageService],
})
export class Admissions implements OnInit {
  private formValidation = inject(FormValidationService);
  private messageService = inject(MessageService);
  bgPattern = `url("data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.4\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")`;
  
  contactForm!: FormGroup;
  admissionForm!: FormGroup;
  isSubmitting = false;
  
  courseOptions = COURSE_DATA.map(course => ({ 
    label: course.title, 
    value: course.id,
    title: course.title 
  }));
  
  educationLevels = this.formValidation.getEducationLevels();
  batchOptions = this.formValidation.getBatchOptions();
  contactSubjects = this.formValidation.getContactSubjects();

  ngOnInit() {
    this.contactForm = this.formValidation.createContactForm();
    this.admissionForm = this.formValidation.createAdmissionForm();
  }

  isFieldInvalid(form: FormGroup, fieldName: string): boolean {
    return this.formValidation.isFieldInvalid(form, fieldName);
  }

  getErrorMessage(control: FormControl | null): string {
    if (!control) return '';
    return this.formValidation.getErrorMessage(control);
  }

  onContactSubmit() {
    if (this.contactForm.invalid) {
      this.formValidation.markFormGroupTouched(this.contactForm);
      return;
    }

    this.isSubmitting = true;
    console.log('Contact Form Submitted:', this.contactForm.value);

    // Simulate API call
    setTimeout(() => {
      this.isSubmitting = false;
      this.contactForm.reset({
        preferredContact: 'email'
      });
      
      this.messageService.add({
        severity: 'success',
        summary: 'Message Sent',
        detail: 'Thank you for contacting us! We will respond within 24 hours.',
        life: 5000
      });
    }, 1500);
  }

  onAdmissionSubmit() {
    if (this.admissionForm.invalid) {
      this.formValidation.markFormGroupTouched(this.admissionForm);
      return;
    }

    this.isSubmitting = true;
    console.log('Admission Form Submitted:', this.admissionForm.value);

    // Simulate API call
    setTimeout(() => {
      this.isSubmitting = false;
      this.admissionForm.reset({
        preferredBatch: 'weekday',
        agreeToTerms: false
      });
      
      this.messageService.add({
        severity: 'success',
        summary: 'Application Submitted',
        detail: 'Thank you for your application! Our admissions team will contact you within 24 hours.',
        life: 5000
      });
    }, 1500);
  }
}