import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  //Esta configuración
  encapsulation: ViewEncapsulation.None,
})
export class ControlComponent {
  @Input({ required: true }) labelText!: string;
}
