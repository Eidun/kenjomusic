import { Musical } from 'src/app/models/musical';
import { Album, Genres } from 'src/app/models/album';
import { ArtistService } from 'src/app/services/artist/artist.service';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'kenjo-musical-modal',
  templateUrl: './musical-modal.component.html',
  styleUrls: ['./musical-modal.component.scss']
})
export class MusicalModalComponent implements OnInit {

  @Input() musical: Musical;

  musicalForm: FormGroup;
  isEditMode: boolean = false;

  genres: string[] = Object.values(Genres);

  private ONLY_NUMBERS_REGEX = /^[0-9]*$/;

  private albums: Album[];

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder, private artistService: ArtistService) {}

  ngOnInit(): void {
    if (!this.musical.id) {
      this.isEditMode = true;
    }
    this.initializeForm();

    this.artistService.getArtists().subscribe(artists => {
      console.log(artists);
    })
  }

  private initializeForm() {
    this.musicalForm = this.fb.group({
      name: [this.musical.name, Validators.required],
      image: [this.musical.imageUrl]
    });
    if (this.musical.type === 'Album') {
      this.initializeAlbumForm();
    }
    if (this.musical.type === 'Artist') {
      this.initializeArtistForm();
    }
  }

  private initializeAlbumForm() {
    const album = this.musical as Album;

    this.musicalForm.addControl('year', this.fb.control(album.year || '',
      [
        Validators.min(1900),
        Validators.max(new Date().getFullYear()),
        Validators.pattern(this.ONLY_NUMBERS_REGEX)]));

    this.musicalForm.addControl('genre', this.fb.control({value: album.genre || '', disabled: !this.isEditMode}));
    this.musicalForm.addControl('artistName', this.fb.control(album.artist?.name || ''));
  }

  private initializeArtistForm() {

  }

  editMode() {
    this.musicalForm.controls.genre && this.musicalForm.controls.genre.enable();
    this.isEditMode = true;
  }

  readMode() {
    this.musicalForm.controls.genre && this.musicalForm.controls.genre.disable();
    this.isEditMode = false;
  }

  searchArtist() {
    
  }

}
