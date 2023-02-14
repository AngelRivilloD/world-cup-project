import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Coach } from '../types/coach';
import { Player, Team } from '../types/team';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  teamChange$ = new Subject<Team>();
  coachChange$ = new Subject<Coach>();
  squadChange$ = new Subject<Player[]>();

  private _team: Team;
  private _coach: Coach;
  private _squad: Player[];

  constructor() { }

  set team(team: Team) {
    this._team = team;
    this.teamChange$.next(team);
  }

  get team(): Team {
    return this._team;
  }

  set coach(coach: Coach) {
    this._coach = coach;
    this.coachChange$.next(coach);
  }

  get coach(): Coach {
    return this._coach;
  }

  set squad(squad: Player[]) {
    this._squad = squad;
    this.squadChange$.next(squad);
  }

  get squad(): Player[] {
    return this._squad;
  }
}
