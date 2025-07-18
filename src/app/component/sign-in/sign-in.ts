import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth';
import { FormsModule, NgModel } from '@angular/forms';
@Component({
  selector: 'app-sign-in',
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css'
})
export class SignIn {
  username = '';
  email = '';
  password = '';
  confirmPassword='';
  mensaje = '';
  error = '';

  constructor(private authService: AuthService) {}

  onRegister() {
if (this.password == this.confirmPassword){

    this.authService.register(this.username, this.email, this.password).subscribe({
      next: (res) => {
        this.mensaje = res.msg;
        this.error = '';
      },
      error: (err) => {
        this.error = err.error.msg || 'Error al registrar';
        this.mensaje = '';
      }
    });
  }
else{
  alert("no coincide la contraseña");

}
}
}
