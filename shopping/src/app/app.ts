import { Component, signal } from '@angular/core';
import { RouterOutlet , RouterLink, RouterLinkActive} from '@angular/router';
import { AuthService } from './auth/auth.service.js';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  constructor(public auth: AuthService) {}
  protected readonly title = signal('shopping');
}
