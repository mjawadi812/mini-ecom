import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
    private tokenKey = 'app_token';

    private loggedInSubject = new BehaviorSubject<boolean>(this.hasToken());
    readonly loggedIn = this.loggedInSubject.asObservable();

    login(userName: string, password: string): Observable<{token:string}> {
      return of({token: 'jwt-token'}).pipe(delay(500), tap(response => {
        localStorage.setItem(this.tokenKey, response.token);
        this.loggedInSubject.next(true);
      }))
    }

    logout(): void {
      localStorage.removeItem(this.tokenKey);
      this.loggedInSubject.next(false);
    }

    isLoggedIn() {
      return this.loggedInSubject.value;
    }
    
    private hasToken() : boolean{
      return !!localStorage.getItem(this.tokenKey);
    }
}
