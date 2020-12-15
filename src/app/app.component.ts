import { Component, OnInit } from '@angular/core';
import { AlbumService } from './services/album/album.service';
import { ArtistService } from './services/artist/artist.service';
import { MusicalService } from './services/musical.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private musicalService: MusicalService) {}

  ngOnInit() {
  }
}
