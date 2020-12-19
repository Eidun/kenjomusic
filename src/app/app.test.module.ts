import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MusicalMockService } from './services/mocks/musical.mock.service';
import { MusicalService } from './services/musical.service';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientTestingModule,
    NgbModule,
    CommonModule
  ],
  providers: [
    NgbActiveModal,
    {
      provide: MusicalService, useClass: MusicalMockService
    }
  ]
})
export class TestModule { }
