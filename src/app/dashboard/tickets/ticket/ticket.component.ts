import { Component, Input, signal } from '@angular/core';
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

  onToggleDetails() {
    //Funciona similar a set pero espera una función como argumento
    this.detailsvisibilitie.update((wasVisible) => !wasVisible);
  }
}
