import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SystemService {
  private userSubject = new BehaviorSubject<User | null>(null);
  public user$ = this.userSubject.asObservable();

  constructor(private router: Router) {}

  getUser(): User | null {
    return this.userSubject.getValue();
  }

  setUser(user: User): void {
    this.userSubject.next(user);
  }

  clearUser(): void {
    this.userSubject.next(null);
  }

  // checkLogin(): void {
  //   // check loggedInUser, if not logged in, forward to Login page
  //   // only call this method when ready for primetime
  //   if (this.loggedInUser.id == 0) {
  //     console.log('User not authenticated. Redirecting to login.');
  //     this.router.navigateByUrl('/user-login');
  //   }
  // }
}
