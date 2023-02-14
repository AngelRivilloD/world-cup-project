import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Coach } from 'src/app/core/types/coach';
import { Player, Team } from 'src/app/core/types/team';
import { DataService } from 'src/app/core/services/data.service';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.scss']
})
export class TeamMembersComponent implements OnInit {

  @Input() squad: Player[];
  @Input() selectedCoach: Coach;

  @Output() playerSelected = new EventEmitter<any>();
  @Output() coachSelected = new EventEmitter<any>();

  public team: Team;
  public players: Player[];
  public coach: Coach;

  constructor(private _dataService: DataService, private _storageService: StorageService) { }

  ngOnInit() {
    this._storageService.teamChange$.subscribe((team) => {
      console.log(team);
      this.team = team;
      this.getData(team.id);
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

  isCoachSelected(coachId: number, selectedCoach: Coach) {
    return selectedCoach && selectedCoach.id === coachId
  }

  selectPlayer(player: Player, squad: Player[]) {
    if (!squad.some(squadPlayer => player.id === squadPlayer.id)) {
      this.playerSelected.emit(player);
    }
  }

  selectCoach(coach: Coach) {
    this.coachSelected.emit(coach);
  }

}
