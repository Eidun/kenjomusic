import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicalModalComponent } from './musical-modal.component';

describe('MusicalModalComponent', () => {
  let component: MusicalModalComponent;
  let fixture: ComponentFixture<MusicalModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicalModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicalModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
