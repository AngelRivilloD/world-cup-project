import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSelectedComponent } from './player-selected.component';

describe('PlayerSelectedComponent', () => {
  let component: PlayerSelectedComponent;
  let fixture: ComponentFixture<PlayerSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerSelectedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
