import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Para usar ngModel en formularios
import { AuthService } from '../../services/auth';
@Component({
  selector: 'app-login',
  standalone:true,
  imports: [CommonModule,RouterModule,FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})


export class Login {
  email:string="";
  password:string="";
  constructor(private authService: AuthService, private router: Router) {}
  onSubmit() {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        this.authService.saveToken(response.token);
        this.router.navigate(['/']); // cambia a tu ruta protegida
      },
      error: (err) => {
        console.error('Login fallido:', err);
        alert('Credenciales inválidas o error del servidor');
      }
    });
  }
}

