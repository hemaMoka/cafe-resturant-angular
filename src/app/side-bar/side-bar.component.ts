import { Component, HostListener } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
        constructor(private _AuthServiceService:AuthService , private _Router:Router) {
    _AuthServiceService.isLogin.subscribe({
      next: () => {
        if (_AuthServiceService.isLogin.getValue() == false) {
          this.isLogged = false;
        } else {
          this.isLogged = true;
        }
      }
    })

  }

  isLogged: boolean = false;

  logOut() {
    this._AuthServiceService.isLogin.next(false);
    this._Router.navigate(['/login']);
    localStorage.clear();
    this.sidebarVisible = false;
  }

  sidebarVisible: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let element = document.querySelector('.my-nav') as HTMLElement;
    if (window.scrollY > element.clientHeight + 200) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }

}
