import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Role = 'admin' | 'tecnico' | 'seguridad' | 'operaciones';

export interface UserModel {
  username: string;
  role: Role;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly KEY = 'nedetel_user';
  private _user$ = new BehaviorSubject<UserModel | null>(this.read());

  user$ = this._user$.asObservable();

  get user(): UserModel | null {
    return this._user$.value;
  }

  isLoggedIn(): boolean {
    return !!this.user;
  }

  register(username: string, password: string, role: Role = 'operaciones'): void {
    // DEMO: en real aquí llamas API
    const u: UserModel = { username, role };
    localStorage.setItem(this.KEY, JSON.stringify(u));
    this._user$.next(u);
  }

  login(username: string, password: string): boolean {
    // DEMO: si existe usuario guardado, lo loguea; si no, crea uno por defecto
    const existing = this.read();
    const role: Role =
      username.toLowerCase() === 'seguridad' ? 'seguridad' :
      username.toLowerCase() === 'sup' ? 'admin' :
      existing?.role ?? 'operaciones';

    const u: UserModel = { username, role };
    localStorage.setItem(this.KEY, JSON.stringify(u));
    this._user$.next(u);
    return true;
  }

  logout(): void {
    localStorage.removeItem(this.KEY);
    this._user$.next(null);
  }

  private read(): UserModel | null {
    try {
      const raw = localStorage.getItem(this.KEY);
      return raw ? (JSON.parse(raw) as UserModel) : null;
    } catch {
      return null;
    }
  }
}
