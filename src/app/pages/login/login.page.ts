import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class LoginPage {
  username = '';
  password = '';
  errorMsg = '';

  constructor(private router: Router) {}

  onLogin() {
    this.errorMsg = '';

    // Validación mínima
    if (!this.username.trim() || !this.password.trim()) {
      this.errorMsg = 'Por favor ingresa usuario y clave.';
      return;
    }

    // Demo: login correcto -> Dashboard
    this.router.navigateByUrl('/dashboard');
  }

  goRegister() {
    this.router.navigateByUrl('/register');
  }
}
