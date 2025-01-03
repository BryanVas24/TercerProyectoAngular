import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
})
export class DashboardItemComponent {
  /*Otra manera de tomar props 
   imageData = input.required <{src: string;
    alt: string;}>();
  */

  @Input({ required: true }) imageData!: {
    src: string;
    alt: string;
  };
  @Input({ required: true }) title!: string;
}
