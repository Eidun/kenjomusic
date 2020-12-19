import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestModule } from 'src/app/app.test.module';
import { Artist } from 'src/app/models/artist';

import { AlbumModalComponent } from './album-modal.component';

describe('AlbumModalComponent', () => {
  let component: AlbumModalComponent;
  let fixture: ComponentFixture<AlbumModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestModule],
      declarations: [ AlbumModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumModalComponent);
    component = fixture.componentInstance;
    component.musical = new Artist({});
    component.musicalForm = new FormGroup({});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
