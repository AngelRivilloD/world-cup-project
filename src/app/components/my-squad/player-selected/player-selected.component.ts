import { Component, Input } from '@angular/core';
import { StorageService } from 'src/app/core/services/storage.service';
import { Player } from 'src/app/core/types/team';

@Component({
  selector: 'app-player-selected',
  templateUrl: './player-selected.component.html',
  styleUrls: ['./player-selected.component.scss']
})
export class PlayerSelectedComponent {

  @Input() player: Player;

  constructor(public storageService: StorageService) { }

  removePlayer(squad: Player[], player: Player) {
    this.storageService.squad = squad.filter(squadPlayer => squadPlayer !== player);
  }

}
