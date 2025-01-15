import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
//Lo del implements es más que todo para prevenir  errores de tipo
export class NewTicketComponent implements AfterViewInit {
  //Así se recibe una variable de plantilla (El elementref envuelve un tipo)
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  @Output() add = new EventEmitter<{ title: string; text: string }>();

  //private form= viewChild.required <ElementRef<HTMLFormElement>>("form");
  onSubmit(title: string, message: string) {
    this.add.emit({ title, text: message });
    //El native element es porque el tipo del form esta envuelto por el ElementRef
    this.form?.nativeElement.reset();
  }

  ngAfterViewInit(): void {
    console.log(this.form?.nativeElement);
  }
}
