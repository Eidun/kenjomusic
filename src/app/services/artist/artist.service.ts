import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first, map, shareReplay } from 'rxjs/operators';
import { Artist } from 'src/app/models/artist';

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

  createArtist(artist: Artist): Observable<Artist> {
    //Clean cache
    this.artists = null;
    return this.http.post('/artist', artist.convertToJSON()).pipe(first(), map(album => new Artist(album)));
  }

  updateArtist(artist: Artist): Observable<Artist> {
    //Clean cache
    this.artists = null;
    return this.http.put('/artist/' + artist.id, artist.convertToJSON()).pipe(first(), map(album => new Artist(album)));
  }

  deleteArtist(artist: Artist): Observable<any> {
    //Clean cache
    this.artists = null;
    return this.http.delete('/artist/' + artist.id).pipe(first());
  }

}
