import { Musical } from 'src/app/models/musical';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Album } from 'src/app/models/album';
import { MusicalService } from 'src/app/services/musical.service';

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

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder, private musicalService: MusicalService) {}

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
    this.musical.name = this.musicalForm.value.name;
    this.musical.imageUrl = this.musicalForm.value.image;
    if (this.musical.type === 'Album') {
      const album = this.musical as Album;
      album.year = this.musicalForm.value.year;
      album.genre = this.musicalForm.value.genre;
      album.linkArtist(this.musicalForm.value.artist)
      this.musicalService.saveAlbum(album).subscribe(savedAlbum => {
        if (!album.artistId) {

        }
        album.id = savedAlbum.id;
        this.readMode();
      });
    }
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
