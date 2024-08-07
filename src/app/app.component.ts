import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {}

  hide() {
    if (this.router.url === "/login" || this.router.url === "/register") {
      return false
    } else {
      return true
    }
  }

  logout() {
    localStorage.removeItem("id");
    localStorage.removeItem("username");
    localStorage.removeItem("fullname");
    localStorage.removeItem("foto_profil");
    this.router.navigate(['/login']);
  }
}
