import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { Player } from '../../../core/types/team';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {

  @Input() player: Player;

  constructor(public dataService: DataService) { }
}
