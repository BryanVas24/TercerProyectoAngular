import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  //Esta configuración sirve para que se amplie el escope de los estiolos
  encapsulation: ViewEncapsulation.None,
  //Añadira como propiedades todo lo que este acá pero solo a el app-control
  host: {
    class: 'control',
  },
})
export class ControlComponent {
  @Input({ required: true }) labelText!: string;
}
