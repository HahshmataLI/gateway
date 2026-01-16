import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-cta-button',
  imports: [CommonModule, ButtonModule],
  templateUrl: './cta-button.html',
  styleUrl: './cta-button.css',
})
export class CtaButton{
  @Input() label: string = 'Get Started';
  @Input() variant: 'primary' | 'secondary' | 'outline' = 'primary';
  @Input() icon: string = '';
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() fullWidth: boolean = false;
  @Output() onClick = new EventEmitter<Event>();

  get buttonClasses(): string {
    const baseClasses = 'font-semibold py-3 px-6 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
    const widthClass = this.fullWidth ? 'w-full' : '';
    
    const variantClasses = {
      primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-none hover:from-blue-700 hover:to-purple-700 focus:ring-blue-500',
      secondary: 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 focus:ring-blue-500',
      outline: 'bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-50 focus:ring-blue-500'
    };

    return `${baseClasses} ${variantClasses[this.variant]} ${widthClass}`;
  }
}