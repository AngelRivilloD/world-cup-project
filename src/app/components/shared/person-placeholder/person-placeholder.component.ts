import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-person-placeholder',
  templateUrl: './person-placeholder.component.html',
  styleUrls: ['./person-placeholder.component.scss']
})
export class PersonPlaceholderComponent {

  @Input() name: string;

}
