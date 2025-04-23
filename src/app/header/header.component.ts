import { Component, Input ,ElementRef, HostListener, ViewChild,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private router = inject(Router);
  private userService = inject(UserService);
  showDropdown = false;
  @ViewChild('dropdownRef') dropdownRef!: ElementRef;
 
  username = this.userService.getUsername();
  
  ngOnInit() {
    this.username = this.userService.getUsername();
    console.log(this.username);
  }

  @Input() titleName: string = 'Dashasboard';  

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  logout() {
    console.log("Logout");
    this.router.navigate(['/home']);
  }
  

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedInside = this.dropdownRef?.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.showDropdown = false;
    }
  }
}
