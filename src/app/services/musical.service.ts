import { Musical } from '../models/musical';
import { AlbumService } from './album/album.service';
import { ArtistService } from './artist/artist.service';
import { Observable, zip } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicalService {

  constructor(private albumService: AlbumService, private artistService: ArtistService) { }

  getMusicals() : Observable<Musical[]> {
    const albums = this.albumService.getAlbums();
    const artists = this.artistService.getArtists();
    const musicals = zip(albums, artists).pipe(map((v: [Musical[], Musical[]]) => v[0].concat(v[1])));
    return musicals;
  }
}
