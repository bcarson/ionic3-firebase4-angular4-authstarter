import { Location, Volunteer } from '../models';

export class Rider {
    name: String;
    skillLevel: Number;
    location: Location;
    instructor: String;
    sidewalkers: Array<Volunteer>;
}