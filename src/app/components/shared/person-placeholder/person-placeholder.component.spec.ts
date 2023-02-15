import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonPlaceholderComponent } from './person-placeholder.component';


describe('PersonPlaceholderComponent', () => {
  let component: PersonPlaceholderComponent;
  let fixture: ComponentFixture<PersonPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonPlaceholderComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PersonPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
