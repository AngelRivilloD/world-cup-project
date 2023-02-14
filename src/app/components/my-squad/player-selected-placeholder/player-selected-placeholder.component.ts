import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-player-selected-placeholder',
  templateUrl: './player-selected-placeholder.component.html',
  styleUrls: ['./player-selected-placeholder.component.scss']
})
export class PlayerSelectedPlaceholderComponent {

  @Input() position: string;

}
