import { Musical } from 'src/app/models/musical';
import { Component } from '@angular/core';

@Component({
  selector: 'kenjo-musical-list',
  templateUrl: './musical-list.component.html',
  styleUrls: ['./musical-list.component.scss']
})
export class MusicalListComponent {
  
  page: number = 1;
  pageSize: number = 9;

  musicals: Musical[] = [];
  loading: boolean = true;

  showMusicals(musicals: Musical[]) {
    this.musicals = musicals;
    this.loading = false;
  }

}
