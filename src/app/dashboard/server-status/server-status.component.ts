import { Component, DestroyRef, inject, OnInit } from '@angular/core';

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
//implements es de ts y busca una interfaz para que la clase tenga cierta forma
export class ServerStatusComponent implements OnInit {
  currentStatus = 'online';
  private destroyRef = inject(DestroyRef);
  ngOnInit() {
    // Simulate server status fetching
    const interval = setInterval(() => {
      this.currentStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }, 5000);
    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }
}
