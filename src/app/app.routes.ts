import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [  { path: '', component: LoginComponent }, // Landing page
    {
      path: 'dashboard',
      component: DashboardComponent,
      children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },  // 👈 This line is important
        { path: 'home', component: HomeComponent }]
    },
    { path: '**', redirectTo: '' } // Redirect unknown paths to login
];
