import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private tokenKey = 'cad_token';

  constructor(private readonly http: HttpClient) {}

  login(email: string, password: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>('/api/auth/login', { email, password }).pipe(
      tap((response) => localStorage.setItem(this.tokenKey, response.token))
    );
  }

  token(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
}
