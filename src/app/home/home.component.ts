import { Component } from '@angular/core';

@Component({
  selector: 'app-subscribe',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  isFormVisible = false;
  email = '';
  emailError = '';

  toggleForm(): void {
    this.isFormVisible = !this.isFormVisible;
  }

  onSubmit(): void {
    // Handle form submission here
    if (!this.email) {
      this.emailError = 'Email is required.';
      return;
    }

    // Reset error if no validation errors
    this.emailError = '';

    // Normally you would send the email to a server here
    console.log('Email submitted:', this.email);
  }
}
