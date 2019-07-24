export interface Book {
    id?: number,
    type: string,
    name: string,
    released_in: string,
    author: string,
    rating: number,
    opinion: string,
    read: boolean,
    genres: Array<String>
}