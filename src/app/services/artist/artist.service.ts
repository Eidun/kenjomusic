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
    return this.http.get('/artists/all').pipe(first(), map(res => this.mapToArtist(res as any[])));
  }

  private mapToArtist(artists: any[]): Artist[] {
    return artists.map(artist => {
      return {
      id: artist._id,
      imageUrl: artist.photoUrl,
      name: artist.name,
      birthDate: artist.birthdate,
      deathDate: artist.deathDate,
      type: 'Artist'
    };
  });

  }
}
