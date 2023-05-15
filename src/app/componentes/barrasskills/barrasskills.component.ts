import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-barrasskills',
  templateUrl: './barrasskills.component.html',
  styleUrls: ['./barrasskills.component.css']
})
export class BarrasskillsComponent {
  @Input()
  value!: number;
  
}
