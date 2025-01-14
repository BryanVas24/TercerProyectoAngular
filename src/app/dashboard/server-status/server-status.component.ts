import { Component, OnDestroy, OnInit } from '@angular/core';

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
export class ServerStatusComponent implements OnInit, OnDestroy {
  currentStatus = 'online';
  private interval?: ReturnType<typeof setInterval>;
  ngOnInit() {
    // Simulate server status fetching
    this.interval = setInterval(() => {
      this.currentStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }, 5000);
  }
  //El orden de los hooks acá no importa
  ngOnDestroy(): void {
    clearTimeout(this.interval);
  }
}
