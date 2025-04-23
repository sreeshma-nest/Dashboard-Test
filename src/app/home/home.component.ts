// home.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule]
})
export class HomeComponent implements OnInit {
  posts: any[] = [];  // Store posts data
  selectedAll: boolean = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Fetch data from a public API (example)
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(data => {
        this.posts = data;      
      });
  }

  toggleAllSelection(event: Event) {
    this.selectedAll = (event.target as HTMLInputElement).checked;
    const checkboxes = document.querySelectorAll('.table-scroll input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      (checkbox as HTMLInputElement).checked = this.selectedAll;
    });
  }
}
