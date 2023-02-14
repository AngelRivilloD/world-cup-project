import { Component, Input } from '@angular/core';
import { Player } from 'src/app/core/types/team';
import { DataService } from 'src/app/core/services/data.service';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-position-row',
  templateUrl: './position-row.component.html',
  styleUrls: ['./position-row.component.scss']
})
export class PositionRowComponent {

  @Input() players: Player[];
  @Input() title: string;
  @Input() minimum: number;

  public completed: boolean;

  constructor(public storageService: StorageService, public dataService: DataService) { }

  getPlaceholderPlayers(playersSelected: Player[], minimumPlayers: number) {
    const amountPlayersSelected = playersSelected.length;
    const placeholderPlayers = (minimumPlayers - amountPlayersSelected >= 0) ? minimumPlayers - amountPlayersSelected : 0;
    return Array(placeholderPlayers);
  }

  isCompleted(squad: Player[], title: string, minimum: number) {
    return (squad && this.dataService.getPlayersAmountByPosition(squad, title) >= minimum)
  }

}
