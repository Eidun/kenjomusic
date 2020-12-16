import { Album } from "./album";
import { Musical } from "./musical";

export class Artist extends Musical{

    birthDate: Date;
    deathDate: Date;
    albums: Album[];

    constructor(artist) {
        super(artist);
        this.name = artist.name;
        this.imageUrl = artist.photoUrl;
        this.birthDate = artist.birthdate;
        this.deathDate = artist.deathDate;
        this.albums = [];
        this.type = 'Artist';
    }

    protected hasRelatedName(name: string) {
        return this.albums.find(album => album.name.toLowerCase().includes(name.toLowerCase()))    
    }

}