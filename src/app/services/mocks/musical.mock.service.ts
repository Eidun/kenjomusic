import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Musical } from '../../models/musical';
import { AlbumService } from '../album/album.service';
import { ArtistService } from '../artist/artist.service';
import * as musicals from './musicals.json';

@Injectable({
  providedIn: 'root'
})
export class MusicalMockService {

  constructor(private albumService: AlbumService, private artistService: ArtistService) { }

  getMusicals() : Observable<any[]> {
    return of(musicals);
  }

  saveMusical(musical: Musical): Observable<Musical> {
    return of(musical);
  }

  deleteMusical(musical: Musical) {
    return of(musical);
  }

}
