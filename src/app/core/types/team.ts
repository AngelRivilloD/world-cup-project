export interface TeamParameters {
    league: string;
    season: string;
}

export interface Paging {
    current: number;
    total: number;
}

export interface Team {
    id: number;
    name: string;
    logo: string;
    code?: string;
    country?: string;
    founded?: number;
    national?: boolean;
}

export interface Venue {
    id: number;
    name: string;
    address: string;
    city: string;
    capacity: number;
    surface: string;
    image: string;
}

export interface TeamsData {
    team: Team;
    venue: Venue;
}

export interface TeamsReponse {
    get: string;
    parameters: TeamParameters;
    errors: any[];
    results: number;
    paging: Paging;
    response: TeamsData[];
}

export interface Player {
    id: number;
    name: string;
    age: number;
    number: number;
    position: string;
    photo: string;
    team?: Team
}
