import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Team, TeamsData } from 'src/app/core/types/team';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-team-selector',
  templateUrl: './team-selector.component.html',
  styleUrls: ['./team-selector.component.scss']
})
export class TeamSelectorComponent implements OnInit {

  @Output() selected = new EventEmitter<any>();

  public teams: TeamsData[] = [];
  public selectedTeam: Team;

  constructor(private _dataService: DataService) { }

  async ngOnInit() {
    this.teams = await this.getTeams();
  }

  sortTeamsByName = (teams: TeamsData[]): TeamsData[] => teams.sort((a, b) => a.team.name.localeCompare(b.team.name));

  getTeams = async () => {
    const response = await this._dataService.getTeams();
    return response.response;
  };

  selectTeam(team: Team) {
    this.selected.emit(team);
  }
}
