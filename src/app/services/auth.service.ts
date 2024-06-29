import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userId : BehaviorSubject<string> = new BehaviorSubject('');

  constructor() { }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUserId() {
    return this.userId.value
  }

  setUserId(id: string) {
    this.userId.next(id);
  }

  isLoggedIn(): boolean {
    const token = this.getToken();
    return token !== null;
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
  }
}
