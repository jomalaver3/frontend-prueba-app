import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend-prueba-app';
  constructor(private router: Router) { }

  isLoginRoute(): boolean {
    return this.router.url === '/login';
  }

}
