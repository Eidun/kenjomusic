import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestModule } from 'src/app/app.test.module';
import { Artist } from 'src/app/models/artist';

import { MusicalModalComponent } from './musical-modal.component';

describe('MusicalModalComponent', () => {
  let component: MusicalModalComponent;
  let fixture: ComponentFixture<MusicalModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestModule],
      declarations: [ MusicalModalComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicalModalComponent);
    component = fixture.componentInstance;
    component.musical = new Artist({});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
