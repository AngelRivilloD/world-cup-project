import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Player } from 'src/app/core/types/team';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-position-row',
  templateUrl: './position-row.component.html',
  styleUrls: ['./position-row.component.scss']
})
export class PositionRowComponent {

  @Input() players: Player[];
  @Input() title: string;
  @Input() minimum: number;
  @Input() completed: boolean;

  @Output() remove = new EventEmitter<any>();

  constructor(public dataService: DataService) { }

  removePlayer(player: Player) {
    this.remove.emit(player);
  }

  getPlaceholderPlayers(playersSelected: Player[], minimumPlayers: number) {
    const amountPlayersSelected = playersSelected.length;
    const placeholderPlayers = (minimumPlayers - amountPlayersSelected >= 0) ? minimumPlayers - amountPlayersSelected : 0;
    return Array(placeholderPlayers);
  }

}
