import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule,RouterLink, MenubarModule, ButtonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header  implements OnInit {
  isMobileMenuOpen = false;
  
  navItems = [
    { label: 'Home', route: '/' },
    { label: 'About', route: '/about' },
    { label: 'Courses', route: '/courses' },
    { label: 'Admissions', route: '/admissions' },
    // { label: 'Call Center Services', route: '/call-center-services' }
  ];

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  ngOnInit() {
    // Close mobile menu on window resize (if resized to desktop)
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024) {
        this.isMobileMenuOpen = false;
      }
    });
  }
}
