import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicalListComponent } from './musical-list.component';

describe('MusicalListComponent', () => {
  let component: MusicalListComponent;
  let fixture: ComponentFixture<MusicalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicalListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
