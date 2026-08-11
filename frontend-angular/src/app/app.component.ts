import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

interface Widget {
  id: number;
  label: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Micro-Frontend Remote (Angular)';
  widgets: Widget[] = [];

  constructor(private http: HttpClient) {}

  // Connects to backend/'s real API (/api/widgets) - same pattern as
  // frontend-react - rather than carrying its own copy of backend logic.
  ngOnInit(): void {
    this.http.get<{ widgets: Widget[] }>('/api/widgets').subscribe({
      next: (data) => (this.widgets = data.widgets),
      error: () => (this.widgets = []),
    });
  }
}
