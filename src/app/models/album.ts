import { Artist } from "./artist";
import { Musical } from "./musical";

export class Album extends Musical{

    year: Date;
    genre: Genres;
    artistId: string;
    artist?: Artist;

    constructor(album) {
        super(album);
        this.name = album.title;
        this.imageUrl = album.coverUrl;
        this.genre = album.genre;
        this.year = album.year;
        this.artistId = album.artistId;
        this.type = 'Album';
    }

    linkArtist(artist: Artist) {
        this.artist = artist;
        artist.albums.push(this);
    }

    protected hasRelatedName(name: string) {
        return this.artist && this.artist.name.toLowerCase().includes(name.toLowerCase())
    }
}

export enum Genres {
    POP = 'Pop',
    ROCK = 'Rock',
    COUNTRY = 'Country',
    TECHNO = 'Techno',
    OTHERS = 'Others'
}