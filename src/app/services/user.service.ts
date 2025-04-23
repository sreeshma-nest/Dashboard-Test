import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  username = signal<string | null>(null);

  setUsername(name: string) {
    this.username.set(name);
  }

  getUsername() {
    return this.username.asReadonly();
  }
}
