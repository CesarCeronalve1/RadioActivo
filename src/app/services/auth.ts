import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = "http://localhost:5000";

  constructor(private http: HttpClient) { }

  // Método para hacer login: envía email y password, recibe token
  login(email: string, password: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, {
      email,
      password
    });
  }

  // Guarda el token en localStorage
  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  // Recupera el token guardado
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Elimina el token para logout
  logout() {
    localStorage.removeItem('token');
  }

  // Comprueba si hay token (usuario autenticado)
  isAuthenticated(): boolean {
    return !!this.getToken();
  }
  register(username: string, email: string, password: string): Observable<{ msg: string }> {
    return this.http.post<{ msg: string }>(`${this.apiUrl}/register`, {
      username,
      email,
      password
    });
  }
}
