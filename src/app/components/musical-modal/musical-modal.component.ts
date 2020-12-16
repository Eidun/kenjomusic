import { Musical } from 'src/app/models/musical';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'kenjo-musical-modal',
  templateUrl: './musical-modal.component.html',
  styleUrls: ['./musical-modal.component.scss']
})
export class MusicalModalComponent implements OnInit {

  @Input() musical: Musical;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
