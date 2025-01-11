import { Component } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
  host: {
    id: 'server-status',
  },
})
export class ServerStatusComponent {
  currentStatus = 'online';

  ngOnInit() {
    // Simulate server status fetching
    setInterval(() => {
      this.currentStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }, 5000);
  }
}
