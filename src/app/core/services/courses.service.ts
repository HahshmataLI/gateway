import { Injectable } from '@angular/core';
import { Course, COURSE_DATA } from '../../shared/models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private allCourses = COURSE_DATA;

  getAllCourses(): Course[] {
    return [...this.allCourses]; // Return copy
  }

  getCoursesByCategory(category: string): Course[] {
    if (!category || category === 'all') {
      return [...this.allCourses];
    }
    return this.allCourses.filter(course => course.category === category);
  }

  searchCourses(query: string): Course[] {
    if (!query.trim()) {
      return [...this.allCourses];
    }
    const searchTerm = query.toLowerCase();
    return this.allCourses.filter(course =>
      course.title.toLowerCase().includes(searchTerm) ||
      course.description.toLowerCase().includes(searchTerm) ||
      course.tags?.some(tag => tag.toLowerCase().includes(searchTerm))
    );
  }

  getFeaturedCourses(): Course[] {
    return this.allCourses.filter(course => course.isFeatured);
  }

  getCategories(): string[] {
    const categories = [...new Set(this.allCourses.map(course => course.category))];
    return ['All', ...categories];
  }

  getLevels(): string[] {
    const levels = [...new Set(this.allCourses.map(course => course.level))];
    return ['All', ...levels];
  }

  getPriceRanges(): { label: string; min: number; max: number }[] {
    return [
      { label: 'All', min: 0, max: Infinity },
      { label: 'Under $300', min: 0, max: 299 },
      { label: '$300 - $500', min: 300, max: 500 },
      { label: '$500 - $700', min: 500, max: 700 },
      { label: 'Over $700', min: 701, max: Infinity }
    ];
  }

  filterCourses(filters: {
    category?: string;
    level?: string;
    priceRange?: string;
    search?: string;
  }): Course[] {
    let filtered = [...this.allCourses];

    // Apply filters in optimal order
    if (filters.search) {
      filtered = this.searchCourses(filters.search);
    }

    if (filters.category && filters.category !== 'All') {
      filtered = filtered.filter(course => course.category === filters.category);
    }

    if (filters.level && filters.level !== 'All') {
      filtered = filtered.filter(course => course.level === filters.level);
    }

    if (filters.priceRange && filters.priceRange !== 'All') {
      const priceRange = this.getPriceRanges().find(range => range.label === filters.priceRange);
      if (priceRange) {
        filtered = filtered.filter(course => 
          course.price >= priceRange.min && course.price <= priceRange.max
        );
      }
    }

    return filtered;
  }

  sortCourses(courses: Course[], sortBy: string): Course[] {
    const sorted = [...courses];
    
    switch (sortBy) {
      case 'price-low':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-high':
        return sorted.sort((a, b) => b.price - a.price);
      case 'duration':
        return sorted.sort((a, b) => {
          const aDuration = parseInt(a.duration) || 0;
          const bDuration = parseInt(b.duration) || 0;
          return aDuration - bDuration;
        });
      case 'name':
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      default:
        return sorted;
    }
  }
}