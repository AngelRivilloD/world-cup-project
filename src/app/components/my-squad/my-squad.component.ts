import { Component, Input } from '@angular/core';
import { fieldPositions } from 'src/app/core/fielPositions';
import { StorageService } from 'src/app/core/services/storage.service';
import { Player } from 'src/app/core/types/team';

@Component({
  selector: 'app-my-squad',
  templateUrl: './my-squad.component.html',
  styleUrls: ['./my-squad.component.scss']
})
export class MySquadComponent {

  @Input() squad: Player[];

  public fieldPositions = fieldPositions;

  constructor(public storageService: StorageService) { }

  getPlayersByPosition = (players: Player[], pos: string) => players.filter(player => player.position == pos);

  getSquadLength = () => this.storageService.squad.length;

}
