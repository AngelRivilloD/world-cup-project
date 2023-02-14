import { Paging, Team } from "./team";


export interface CoachParameters {
    team: string;
}

export interface Birth {
    date: string;
    place: string;
    country: string;
}

export interface Career {
    team: Team;
    start: string;
    end: string;
}

export interface Coach {
    id: number;
    name: string;
    firstname: string;
    lastname: string;
    age: number;
    birth: Birth;
    nationality: string;
    height: string;
    weight: string;
    photo: string;
    team: Team;
    career: Career[];
}

export interface CoachResponse {
    get: string;
    parameters: CoachParameters;
    errors: any[];
    results: number;
    paging: Paging;
    response: Coach[];
}

