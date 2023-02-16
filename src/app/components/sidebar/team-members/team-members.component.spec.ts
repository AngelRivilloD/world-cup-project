import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';
import { StorageService } from 'src/app/core/services/storage.service';
import { TeamMembersComponent } from './team-members.component';
import { Player, Team } from 'src/app/core/types/team';
import { Coach } from 'src/app/core/types/coach';

describe('TeamMembersComponent', () => {
    let component: TeamMembersComponent;
    let fixture: ComponentFixture<TeamMembersComponent>;
    let storageService: StorageService;
    let dataService: DataService;
    const mockPlayer: Player = {
        "id": 2932,
        "name": "J. Pickford",
        "age": 29,
        "number": 1,
        "position": "Goalkeeper",
        "photo": "https://media-3.api-sports.io/football/players/2932.png"
    };
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
    const mockTeam: Team = {
        "id": 1,
        "name": "Belgium",
        "code": "BEL",
        "country": "Belgium",
        "founded": 1895,
        "national": true,
        "logo": "https://media.api-sports.io/football/teams/1.png"
    };
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
            imports: [HttpClientTestingModule],
            declarations: [TeamMembersComponent],
            providers: [StorageService, DataService]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TeamMembersComponent);
        component = fixture.componentInstance;
        storageService = TestBed.inject(StorageService);
        dataService = TestBed.inject(DataService);
        fixture.detectChanges();
    });

    afterEach(() => {
        fixture.destroy();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should getCoach', () => {
        spyOn(dataService, 'getCoach').and.callThrough();
        component.getCoach(1);
        expect(dataService.getCoach).toHaveBeenCalledWith(1);
    });

    it('should getPlayers', () => {
        spyOn(dataService, 'getSquad').and.callThrough();
        component.getPlayers(1);
        expect(dataService.getSquad).toHaveBeenCalledWith(1);
    });

    it('should select a coach', () => {
        component.selectCoach(mockCoach);
        expect(storageService.coach).toEqual(mockCoach);
    });

    describe('isPlayerSelected', () => {
        it('should return true if the player is in the squad', () => {
            const result = component.isPlayerSelected(2463, mockSquad);
            expect(result).toBe(true);
        });

        it('should return false if the player is not in the squad', () => {
            const result = component.isPlayerSelected(1, mockSquad);
            expect(result).toBe(false);
        });
    });

    describe('isCoachSelected', () => {
        it('should return true if the selected coach has the same id as the given coach', () => {
            let selectedCoach = { ...mockCoach };
            const result = component.isCoachSelected(mockCoach, selectedCoach);
            expect(result).toBe(true);
        });

        it('should return false if the selected coach does not have the same id as the given coach', () => {
            let selectedCoach = { ...mockCoach };
            selectedCoach.id = 2;
            const result = component.isCoachSelected(mockCoach, selectedCoach);
            expect(result).toBe(false);
        });
    });

    describe('selectPlayer', () => {
        it('should set the squad on storageService', () => {
            const mockResponse = [{
                "id": 2933,
                "name": "J. Pickford2",
                "age": 29,
                "number": 1,
                "position": "Goalkeeper",
                "photo": "https://media-3.api-sports.io/football/players/2932.png",
                "team": mockTeam
            }, {
                "id": 2932,
                "name": "J. Pickford",
                "age": 29,
                "number": 1,
                "position": "Goalkeeper",
                "photo": "https://media-3.api-sports.io/football/players/2932.png",
                "team": mockTeam
            }
            ];
            const mockPlayer2 = {
                "id": 2933,
                "name": "J. Pickford2",
                "age": 29,
                "number": 1,
                "position": "Goalkeeper",
                "photo": "https://media-3.api-sports.io/football/players/2932.png",
                "team": mockTeam
            };
            component.selectPlayer(mockPlayer, mockTeam, [mockPlayer2]);
            expect(storageService.squad).toEqual(mockResponse);
        });
    });

    describe('checkTeamMaximum', () => {
        it('should return true if the squad has more than 3 players from the same team', () => {
            expect(component.checkTeamMaximum(mockSquad, mockTeam)).toBeTrue();
        });

        const mockSquadWithNo4BelgiumPlayers: Player[] = [
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

        it('should return false if the squad has less than 4 players from the same team', () => {
            expect(component.checkTeamMaximum(mockSquadWithNo4BelgiumPlayers, mockTeam)).toBeFalse();
        });
    });
})
