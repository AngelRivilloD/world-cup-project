import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionRowComponent } from './position-row.component';

describe('PositionRowComponent', () => {
  let component: PositionRowComponent;
  let fixture: ComponentFixture<PositionRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PositionRowComponent],
      imports: [
        HttpClientTestingModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PositionRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
