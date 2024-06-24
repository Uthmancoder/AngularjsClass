import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'], // Corrected property name and made it an array
})
export class SignUpComponent {
  form = this.fb.group({
    firstName: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(15)],
    ],
    lastName: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(15)],
    ],
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15),
        // Assuming you have a specific regex pattern for the password
        Validators.pattern('/^[A-Za-z]*A-Z *a-z 0-9]$'),
      ],
    ],
  });

  // Custom error messages
  errorMessages = {
    firstName: {
      required: 'First name is required',
      minlength: 'First name must be at least 5 characters long',
      maxlength: 'First name cannot be more than 15 characters long',
    },
    lastName: {
      required: 'Last name is required',
      minlength: 'Last name must be at least 5 characters long',
      maxlength: 'Last name cannot be more than 15 characters long',
    },
    email: {
      required: 'Email is required',
      email: 'Please enter a valid email address',
    },
    password: {
      required: 'Password is required',
      minlength: 'Password must be at least 6 characters long',
      maxlength: 'Password cannot be more than 15 characters long',
      pattern: 'Password does not meet complexity requirements',
    },
  };

  constructor(private fb: FormBuilder) {}

  submitForm() {
    console.log('Form Values:', this.form.getRawValue());
  }
}
