import { FormGroup } from "@angular/forms";
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
        this.year = album.year;
        this.artistId = album.artistId;
        this.genre = album.genre;
        this.type = 'Album';
    }

    linkArtist(artist: Artist) {
        if (artist) {
            this.artist = artist;
            this.artistId = artist.id;
            artist.albums.push(this);
        }
    }

    protected hasRelatedName(name: string) {
        return this.artist && this.artist.name.toLowerCase().includes(name.toLowerCase())
    }

    protected updateOwnValuesWithForm(albumForm: FormGroup) {
        this.year = albumForm.value.year;
        this.genre = albumForm.value.genre;
        this.linkArtist(albumForm.value.artist)
    }

    convertToJSON() {
        const json: any = {};
        json._id = this.id;
        json.title = this.name;
        json.coverUrl = this.imageUrl;
        json.genre = this.genre;
        json.artistId = this.artistId;
        return json;
    }
}

export enum Genres {
    POP = 'Pop',
    ROCK = 'Rock',
    METAL ='Metal',
    COUNTRY = 'Country',
    TECHNO = 'Techno',
    OTHER = 'Other'
}