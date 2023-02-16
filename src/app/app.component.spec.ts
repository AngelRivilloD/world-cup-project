import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DataService } from './core/services/data.service';
import { Coach } from './core/types/coach';
import { Player } from './core/types/team';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MySquadComponent } from './components/my-squad/my-squad.component';
import { CoachComponent } from './components/my-squad/coach/coach.component';
import { TeamSelectorComponent } from './components/sidebar/team-selector/team-selector.component';
import { TeamMembersComponent } from './components/sidebar/team-members/team-members.component';
import { MaterialModule } from './material.module';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let dataService: DataService;
  const mockSquad: Player[] = [
    {
      "id": 2463,
      "name": "F. Armani",
      "age": 37,
      "number": 1,
      "position": "Goalkeeper",
      "photo": "https://media-3.api-sports.io/football/players/2463.png",
      "team": {
        "id": 26,
        "name": "Argentina",
        "code": "ARG",
        "country": "Argentina",
        "founded": 1893,
        "national": true,
        "logo": "https://media-3.api-sports.io/football/teams/26.png"
      }
    },
    {
      "id": 19599,
      "name": "E. Martínez",
      "age": 31,
      "number": 23,
      "position": "Goalkeeper",
      "photo": "https://media-3.api-sports.io/football/players/19599.png",
      "team": {
        "id": 26,
        "name": "Argentina",
        "code": "ARG",
        "country": "Argentina",
        "founded": 1893,
        "national": true,
        "logo": "https://media-3.api-sports.io/football/teams/26.png"
      }
    },
    {
      "id": 47296,
      "name": "G. Rulli",
      "age": 31,
      "number": 12,
      "position": "Goalkeeper",
      "photo": "https://media-3.api-sports.io/football/players/47296.png",
      "team": {
        "id": 26,
        "name": "Argentina",
        "code": "ARG",
        "country": "Argentina",
        "founded": 1893,
        "national": true,
        "logo": "https://media-3.api-sports.io/football/teams/26.png"
      }
    },
    {
      "id": 264,
      "name": "Thomas Andre Meunier",
      "age": 32,
      "number": 15,
      "position": "Defender",
      "photo": "https://media.api-sports.io/football/players/264.png",
      "team": {
        "id": 1,
        "name": "Belgium",
        "code": "BEL",
        "country": "Belgium",
        "founded": 1895,
        "national": true,
        "logo": "https://media-3.api-sports.io/football/teams/1.png"
      }
    },
    {
      "id": 170,
      "name": "Jan Vertonghen",
      "age": 36,
      "number": 5,
      "position": "Defender",
      "photo": "https://media-3.api-sports.io/football/players/170.png",
      "team": {
        "id": 1,
        "name": "Belgium",
        "code": "BEL",
        "country": "Belgium",
        "founded": 1895,
        "national": true,
        "logo": "https://media-3.api-sports.io/football/teams/1.png"
      }
    },
    {
      "id": 147859,
      "name": "C. De Ketelaere",
      "age": 22,
      "number": 22,
      "position": "Midfielder",
      "photo": "https://media-3.api-sports.io/football/players/147859.png",
      "team": {
        "id": 1,
        "name": "Belgium",
        "code": "BEL",
        "country": "Belgium",
        "founded": 1895,
        "national": true,
        "logo": "https://media-3.api-sports.io/football/teams/1.png"
      }
    },
    {
      "id": 2929,
      "name": "T. Hazard",
      "age": 30,
      "number": 16,
      "position": "Midfielder",
      "photo": "https://media.api-sports.io/football/players/2929.png",
      "team": {
        "id": 1,
        "name": "Belgium",
        "code": "BEL",
        "country": "Belgium",
        "founded": 1895,
        "national": true,
        "logo": "https://media-3.api-sports.io/football/teams/1.png"
      }
    },
    {
      "id": 51016,
      "name": "T. Buchanan",
      "age": 24,
      "number": 11,
      "position": "Attacker",
      "photo": "https://media.api-sports.io/football/players/51016.png",
      "team": {
        "id": 5529,
        "name": "Canada",
        "code": "CAN",
        "country": "Canada",
        "founded": 1912,
        "national": true,
        "logo": "https://media-3.api-sports.io/football/teams/5529.png"
      }
    },
    {
      "id": 509,
      "name": "A. Davies",
      "age": 23,
      "number": 19,
      "position": "Attacker",
      "photo": "https://media-3.api-sports.io/football/players/509.png",
      "team": {
        "id": 5529,
        "name": "Canada",
        "code": "CAN",
        "country": "Canada",
        "founded": 1912,
        "national": true,
        "logo": "https://media-3.api-sports.io/football/teams/5529.png"
      }
    },
    {
      "id": 50817,
      "name": "J. Osorio",
      "age": 31,
      "number": 21,
      "position": "Midfielder",
      "photo": "https://media-3.api-sports.io/football/players/50817.png",
      "team": {
        "id": 5529,
        "name": "Canada",
        "code": "CAN",
        "country": "Canada",
        "founded": 1912,
        "national": true,
        "logo": "https://media-3.api-sports.io/football/teams/5529.png"
      }
    },
    {
      "id": 202086,
      "name": "J. Sarmiento",
      "age": 21,
      "number": 16,
      "position": "Attacker",
      "photo": "https://media-3.api-sports.io/football/players/202086.png",
      "team": {
        "id": 2382,
        "name": "Ecuador",
        "code": "ECU",
        "country": "Ecuador",
        "founded": 1925,
        "national": true,
        "logo": "https://media-3.api-sports.io/football/teams/2382.png"
      }
    },
    {
      "id": 2581,
      "name": "J. Méndez",
      "age": 26,
      "number": 20,
      "position": "Midfielder",
      "photo": "https://media.api-sports.io/football/players/2581.png",
      "team": {
        "id": 2382,
        "name": "Ecuador",
        "code": "ECU",
        "country": "Ecuador",
        "founded": 1925,
        "national": true,
        "logo": "https://media-3.api-sports.io/football/teams/2382.png"
      }
    },
    {
      "id": 2575,
      "name": "Jackson Gabriel Porozo Vernaza",
      "age": 23,
      "number": 25,
      "position": "Defender",
      "photo": "https://media-3.api-sports.io/football/players/2575.png",
      "team": {
        "id": 2382,
        "name": "Ecuador",
        "code": "ECU",
        "country": "Ecuador",
        "founded": 1925,
        "national": true,
        "logo": "https://media-3.api-sports.io/football/teams/2382.png"
      }
    },
    {
      "id": 36784,
      "name": "D. Palacios",
      "age": 24,
      "number": 18,
      "position": "Defender",
      "photo": "https://media-3.api-sports.io/football/players/36784.png",
      "team": {
        "id": 2382,
        "name": "Ecuador",
        "code": "ECU",
        "country": "Ecuador",
        "founded": 1925,
        "national": true,
        "logo": "https://media-3.api-sports.io/football/teams/2382.png"
      }
    }
  ];
  const mockCoach: Coach = {
    "id": 326,
    "name": "L. Scaloni",
    "firstname": "Lionel Sebastián",
    "lastname": "Scaloni",
    "age": 44,
    "birth": {
      "date": "1978-05-16",
      "place": "Rosario",
      "country": "Argentina"
    },
    "nationality": "Argentina",
    "height": "182 cm",
    "weight": "80 kg",
    "photo": "https://media.api-sports.io/football/coachs/326.png",
    "team": {
      "id": 26,
      "name": "Argentina",
      "logo": "https://media-3.api-sports.io/football/teams/26.png"
    },
    "career": [
      {
        "team": {
          "id": 26,
          "name": "Argentina",
          "logo": "https://media-3.api-sports.io/football/teams/26.png"
        },
        "start": "2018-08-01",
        "end": ""
      }
    ]
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        SidebarComponent,
        MySquadComponent,
        CoachComponent,
        TeamSelectorComponent,
        TeamMembersComponent],
      providers: [
        DataService
      ],
      imports: [
        HttpClientTestingModule,
        MaterialModule
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService);
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should check disable button correctly', () => {
    spyOn(dataService, 'getPlayersAmountByPosition').and.callThrough();

    const result1 = component.checkDisableButton(mockSquad, mockCoach);
    expect(result1).toBe(false);
    expect(dataService.getPlayersAmountByPosition).toHaveBeenCalledTimes(4);

    const result2 = component.checkDisableButton(mockSquad, null);
    expect(result2).toBe(true);
  });

  it('should return an empty array when local squad is not set', () => {
    spyOn(localStorage, 'getItem').and.returnValue(null);
    const result = component.checkLocalSquad();
    expect(result).toEqual([]);
  });

  it('should return decrypted squad from local storage', () => {
    const spyLocalStorageGetItem = spyOn(localStorage, 'getItem').and.returnValues(
      CryptoJS.AES.encrypt(JSON.stringify(mockSquad), environment.SECRET_KEY).toString(),
      null
    );
    expect(component.checkLocalSquad()).toEqual(mockSquad);
    expect(spyLocalStorageGetItem).toHaveBeenCalledTimes(1);
  });

  it('should return decrypted coach from local storage', () => {
    const spyLocalStorageGetItem = spyOn(localStorage, 'getItem').and.returnValues(
      CryptoJS.AES.encrypt(JSON.stringify(mockCoach), environment.SECRET_KEY).toString(),
      null
    );
    expect(component.checkLocalSquad()).toEqual(mockCoach);
    expect(spyLocalStorageGetItem).toHaveBeenCalledTimes(1);
  });

  it('should return null when local coach is not set', () => {
    spyOn(localStorage, 'getItem').and.returnValue(null);
    const result = component.checkLocalCoach();
    expect(result).toBeNull();
  });

  it('should save squad and coach to local storage', () => {
    spyOn(localStorage, 'setItem');
    component.saveMyTeam(mockSquad, mockCoach);
    expect(component.showSaveAlert).toBeTrue();
  });

  it('should set ngOnInit', () => {
    spyOn(component, 'checkLocalCoach');
    spyOn(component, 'checkLocalSquad');
    component.ngOnInit();
    expect(component.checkLocalCoach).toHaveBeenCalled();
    expect(component.checkLocalSquad).toHaveBeenCalled();
  });
});
