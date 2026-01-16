import { Component, Input } from '@angular/core';
import { Course } from '../../models/course';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { BadgeModule } from 'primeng/badge';
@Component({
  selector: 'app-course-card',
  imports: [CommonModule,BadgeModule,CardModule],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard {
  @Input() course!: Course;

  getCourseInitials(): string {
    return this.course.title
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  }
}