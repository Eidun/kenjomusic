import { MusicEntity } from "./musical";

export interface Artist extends MusicEntity{
    // photoUrl: string;
    birthDate: Date;
    deathDate: Date;
}