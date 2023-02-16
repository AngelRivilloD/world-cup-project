import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Player } from '../types/team';
import { StorageService } from './storage.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private _storageService: StorageService) { }

  getHeaders() {
    return {
      'X-RapidAPI-Key': environment.apiKey,
      'X-RapidAPI-Host': environment.apiHost
    }
  }

  getTeams(): Promise<any> {
    const headers = this.getHeaders();
    return this.http.get(`${environment.apiUrl}/teams?league=1&season=2022`,
      {
        headers
      }).toPromise()
      .then(resp => resp)
      .catch(error => {
        console.error(error);
      })
  }

  getSquad(teamId: number): Promise<any> {
    const headers = this.getHeaders();
    return this.http.get(`${environment.apiUrl}/players/squads?team=${teamId}`,
      {
        headers
      }).toPromise()
      .then(resp => resp)
      .catch(error => {
        console.error(error);
      })
  }

  getCoach(teamId: number): Promise<any> {
    const headers = this.getHeaders();
    return this.http.get(`${environment.apiUrl}/coachs?team=${teamId}`,
      {
        headers
      }).toPromise()
      .then(resp => resp)
      .catch(error => {
        console.error(error);
      })
  }

  getShortPosition(pos: string) {
    const shortPositions: { [key: string]: string; } = {
      "Goalkeeper": "GOA",
      "Defender": "DEF",
      "Midfielder": "MID",
      "Attacker": "ATT"
    };

    return shortPositions[pos];
  }

  getPlayersAmountByPosition = (squad: Player[], pos: string) => squad.filter(player => player.position == pos).length;


  removePlayer(player: Player) {
    this._storageService.squad = this._storageService.squad.filter(squadPlayer => squadPlayer !== player);
  }

}
