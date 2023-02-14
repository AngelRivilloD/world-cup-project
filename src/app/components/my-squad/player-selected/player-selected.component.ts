import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Player } from 'src/app/core/types/team';

@Component({
  selector: 'app-player-selected',
  templateUrl: './player-selected.component.html',
  styleUrls: ['./player-selected.component.scss']
})
export class PlayerSelectedComponent {

  @Input() player: Player;
  @Output() remove = new EventEmitter<any>();

  removePlayer(player: Player) {
    this.remove.emit(player);
  }

}
