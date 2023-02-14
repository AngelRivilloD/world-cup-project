import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSelectedPlaceholderComponent } from './player-selected-placeholder.component';

describe('PlayerSelectedPlaceholderComponent', () => {
  let component: PlayerSelectedPlaceholderComponent;
  let fixture: ComponentFixture<PlayerSelectedPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerSelectedPlaceholderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerSelectedPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
