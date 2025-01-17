import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { Ticket } from '../tickets.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  @Input({ required: true }) data!: Ticket;
  detailsvisibilitie = signal(false);
  @Output() close = new EventEmitter();
  onToggleDetails() {
    //Funciona similar a set pero espera una función como argumento
    this.detailsvisibilitie.update((wasVisible) => !wasVisible);
  }

  OnMarkAsCompleted() {
    this.close.emit();
  }
}
