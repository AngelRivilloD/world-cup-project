import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { DataService } from 'src/app/core/services/data.service';
import { Player } from 'src/app/core/types/team';

import { PlayerSelectedComponent } from './player-selected.component';

describe('PlayerSelectedComponent', () => {
  let component: PlayerSelectedComponent;
  let fixture: ComponentFixture<PlayerSelectedComponent>;
  let dataService: DataService;
  const mockPlayer: Player = {
    "id": 2932,
    "name": "J. Pickford",
    "age": 29,
    "number": 1,
    "position": "Goalkeeper",
    "photo": "https://media-3.api-sports.io/football/players/2932.png"
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlayerSelectedComponent],
      imports: [
        HttpClientTestingModule,
        MatIconModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PlayerSelectedComponent);
    component = fixture.componentInstance;
    dataService = TestBed.inject(DataService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call removePlayer', () => {
    spyOn(dataService, 'removePlayer').and.callThrough();
    component.removePlayer(mockPlayer)
    expect(dataService.removePlayer).toHaveBeenCalledWith(mockPlayer);
  });
});
