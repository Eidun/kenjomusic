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

    protected abstract hasRelatedName(name: string);
} 