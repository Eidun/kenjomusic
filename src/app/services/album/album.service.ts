import { Album } from 'src/app/models/album';
import { Observable } from 'rxjs';
import { map, first } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

  getAlbums() : Observable<Album[]> {
    return this.http.get('/albums/all').pipe(first(), map(res => this.mapToArtist(res as any[])));
  }

  private mapToArtist(albums: any[]): Album[] {
    return albums.map(album => {
        return {
          id: album._id,
          imageUrl: album.coverUrl,
          name: album.title,
          genre: album.genre,
          year: album.year,
          artistId: album.artistId
        };
    });
  }
}
