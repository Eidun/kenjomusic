import { FormGroup } from "@angular/forms";

export abstract class Musical {
    id: string;
    imageUrl: string;
    name: string;
    type: 'Artist' | 'Album';

    constructor(musical) {
        this.id = musical._id;
    }

    hasName(name: string) {
        return this.name.toLowerCase().includes(name.toLowerCase()) || this.hasRelatedName(name);
    }

    updateValuesWithForm(musicalForm: FormGroup) {
        this.name = musicalForm.value.name;
        this.imageUrl = musicalForm.value.image;
        this.updateOwnValuesWithForm(musicalForm);
    }

    protected abstract updateOwnValuesWithForm(musicalForm: FormGroup)

    protected abstract hasRelatedName(name: string);
} 