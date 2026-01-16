import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { COURSE_DATA } from '../../shared/models/course';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { CtaButton } from '../../shared/components/cta-button/cta-button';
import { CourseCard } from '../../shared/components/course-card/course-card';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { BadgeModule } from 'primeng/badge';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, ButtonModule, CardModule
    ,
    CarouselModule,
    TagModule,
    BadgeModule,
    SectionHeader,
    CtaButton,
    CourseCard

  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  featuredCourses = COURSE_DATA.filter(course => course.isFeatured || course.id <= 3);
  
  responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '1199px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  ngOnInit() {
    console.log('Home Component Loaded');
  }
}