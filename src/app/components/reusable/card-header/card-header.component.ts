import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'card-header',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.css']
})
export class CardHeaderComponent  {

  @Input() cardClass: string = '';
  @Input() headerClass: string = 'blue-header';
  @Input() headerTxt: string = '';
  @Input() matIcon: string = '';

}
