import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  imports: [CommonModule],
  templateUrl: './section-header.html',
  styleUrl: './section-header.css',
})
export class SectionHeader  {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() description: string = '';
}
