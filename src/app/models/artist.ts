import { FormGroup } from "@angular/forms";
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
        this.birthDate = artist.birthdate && new Date(artist.birthdate);
        this.deathDate = artist.deathDate && new Date(artist.deathDate);
        this.albums = [];
        this.type = 'Artist';
    }

    protected hasRelatedName(name: string) {
        return this.albums.find(album => album.name.toLowerCase().includes(name.toLowerCase()))    
    }

    protected updateOwnValuesWithForm(artistForm: FormGroup) {
        this.birthDate = artistForm.value.birthDate && new Date(artistForm.value.birthDate);
        this.deathDate = artistForm.value.birthDate && new Date(artistForm.value.deathDate);
    }
    
    convertToJSON(): any {
        const json: any = {};
        json._id = this.id;
        json.name = this.name;
        json.photoUrl = this.imageUrl;
        json.birthdate = this.birthDate;
        json.deathDate = this.deathDate;
        return json;
    }
    

}