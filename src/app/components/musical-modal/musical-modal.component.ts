import { Musical } from 'src/app/models/musical';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'kenjo-musical-modal',
  templateUrl: './musical-modal.component.html',
  styleUrls: ['./musical-modal.component.scss']
})
export class MusicalModalComponent implements OnInit {

  @Input() musical: Musical;

  musicalForm: FormGroup;

  isEditMode: boolean = false;

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder) {}

  ngOnInit(): void {
    if (!this.musical.id) {
      this.isEditMode = true;
    }
    this.musicalForm = this.fb.group({
      name: [this.musical.name]
    });
    console.log(this.musical);
  }

}
