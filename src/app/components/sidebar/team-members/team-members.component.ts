import { Component, Input, OnInit } from '@angular/core';
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

  public team: Team;
  public players: Player[];
  public coach: Coach;

  constructor(public storageService: StorageService, private _dataService: DataService) { }

  ngOnInit() {
    this.storageService.teamChange$.subscribe((team) => {
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

  selectPlayer(player: Player, team: Team, squad: Player[]) {
    const playerInSquad = squad.some(squadPlayer => squadPlayer.id === player.id);
    const nationalPlayer = { ...player, team: team };
    const playerPerCountry = squad.filter(player => player.team && player.team.id == team.id);
    const squadMaxCondition = (squad.length < 16);
    const nationalTeamMaxCondition = (playerPerCountry.length < 4);

    this.storageService.squad = !playerInSquad && squadMaxCondition && nationalTeamMaxCondition ? [...squad, nationalPlayer] : squad;
  }

  selectCoach(coach: Coach) {
    this.storageService.coach = coach;
  }

}
