import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TeamSelectorComponent } from './team-selector.component';
import { DataService } from 'src/app/core/services/data.service';
import { StorageService } from 'src/app/core/services/storage.service';
import { TeamsData } from 'src/app/core/types/team';
import { MaterialModule } from 'src/app/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TeamSelectorComponent', () => {
  let component: TeamSelectorComponent;
  let fixture: ComponentFixture<TeamSelectorComponent>;
  let storageService: StorageService;
  const mockTeamData: TeamsData = {
    team: {
      id: 1,
      name: "Belgium",
      code: "BEL",
      country: "Belgium",
      founded: 1895,
      national: true,
      logo: "https://media.api-sports.io/football/teams/1.png"
    },
    venue: {
      id: 173,
      name: "Stade Roi Baudouin",
      address: "Avenue de Marathon 135/2",
      city: "Brussel",
      capacity: 50093,
      surface: "grass",
      image: "https://media.api-sports.io/football/venues/173.png"
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MaterialModule, BrowserAnimationsModule],
      declarations: [TeamSelectorComponent],
      providers: [DataService, StorageService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamSelectorComponent);
    component = fixture.componentInstance;
    storageService = TestBed.inject(StorageService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of teams', () => {
    expect(component.teams).toBeDefined();
  });

  it('should select a team', () => {
    component.selectTeam(mockTeamData.team);
    expect(storageService.team).toEqual(mockTeamData.team);
  });
});
