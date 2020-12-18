import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SegmentModalComponent } from '../segment-modal/segment-modal.component';
import { Artist } from 'src/app/models/artist';
import { formatDate } from '@angular/common';
import { LOCALE_ID, Inject } from '@angular/core';
import { dateValidator } from './validators';

@Component({
  selector: 'kenjo-artist-modal',
  templateUrl: './artist-modal.component.html',
  styleUrls: ['./artist-modal.component.scss']
})
export class ArtistModalComponent extends SegmentModalComponent implements OnInit {

  constructor(private fb: FormBuilder, @Inject(LOCALE_ID) public locale: string) {
    super();
   }

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm() {
    const artist = this.musical as Artist;
    const formattedBirthDate = artist.birthDate && formatDate(artist.birthDate, 'yyyy-MM-dd', this.locale);
    const formattedDeathDate = artist.deathDate && formatDate(artist.deathDate, 'yyyy-MM-dd', this.locale);
    this.musicalForm.addControl('birthDate', this.fb.control(formattedBirthDate, [dateValidator()]));
    this.musicalForm.addControl('deathDate', this.fb.control(formattedDeathDate, [dateValidator()]));
  }
}
