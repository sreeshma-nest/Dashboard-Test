import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SidemenuComponent } from '../sidemenu/sidemenu.component';
import { LogoComponent } from '../logo/logo.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule,LogoComponent, HeaderComponent, FooterComponent, RouterOutlet, SidemenuComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  titleName ="Let's see";

  username: string = 'Guest';

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    const state = nav?.extras?.state as { username: string };
    this.username = state?.username || 'Guest';
}
}
