import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-collapse',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './collapse-acc.component.html',
  styleUrls: ['./collapse-acc.component.css']
})
export class CollapseAccComponent {

  @Input() accordingId: string = 'accordion-01';
  @Input() headingID: string = 'heading-01';
  @Input() collapseId: string = 'collapse-01';

  @Input() headerClass: string = 'blue-header';
  @Input() headerTxt: string = '';

}
