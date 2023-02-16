import { Component, OnDestroy, OnInit } from '@angular/core';
import { Coach } from 'src/app/core/types/coach';
import { Player, Team } from 'src/app/core/types/team';
import { DataService } from 'src/app/core/services/data.service';
import { StorageService } from 'src/app/core/services/storage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.scss']
})
export class TeamMembersComponent implements OnInit, OnDestroy {

  public team: Team;
  public players: Player[];
  public squad: Player[];
  public coach: Coach;
  public coachSelected: Coach;

  private _teamSubscription: Subscription;
  private _coachSubscription: Subscription;
  private _squadSubscription: Subscription;

  constructor(public storageService: StorageService, private _dataService: DataService) { }

  ngOnInit() {
    this.squad = this.storageService.squad;
    this.team = this.storageService.team;
    this.coachSelected = this.storageService.coach;
    this._teamSubscription = this.storageService.teamChange$.subscribe((team) => {
      this.team = team;
      this.getData(team.id);
    });
    this._coachSubscription = this.storageService.coachChange$.subscribe((coach) => {
      this.coachSelected = coach;
    });
    this._squadSubscription = this.storageService.squadChange$.subscribe(squad => {
      this.squad = squad;
    });
  }

  async getData(teamId: number) {
    this.players = await this.getPlayers(teamId);
    this.coach = await this.getCoach(teamId);
  }

  getPlayers = async (teamId: number) => {
    const response = await this._dataService.getSquad(teamId);
    return response.response[0].players;
  };

  getCoach = async (teamId: number) => {
    const response = await this._dataService.getCoach(teamId);
    return response.response[0];
  }

  checkTeamMaximum(squad: Player[], team: Team) {
    const playerPerCountry = squad.filter(squadPlayer => squadPlayer.team && squadPlayer.team.id == team.id);
    return (playerPerCountry.length > 3) ? true : false;
  }

  checkSquadMaximum(squad: Player[]) {
    return (squad.length > 15) ? true : false;
  }

  isPlayerSelected(playerId: number, squad: Player[]) {
    return squad.some(squadPlayer => squadPlayer.id == playerId);
  }

  isCoachSelected(coach: Coach, selectedCoach: Coach) {
    return selectedCoach && selectedCoach.id === coach.id
  }

  selectPlayer(player: Player, team: Team, squad: Player[]) {
    const isPlayerInSquad = squad.some(squadPlayer => squadPlayer.id === player.id);
    const nationalPlayer = { ...player, team: team };
    const playersOfSameNationality = squad.filter(p => p.team && p.team.id === team.id);
    const isSquadFull = squad.length >= 16;
    const isNationalTeamFull = playersOfSameNationality.length >= 4;

    this.storageService.squad = isPlayerInSquad || isSquadFull || isNationalTeamFull ? squad : [...squad, nationalPlayer];
  }

  selectCoach(coach: Coach) {
    this.storageService.coach = coach;
  }

  ngOnDestroy() {
    if (this._teamSubscription) {
      this._teamSubscription.unsubscribe();
    }
    if (this._coachSubscription) {
      this._coachSubscription.unsubscribe();
    }
    if (this._squadSubscription) {
      this._squadSubscription.unsubscribe();
    }
  }

}
