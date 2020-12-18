import { Musical } from 'src/app/models/musical';
import { MusicalService } from 'src/app/services/musical.service';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';
import { RefreshService } from 'src/app/services/refresh.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'kenjo-musical-modal',
  templateUrl: './musical-modal.component.html',
  styleUrls: ['./musical-modal.component.scss']
})
export class MusicalModalComponent implements OnInit {

  @Input() musical: Musical;
  @Output() musicalCreated = new EventEmitter<Musical>();

  musicalForm: FormGroup;
  isEditMode: boolean = false;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private musicalService: MusicalService,
    private refreshService: RefreshService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    if (!this.musical.id) {
      this.isEditMode = true;
    }
    this.initializeForm();
  }

  private initializeForm() {
    this.musicalForm = this.fb.group({
      name: [this.musical.name, Validators.required],
      image: [this.musical.imageUrl]
    });
  }

  save() {
    this.musical.updateValuesWithForm(this.musicalForm); 
    this.musicalService.saveMusical(this.musical).subscribe(musical => {
      musical.id = musical.id;
      this.refreshService.refresh();
      this.readMode();
    });
  }

  delete() {
    const modal = this.modalService.open(DeleteModalComponent);
    modal.componentInstance.musical = this.musical;
    modal.componentInstance.delete.subscribe(() => {
      this.musicalService.deleteMusical(this.musical).subscribe(() => {
      this.refreshService.refresh();
      this.activeModal.dismiss();
      });
    });
  }

  editMode() {
    this.musicalForm.controls.genre && this.musicalForm.controls.genre.enable();
    this.isEditMode = true;
  }

  private readMode() {
    this.isEditMode = false;
    this.musicalForm.controls.genre && this.musicalForm.controls.genre.disable();
  }

}
