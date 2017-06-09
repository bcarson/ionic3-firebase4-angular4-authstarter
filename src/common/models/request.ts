import { Volunteer, Location, Session } from '../models';

export class Request {

    constructor(
        public open: Boolean,
        //public session: Session,
        public date: Date,
        public startTime: String,
        public sidewalkers: Array<Volunteer>,
        public committed: Volunteer,
        public location: Location,
        public instructor?: String,
        public leader?: Volunteer,
        public rider?: String
    ) {}

    // open: Boolean = false;
    // session: Session;
    // volunteers: Array<Volunteer>; 
    // leaders: Number = 0; // how many leaders?
    // sidewalkers: Number = 0; // how many sidewalkers?
    // location: Location;
    // admin: String; // Admin user id
    // adminNotes: String;
}