import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MusicalModalFooterComponent } from './musical-modal-footer.component';

describe('MusicalModalFooterComponent', () => {
  let component: MusicalModalFooterComponent;
  let fixture: ComponentFixture<MusicalModalFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicalModalFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicalModalFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
