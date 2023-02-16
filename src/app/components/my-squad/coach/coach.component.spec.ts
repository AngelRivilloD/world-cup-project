import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonPlaceholderComponent } from '../../shared/person-placeholder/person-placeholder.component';

import { CoachComponent } from './coach.component';

describe('CoachComponent', () => {
  let component: CoachComponent;
  let fixture: ComponentFixture<CoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoachComponent, PersonPlaceholderComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
