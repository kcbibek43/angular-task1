import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() plan : string = "";
  @Input() price : string = "";
  @Input() storage : string = "";
  @Input() tagclass : any;
}
