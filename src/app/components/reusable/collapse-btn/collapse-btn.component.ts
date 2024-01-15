import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'collapse-btn',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './collapse-btn.component.html',
  styleUrls: ['./collapse-btn.component.css']
})
export class CollapseBtnComponent {

  @Input() collapseID: string = '';
  @Input() cardClass: string = '';
  @Input() buttonClass: string = 'btn btn-link text-dark';
  @Input() btnTxt: string = '';
  @Input() matIcon: string = '';

}
