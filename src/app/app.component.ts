import { Component, OnDestroy, OnInit } from '@angular/core';
import { Position } from './core/enums/position';
import { DataService } from './core/services/data.service';
import { StorageService } from './core/services/storage.service';
import { Coach } from './core/types/coach';
import { Player } from './core/types/team';
import { Subscription } from 'rxjs';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  public coach: Coach;
  public squad: Player[] = [];
  public showSaveAlert: boolean = false;

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

    this.storageService.squad = this.checkLocalSquad();
    this.storageService.coach = this.checkLocalCoach();
  }

  checkDisableButton(squad: Player[], coach: Coach | null) {
    const isGoalkeeperAmountCorrect = this._dataService.getPlayersAmountByPosition(squad, Position.GOALKEEPER) > 1;
    const isDefenderAmountCorrect = this._dataService.getPlayersAmountByPosition(squad, Position.DEFENDER) > 3;
    const isMidfielderAmountCorrect = this._dataService.getPlayersAmountByPosition(squad, Position.MIDFIELDER) > 3;
    const isAttackerAmountCorrect = this._dataService.getPlayersAmountByPosition(squad, Position.ATTACKER) > 1;

    return !(isGoalkeeperAmountCorrect && isDefenderAmountCorrect && isMidfielderAmountCorrect && isAttackerAmountCorrect && coach);
  }

  saveMyTeam(squad: Player[], coach: Coach) {
    const encryptedSquad = CryptoJS.AES.encrypt(JSON.stringify(squad), environment.SECRET_KEY).toString();
    const encryptedCoach = CryptoJS.AES.encrypt(JSON.stringify(coach), environment.SECRET_KEY).toString();
    localStorage.setItem('my-squad', encryptedSquad);
    localStorage.setItem('my-coach', encryptedCoach);
    this.showSaveAlert = true;
    setTimeout(() => {
      this.showSaveAlert = false;
    }, 2000);
  }

  decryptData(data: string) {
    const bytes = CryptoJS.AES.decrypt(data, environment.SECRET_KEY);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  }

  checkLocalSquad() {
    const localSquad = localStorage.getItem('my-squad');
    return (localSquad) ? this.decryptData(localSquad) : [];
  }

  checkLocalCoach() {
    const localCoach = localStorage.getItem('my-coach');
    return (localCoach) ? this.decryptData(localCoach) : null;
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
