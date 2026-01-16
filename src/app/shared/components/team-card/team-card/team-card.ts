import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TeamMember } from '../../../models/team.model';
@Component({
  selector: 'app-team-card',
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './team-card.html',
  styleUrl: './team-card.css',
})
export class TeamCard {
  @Input() teamMember!: TeamMember;

  getInitials(): string {
    return this.teamMember.name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  }
}