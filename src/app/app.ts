import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Footer } from './core/components/footer/footer';
import { Header } from './core/components/header/header';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ButtonModule,Footer,Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Gateway');
}
