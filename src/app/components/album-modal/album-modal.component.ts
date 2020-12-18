import { Artist } from 'src/app/models/artist';
import { ArtistService } from 'src/app/services/artist/artist.service';
import { Album, Genres } from 'src/app/models/album';
import { Musical } from 'src/app/models/musical';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'kenjo-album-modal',
  templateUrl: './album-modal.component.html',
  styleUrls: ['./album-modal.component.scss']
})
export class AlbumModalComponent implements OnInit {

  @Input() musical: Musical;
  @Input() musicalForm: FormGroup;
  @Input() isEditMode: boolean;
  
  private artists: Artist[];
  artistImageUrl: string;
  
  genres: string[] = Object.values(Genres);
  
  private ONLY_NUMBERS_REGEX = /^[0-9]*$/;

  constructor(private fb: FormBuilder, private artistService: ArtistService) { }

  ngOnInit(): void {
    this.artistService.getArtists().subscribe(artists => {
      this.artists = artists;
    })
    this.initializeForm();
  }

  private initializeForm() {
    const album = this.musical as Album;
    this.musicalForm.addControl('year', this.fb.control(album.year || '',
      [
        Validators.min(1900),
        Validators.max(new Date().getFullYear()),
        Validators.pattern(this.ONLY_NUMBERS_REGEX)]));

    this.musicalForm.addControl('genre', this.fb.control({value: album.genre || '', disabled: !this.isEditMode}));
    this.musicalForm.addControl('artistName', this.fb.control(album.artist?.name || ''));
    this.musicalForm.addControl('artist', this.fb.control(null));

    this.artistImageUrl = album.artist?.imageUrl;
  }

  searchArtist() {
    const artistName: string = this.musicalForm.value.artistName;
    const artists = this.artists.filter(artist => artist.name.toLowerCase().includes(artistName.toLowerCase()));
    if (artists.length === 0) {
      this.musicalForm.controls.artistName.setErrors({noResults: true});
    }
    if (artists.length === 1) {
      const artist = artists[0];
      this.musicalForm.controls.artistName.setValue(artist.name);
      this.musicalForm.controls.artist.setValue(artist);
      this.artistImageUrl = artist.imageUrl;
         
    }
    if (artists.length > 1) {
      this.musicalForm.controls.artistName.setErrors({tooManyResults: true});
    }
  }

}
