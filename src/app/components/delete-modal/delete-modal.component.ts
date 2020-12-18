import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Musical } from 'src/app/models/musical';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent {

  @Input() musical: Musical;

  @Output() delete = new EventEmitter<boolean>();

  constructor(public activeModal: NgbActiveModal) { }

  confirmDelete() {
    this.delete.emit(true);
    this.activeModal.dismiss();
  }

}
