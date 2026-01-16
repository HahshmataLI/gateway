import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject, Subscription } from 'rxjs';
import { Course } from '../../shared/models/course';
import { CoursesService } from '../../core/services/courses.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { CourseCard } from '../../shared/components/course-card/course-card';
import { CtaButton } from '../../shared/components/cta-button/cta-button';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CardModule } from 'primeng/card';
// import { DropdownModule } from 'primeng/dropdown';
@Component({
  selector: 'app-courses',
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    InputTextModule,
    // DropdownModule,
    ButtonModule,
    CardModule,
    SelectButtonModule,
    ProgressSpinnerModule,
    SectionHeader,
    CourseCard,
    CtaButton
  ],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses implements OnInit, OnDestroy {
  allCourses: Course[] = [];
  filteredCourses: Course[] = [];
  isLoading = false;
  
  // Filters
  searchQuery = '';
  selectedCategory = 'All';
  selectedLevel = 'All';
  selectedPriceRange = 'All';
  selectedSort = 'default';
  
  // Options
  categories: string[] = [];
  levels: string[] = [];
  priceRanges: { label: string; min: number; max: number }[] = [];
  
  sortOptions = [
    { label: 'Recommended', value: 'default' },
    { label: 'Price: Low to High', value: 'price-low' },
    { label: 'Price: High to Low', value: 'price-high' },
    { label: 'Duration', value: 'duration' },
    { label: 'Name (A-Z)', value: 'name' }
  ];
  
  private searchSubject = new Subject<string>();
  private searchSubscription?: Subscription;
  
  constructor(private coursesService: CoursesService) {}
  
  ngOnInit() {
    this.initializeData();
    this.setupSearchDebounce();
  }
  
  ngOnDestroy() {
    this.searchSubscription?.unsubscribe();
  }
  
  private initializeData() {
    this.isLoading = true;
    
    // Simulate API call delay
    setTimeout(() => {
      this.allCourses = this.coursesService.getAllCourses();
      this.filteredCourses = [...this.allCourses];
      
      this.categories = this.coursesService.getCategories();
      this.levels = this.coursesService.getLevels();
      this.priceRanges = this.coursesService.getPriceRanges();
      
      this.isLoading = false;
    }, 300);
  }
  
  private setupSearchDebounce() {
    this.searchSubscription = this.searchSubject
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe(() => {
        this.applyFilters();
      });
  }
  
  onSearchChange(query: string) {
    this.searchSubject.next(query);
  }
  
  filterByCategory(category: string) {
    this.selectedCategory = category;
    this.applyFilters();
  }
  
  filterByLevel(level: string) {
    this.selectedLevel = level;
    this.applyFilters();
  }
  
  filterByPriceRange(range: string) {
    this.selectedPriceRange = range;
    this.applyFilters();
  }
  
  onSortChange() {
    this.applyFilters();
  }
  
  applyFilters() {
    this.isLoading = true;
    
    // Simulate filter delay
    setTimeout(() => {
      let filtered = this.coursesService.filterCourses({
        category: this.selectedCategory !== 'All' ? this.selectedCategory : undefined,
        level: this.selectedLevel !== 'All' ? this.selectedLevel : undefined,
        priceRange: this.selectedPriceRange !== 'All' ? this.selectedPriceRange : undefined,
        search: this.searchQuery
      });
      
      // Apply sorting
      if (this.selectedSort !== 'default') {
        filtered = this.coursesService.sortCourses(filtered, this.selectedSort);
      }
      
      this.filteredCourses = filtered;
      this.isLoading = false;
    }, 200);
  }
  
  clearFilters() {
    this.searchQuery = '';
    this.selectedCategory = 'All';
    this.selectedLevel = 'All';
    this.selectedPriceRange = 'All';
    this.selectedSort = 'default';
    this.applyFilters();
  }
  
  loadMoreCourses() {
    // In a real app, this would load more courses from an API
    // For now, we'll just show all courses
    this.filteredCourses = [...this.allCourses];
  }
  
  get activeFiltersCount(): number {
    let count = 0;
    if (this.selectedCategory !== 'All') count++;
    if (this.selectedLevel !== 'All') count++;
    if (this.selectedPriceRange !== 'All') count++;
    if (this.searchQuery.trim()) count++;
    return count;
  }
  
  getCourseCountByCategory(category: string): number {
    if (category === 'All') return this.allCourses.length;
    return this.allCourses.filter(course => course.category === category).length;
  }
  
  getCategoryButtonClass(category: string): string {
    const baseClasses = 'w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 flex justify-between items-center';
    return this.selectedCategory === category
      ? `${baseClasses} bg-blue-600 text-white`
      : `${baseClasses} bg-gray-100 hover:bg-gray-200 text-gray-800`;
  }
  
  getLevelButtonClass(level: string): string {
    const baseClasses = 'w-full text-left px-4 py-3 rounded-lg transition-colors duration-200';
    return this.selectedLevel === level
      ? `${baseClasses} bg-purple-600 text-white`
      : `${baseClasses} bg-gray-100 hover:bg-gray-200 text-gray-800`;
  }
  
  getPriceRangeButtonClass(range: string): string {
    const baseClasses = 'w-full text-left px-4 py-3 rounded-lg transition-colors duration-200';
    return this.selectedPriceRange === range
      ? `${baseClasses} bg-green-600 text-white`
      : `${baseClasses} bg-gray-100 hover:bg-gray-200 text-gray-800`;
  }
  
  getCategoryColor(category: string): string {
    const colors: { [key: string]: string } = {
      'Digital Marketing': 'bg-blue-500',
      'Shopify': 'bg-purple-500',
      'Web Development': 'bg-green-500',
      'SEO': 'bg-orange-500',
      'Freelancing': 'bg-pink-500'
    };
    return colors[category] || 'bg-gray-500';
  }
  
  getCategoryIcon(category: string): string {
    const icons: { [key: string]: string } = {
      'Digital Marketing': 'pi pi-megaphone',
      'Shopify': 'pi pi-shopping-cart',
      'Web Development': 'pi pi-code',
      'SEO': 'pi pi-chart-line',
      'Freelancing': 'pi pi-briefcase'
    };
    return icons[category] || 'pi pi-book';
  }
}