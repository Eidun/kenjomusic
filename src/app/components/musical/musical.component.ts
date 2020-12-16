import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Musical } from 'src/app/models/musical';
import { MusicalModalComponent } from '../musical-modal/musical-modal.component';

@Component({
  selector: 'kenjo-musical',
  templateUrl: './musical.component.html',
  styleUrls: ['./musical.component.scss']
})
export class MusicalComponent {

  @Input() musical: Musical;

  constructor(private modalService: NgbModal) {}

  openModal() {
    this.modalService.open(MusicalModalComponent);
  }
}
