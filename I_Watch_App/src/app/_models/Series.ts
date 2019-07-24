export interface Series {
    id?: number,
    type: string,
    name: string,
    released_in: string,
    active: boolean,
    rating: number,
    opinion: string,
    watched: boolean,
    seasons: number,
    genres: Array<String>
}