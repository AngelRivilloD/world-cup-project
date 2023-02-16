import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';
import { fieldPositions } from 'src/app/core/fielPositions';
import { StorageService } from 'src/app/core/services/storage.service';
import { Player } from 'src/app/core/types/team';
import { PersonPlaceholderComponent } from '../shared/person-placeholder/person-placeholder.component';

import { MySquadComponent } from './my-squad.component';
import { PlayerSelectedComponent } from './player-selected/player-selected.component';
import { PositionRowComponent } from './position-row/position-row.component';

describe('MySquadComponent', () => {
  let component: MySquadComponent;
  let fixture: ComponentFixture<MySquadComponent>;
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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MySquadComponent, PositionRowComponent, PersonPlaceholderComponent, PlayerSelectedComponent],
      providers: [StorageService],
      imports: [
        HttpClientTestingModule,
        MatIconModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MySquadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get just the attackers', () => {
    spyOn(component, 'getPlayersByPosition').and.callThrough();
    expect(component.getPlayersByPosition(mockSquad, 'Attacker')).toEqual([{
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
    }, {
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
    }]);

    // expect(component.getPlayersByPosition).toHaveBeenCalled();
  });



});
