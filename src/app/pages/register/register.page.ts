import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class RegisterPage {
  nombres = '';
  usuario = '';
  correo = '';
  clave = '';
  confirmarClave = '';
  errorMsg = '';

  constructor(private router: Router) {}

  createAccount() {
    this.errorMsg = '';

    if (!this.nombres.trim() || !this.usuario.trim() || !this.correo.trim() || !this.clave.trim()) {
      this.errorMsg = 'Completa todos los campos obligatorios.';
      return;
    }

    if (this.clave !== this.confirmarClave) {
      this.errorMsg = 'Las claves no coinciden.';
      return;
    }

    // Demo: cuenta creada -> volver a login
    this.router.navigateByUrl('/login');
  }

  backToLogin() {
    this.router.navigateByUrl('/login');
  }
}
