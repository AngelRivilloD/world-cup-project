import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Player } from '../types/team';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getApiUrl() {
    return 'https://api-football-v1.p.rapidapi.com/v3';
  }

  getHeaders() {
    return {
      'X-RapidAPI-Key': '8a95ee2023msh1c3cd1b258ce8f4p11fdfcjsn4930b12f6300',
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
  }

  getTeams(): Promise<any> {
    const headers = this.getHeaders();
    return this.http.get(`${this.getApiUrl()}/teams?league=1&season=2022`,
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
    return this.http.get(`${this.getApiUrl()}/players/squads?team=${teamId}`,
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
    return this.http.get(`${this.getApiUrl()}/coachs?team=${teamId}`,
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

}
