import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getTeams(): Observable<any> {
    return this.httpClient.get(`https://api-football-v1.p.rapidapi.com/v3/teams?league=1&season=2022`,
      {
        headers: {
          'X-RapidAPI-Key': '8a95ee2023msh1c3cd1b258ce8f4p11fdfcjsn4930b12f6300',
          'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
      });
  }

  getSquad(teamId: number): Observable<any> {
    return this.httpClient.get(`https://api-football-v1.p.rapidapi.com/v3/players/squads?team=${teamId}`,
      {
        headers: {
          'X-RapidAPI-Key': '8a95ee2023msh1c3cd1b258ce8f4p11fdfcjsn4930b12f6300',
          'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
      });
  }
}
