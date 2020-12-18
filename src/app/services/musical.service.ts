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

  saveMusical(musical: Musical): Observable<Musical> {
    if (musical.type === 'Album') {
      return this.saveAlbum(musical as Album);
    } else {
      return this.saveArtist(musical as Artist);
    }
  }

  deleteMusical(musical: Musical) {
    if (musical.type === 'Album') {
      return this.albumService.deleteAlbum(musical as Album);
    } else {
      return this.artistService.deleteArtist(musical as Artist);
      
    }
  }

  private saveAlbum(album: Album): Observable<Album> {
    if (album.id) {
      return this.albumService.updateAlbum(album);
    } else {
      return this.albumService.createAlbum(album);
    }
  }

  private saveArtist(artist: Artist) {
    if (artist.id) {
      return this.artistService.updateArtist(artist);
    } else {
      return this.artistService.createArtist(artist);
    }
  }

  private linkMusicals(albums: Album[], artists: Artist[]) {
    albums.filter(album => album.artistId).forEach(album => {
      const creatorArtist = artists.find(artist => artist.id === album.artistId);
      album.linkArtist(creatorArtist);
    });
  }
}
