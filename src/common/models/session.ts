import { Location, Volunteer } from '../models';

export class Session {
    constructor(public date: Date,
    public instructor: String,
    public startTime: String,
    public sidewalkers: Array<Volunteer>,
    public rider: String,
    public location: Location,
    public leader?: Volunteer) {}
}