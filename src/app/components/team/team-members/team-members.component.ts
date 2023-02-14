import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Coach } from 'src/app/core/types/coach';
import { Player, Team } from 'src/app/core/types/team';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.scss']
})
export class TeamMembersComponent implements OnInit, OnChanges {

  @Input() squad: Player[];
  @Input() selectedCoach: Coach;
  @Input() team: Team;

  @Output() playerSelected = new EventEmitter<any>();
  @Output() coachSelected = new EventEmitter<any>();

  public players: Player[];
  public coach: Coach;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

  async ngOnChanges(changes: SimpleChanges) {
    if (changes.team && changes.team.currentValue) {
      const teamId = changes.team.currentValue.id;
      this.players = await this.getPlayers(teamId);
      this.coach = await this.getCoach(teamId);
    }
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
