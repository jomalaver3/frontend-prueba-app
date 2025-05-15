/* import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  isLoggedIn$: Observable<boolean>;

  constructor(public authService: AuthService) {
    this.isLoggedIn$ = this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
  }
} */


import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class LayoutComponent {
  isLoggedIn$: Observable<boolean>;

  constructor(public authService: AuthService) {
    this.isLoggedIn$ = this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
  }
}