import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class LoginComponent {
  email = '';
  password = '';
  error : string | null = null;
  loading: boolean = false;

  constructor(private router: Router, private authService: AuthService) {

  }

  login() {
    console.log("email", this.email);
    console.log("passowrd", this.password);
    this.loading = true;
    this.authService.login(this.email, this.password).subscribe({
      next: () => {
        this.router.navigate(['/products']);
        this.loading = false;
      },
      error: () => {
        this.error = 'Login Failed!'
        this.loading = false;
      }
    })
  }
}
