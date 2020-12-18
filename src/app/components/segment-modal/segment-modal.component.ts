import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Musical } from 'src/app/models/musical';

@Component({
  selector: 'kenjo-segment-modal',
  template: ''
})
export class SegmentModalComponent {

  @Input() musical: Musical;
  @Input() musicalForm: FormGroup;
  @Input() isEditMode: boolean;
  
}
