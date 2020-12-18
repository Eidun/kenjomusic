import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first, map, shareReplay } from 'rxjs/operators';
import { Album } from 'src/app/models/album';

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

  createAlbum(album: Album): Observable<Album> {
    //Clean cache
    this.albums = null;
    return this.http.post('/album', album.convertToJSON()).pipe(first(), map(album => new Album(album)));
  }

  updateAlbum(album: Album): Observable<Album> {
    //Clean cache
    this.albums = null;
    return this.http.put('/album/' + album.id, album.convertToJSON()).pipe(first(), map(album => new Album(album)));
  }

  deleteAlbum(artist: Album): Observable<any> {
    //Clean cache
    this.albums = null;
    return this.http.delete('/album/' + artist.id).pipe(first());
  }

}
