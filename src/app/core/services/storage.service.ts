import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Team } from '../types/team';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  teamChange$ = new Subject<Team>();

  private _team: Team;

  constructor() { }

  set team(team: Team) {
    this._team = team;
    this.teamChange$.next(team);
  }

  get team(): Team {
    return this._team;
  }
}
