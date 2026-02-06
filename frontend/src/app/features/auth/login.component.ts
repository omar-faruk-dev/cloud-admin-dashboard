import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  standalone: true,
  imports: [FormsModule],
  template: `
    <h1>Sign in</h1>
    <form (ngSubmit)="login()" aria-label="Login form">
      <label for="email">Email</label>
      <input id="email" [(ngModel)]="email" name="email" required />
      <label for="password">Password</label>
      <input id="password" [(ngModel)]="password" name="password" type="password" required />
      <button type="submit">Continue</button>
    </form>
  `
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private readonly authService: AuthService, private readonly router: Router) {}

  login(): void {
    this.authService.login(this.email, this.password).subscribe(() => void this.router.navigate(['/dashboard']));
  }
}
