export interface Movie {
    id?: number,
    type: string,
    name: string,
    released_in: string,
    director: string,
    rating: number,
    opinion: string,
    watched: boolean,
    genres: Array<String>
}