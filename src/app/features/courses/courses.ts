import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
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
    CourseCard,
    CtaButton
],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses  implements OnInit, OnDestroy {
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
    { label: 'Recommended', value: 'default', icon: 'pi pi-star' },
    { label: 'Price: Low to High', value: 'price-low', icon: 'pi pi-sort-amount-up' },
    { label: 'Price: High to Low', value: 'price-high', icon: 'pi pi-sort-amount-down' },
    { label: 'Duration', value: 'duration', icon: 'pi pi-clock' },
    { label: 'Name (A-Z)', value: 'name', icon: 'pi pi-sort-alpha-down' }
  ];
  
  skeletonItems = Array(6).fill(0);
  
  private searchSubject = new Subject<string>();
  private searchSubscription?: Subscription;
  
  constructor(
    private coursesService: CoursesService,
    private cdr: ChangeDetectorRef
  ) {}
  
  ngOnInit() {
    this.initializeData();
    this.setupSearchDebounce();
  }
  
  ngOnDestroy() {
    this.searchSubscription?.unsubscribe();
  }
  
  private initializeData() {
    this.isLoading = true;
    
    setTimeout(() => {
      this.allCourses = this.coursesService.getAllCourses();
      this.filteredCourses = [...this.allCourses];
      
      this.categories = this.coursesService.getCategories();
      this.levels = this.coursesService.getLevels();
      this.priceRanges = this.coursesService.getPriceRanges();
      
      this.isLoading = false;
      this.cdr.markForCheck();
    }, 0);
  }
  
  private setupSearchDebounce() {
    this.searchSubscription = this.searchSubject
      .pipe(
        debounceTime(200),
        distinctUntilChanged()
      )
      .subscribe(() => {
        this.applyFilters();
      });
  }
  
  onSearchChange(query: string) {
    this.searchQuery = query;
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
  
  onSortChange(sortValue?: string) {
    if (sortValue) {
      this.selectedSort = sortValue;
    }
    this.applyFilters();
  }
  
  applyFilters() {
    this.isLoading = true;
    this.cdr.markForCheck();
    
    setTimeout(() => {
      let filtered = this.coursesService.filterCourses({
        category: this.selectedCategory !== 'All' ? this.selectedCategory : undefined,
        level: this.selectedLevel !== 'All' ? this.selectedLevel : undefined,
        priceRange: this.selectedPriceRange !== 'All' ? this.selectedPriceRange : undefined,
        search: this.searchQuery
      });
      
      if (this.selectedSort !== 'default') {
        filtered = this.coursesService.sortCourses(filtered, this.selectedSort);
      }
      
      this.filteredCourses = filtered;
      this.isLoading = false;
      this.cdr.markForCheck();
    }, 50);
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
    console.log('Load more courses');
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
    const baseClasses = 'w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex justify-between items-center hover:scale-[1.02] active:scale-[0.98]';
    return this.selectedCategory === category
      ? `${baseClasses} bg-blue-600 text-white shadow-md`
      : `${baseClasses} bg-gray-50 hover:bg-gray-100 text-gray-800 border border-gray-200`;
  }
  
  getLevelButtonClass(level: string): string {
    const baseClasses = 'w-full text-left px-4 py-3 rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]';
    return this.selectedLevel === level
      ? `${baseClasses} bg-purple-600 text-white shadow-md`
      : `${baseClasses} bg-gray-50 hover:bg-gray-100 text-gray-800 border border-gray-200`;
  }
  
  getPriceRangeButtonClass(range: string): string {
    const baseClasses = 'w-full text-left px-4 py-3 rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]';
    return this.selectedPriceRange === range
      ? `${baseClasses} bg-green-600 text-white shadow-md`
      : `${baseClasses} bg-gray-50 hover:bg-gray-100 text-gray-800 border border-gray-200`;
  }
  
  getSortButtonClass(sortValue: string): string {
    const baseClasses = 'px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 border hover:shadow-sm';
    return this.selectedSort === sortValue
      ? `${baseClasses} bg-blue-600 text-white border-blue-600 shadow-sm`
      : `${baseClasses} bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400`;
  }
  
  getCategoryColor(category: string): string {
    const colors: { [key: string]: string } = {
      'Digital Marketing': 'bg-gradient-to-br from-blue-500 to-blue-600',
      'Shopify': 'bg-gradient-to-br from-purple-500 to-purple-600',
      'Web Development': 'bg-gradient-to-br from-green-500 to-green-600',
      'SEO': 'bg-gradient-to-br from-orange-500 to-orange-600',
      'Freelancing': 'bg-gradient-to-br from-pink-500 to-pink-600'
    };
    return colors[category] || 'bg-gradient-to-br from-gray-500 to-gray-600';
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
  
  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }
}