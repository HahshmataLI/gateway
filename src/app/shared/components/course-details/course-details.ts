import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { RatingModule } from 'primeng/rating';
import { Course } from '../../models/course';
@Component({
  selector: 'app-course-details',
  imports: [
    CommonModule, DialogModule, ButtonModule, BadgeModule, RatingModule, FormsModule
  ],
  templateUrl: './course-details.html',
  styleUrl: './course-details.css',
  
})
export class CourseDetails {
  @Input() course: Course | null = null;
  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() onHide = new EventEmitter<void>();

  getLevelSeverity(level: string): any {
    switch(level.toLowerCase()) {
      case 'beginner': return 'success';
      case 'intermediate': return 'warning';
      case 'advanced': return 'danger';
      default: return 'info';
    }
  }
}