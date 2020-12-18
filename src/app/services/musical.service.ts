import { Musical } from '../models/musical';
import { AlbumService } from './album/album.service';
import { ArtistService } from './artist/artist.service';
import { Observable, zip } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Album } from '../models/album';
import { Artist } from '../models/artist';

@Injectable({
  providedIn: 'root'
})
export class MusicalService {

  constructor(private albumService: AlbumService, private artistService: ArtistService) { }

  getMusicals() : Observable<Musical[]> {
    const albums = this.albumService.getAlbums();
    const artists = this.artistService.getArtists();
    const musicals = zip(albums, artists).pipe(map(([albums, artists]: [Album[], Artist[]]) => {
      this.linkMusicals(albums, artists);
      return [...albums, ...artists];
    }));
    return musicals;
  }

  saveAlbum(album: Album): Observable<Album> {
    if (album.id) {
      return this.albumService.updateAlbum(album);
    } else {
      return this.albumService.createAlbum(album);
    }
  }

  private linkMusicals(albums: Album[], artists: Artist[]) {
    albums.filter(album => album.artistId).forEach(album => {
      const creatorArtist = artists.find(artist => artist.id === album.artistId);
      album.linkArtist(creatorArtist);
    });
  }
}
