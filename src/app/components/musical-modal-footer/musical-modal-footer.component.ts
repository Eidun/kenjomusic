import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'kenjo-musical-modal-footer',
  templateUrl: './musical-modal-footer.component.html',
  styleUrls: ['./musical-modal-footer.component.scss']
})
export class MusicalModalFooterComponent {

   @Input() isEditMode: boolean;
   @Input() disabled: boolean;

   @Output() save = new EventEmitter<boolean>();
   @Output() edit = new EventEmitter<boolean>();
   @Output() delete = new EventEmitter<boolean>();

   saveMusical() {
    this.save.emit(true);
  }

  editMusical() {
    this.edit.emit(true);
  }

  deleteMusical() {
    this.delete.emit(true);
  }

}
