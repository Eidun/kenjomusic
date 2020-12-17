import { Album } from 'src/app/models/album';
import { Observable } from 'rxjs';
import { map, first, shareReplay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  private albums: Observable<Album[]>;

  constructor(private http: HttpClient) { }

  getAlbums() : Observable<Album[]> {
    // Cache
    if (!this.albums) {
      this.albums = this.http.get('/albums/all').pipe(first(), shareReplay(1), 
          map((albums: any[]) => albums.map(album => new Album(album))));
    }
    return this.albums
  }

}
