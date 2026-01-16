import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TEAM_MEMBERS } from '../../shared/models/team.model';
import { COMPANY_MILESTONES, COMPANY_VALUES, CompanyMilestone } from '../../shared/models/company.model';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TeamCard } from '../../shared/components/team-card/team-card/team-card';
import { CtaButton } from '../../shared/components/cta-button/cta-button';
import { SectionHeader } from '../../shared/components/section-header/section-header';
import { TimelineModule } from 'primeng/timeline';
import { CarouselModule } from 'primeng/carousel';
@Component({
  selector: 'app-about',
  imports: [
     CommonModule,
    RouterModule,
    CardModule,
    ButtonModule,
    TimelineModule,
    CarouselModule,
    SectionHeader,
    CtaButton,
    TeamCard
  ],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit {
  teamMembers = TEAM_MEMBERS;
  milestones: CompanyMilestone[] = COMPANY_MILESTONES;
  companyValues = COMPANY_VALUES;
  bgPattern = `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;

  ngOnInit() {
    // Sort milestones by year
    this.milestones = [...COMPANY_MILESTONES].sort((a, b) => a.year - b.year);
  }
}