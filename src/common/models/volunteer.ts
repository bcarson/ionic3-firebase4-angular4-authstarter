import { Request } from '../models';

export class Volunteer {
    constructor(
        public daysAvailable: Array<String>,
        public timesAvailable: Array<String>,
        public requestsReceived: Array<Request>,
        public requestsAccepted: Array<Request>
    ) {}
}