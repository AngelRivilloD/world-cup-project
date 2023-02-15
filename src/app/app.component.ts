import { Component, OnDestroy, OnInit } from '@angular/core';
import { Position } from './core/enums/position';
import { DataService } from './core/services/data.service';
import { StorageService } from './core/services/storage.service';
import { Coach } from './core/types/coach';
import { Player } from './core/types/team';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  public coach: Coach;
  public squad: Player[] = [];

  private _squadSubscription: Subscription;
  private _coachSubscription: Subscription;

  constructor(public storageService: StorageService, private _dataService: DataService) { }

  ngOnInit() {
    this._squadSubscription = this.storageService.squadChange$.subscribe(squad => {
      this.squad = squad;
    });
    this._coachSubscription = this.storageService.coachChange$.subscribe(coach => {
      this.coach = coach;
    });
  }

  checkDisableButton(squad: Player[], coach: Coach) {
    const isGoalkeeperAmountCorrect = this._dataService.getPlayersAmountByPosition(squad, Position.GOALKEEPER) > 1;
    const isDefenderAmountCorrect = this._dataService.getPlayersAmountByPosition(squad, Position.DEFENDER) > 3;
    const isMidfielderAmountCorrect = this._dataService.getPlayersAmountByPosition(squad, Position.MIDFIELDER) > 3;
    const isAttackerAmountCorrect = this._dataService.getPlayersAmountByPosition(squad, Position.ATTACKER) > 1;

    return !(isGoalkeeperAmountCorrect && isDefenderAmountCorrect && isMidfielderAmountCorrect && isAttackerAmountCorrect && coach);
  }

  ngOnDestroy() {
    if (this._coachSubscription) {
      this._coachSubscription.unsubscribe();
    }
    if (this._squadSubscription) {
      this._squadSubscription.unsubscribe();
    }
  }
}
