import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Album } from 'src/app/models/album';

import { MusicalComponent } from './musical.component';

describe('MusicalComponent', () => {
  let component: MusicalComponent;
  let fixture: ComponentFixture<MusicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicalComponent);
    component = fixture.componentInstance;
    component.musical = new Album({});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
