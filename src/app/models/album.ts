import { MusicEntity } from "./musical";

export interface Album extends MusicEntity{
    // title: string;
    // coverUrl: string;
    year: Date;
    genre: Genres;
    artistId: string;
}

export enum Genres {
    POP = 'Pop',
    ROCK = 'Rock',
    COUNTRY = 'Country',
    TECHNO = 'Techno',
    OTHERS = 'Others'
}