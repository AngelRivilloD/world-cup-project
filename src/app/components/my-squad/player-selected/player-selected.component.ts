import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { Player } from 'src/app/core/types/team';

@Component({
  selector: 'app-player-selected',
  templateUrl: './player-selected.component.html',
  styleUrls: ['./player-selected.component.scss']
})
export class PlayerSelectedComponent {

  @Input() player: Player;

  constructor(public _dataService: DataService) { }

  removePlayer(player: Player) {
    this._dataService.removePlayer(player);
  }

}
