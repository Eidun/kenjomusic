import { Musical } from "./musical";

export interface Artist extends Musical{
    // photoUrl: string;
    birthDate: Date;
    deathDate: Date;
}