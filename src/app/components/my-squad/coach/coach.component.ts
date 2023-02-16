import { Component, Input } from '@angular/core';
import { Coach } from '../../../core/types/coach';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.scss']
})
export class CoachComponent {

  @Input() coach: Coach;

  constructor() {
  }

}
