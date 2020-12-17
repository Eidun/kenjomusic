import { Artist } from 'src/app/models/artist';
import { Observable } from 'rxjs';
import { map, first, shareReplay } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  private artists: Observable<Artist[]>;

  constructor(private http: HttpClient) { }

  getArtists() : Observable<Artist[]> {
    if(!this.artists) {
      this.artists = this.http.get('/artists/all').pipe(first(), shareReplay(1), map((artists: any[]) => artists.map(artist => new Artist(artist))));
    }
    return this.artists;
  }

}
