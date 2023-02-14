import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Team, TeamsData } from 'src/app/core/types/team';
import { DataService } from 'src/app/core/services/data.service';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-team-selector',
  templateUrl: './team-selector.component.html',
  styleUrls: ['./team-selector.component.scss']
})
export class TeamSelectorComponent implements OnInit {

  public teams: TeamsData[] = [];
  public selectedTeam: Team;

  constructor(private _dataService: DataService, private _storageService: StorageService) { }

  async ngOnInit() {
    this.teams = await this.getTeams();
  }

  sortTeamsByName = (teams: TeamsData[]): TeamsData[] => teams.sort((a, b) => a.team.name.localeCompare(b.team.name));

  getTeams = async () => {
    const response = await this._dataService.getTeams();
    return response.response;
  };

  selectTeam(team: Team) {
    this._storageService.team = team;
  }
}
