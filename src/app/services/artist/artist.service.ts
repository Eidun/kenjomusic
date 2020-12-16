import { Artist } from 'src/app/models/artist';
import { Observable } from 'rxjs';
import { map, first } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http: HttpClient) { }

  getArtists() : Observable<Artist[]> {
    return this.http.get('/artists/all').pipe(first(), map((artists: any[]) => artists.map(artist => new Artist(artist))));
  }

}
