export interface Review {
    type: string, // either movie or series or book, (anime etc...)
    name: string,
    opinion: string,
    rating: number, // (from 1 to 20) ?
    total_seasons: number,
    seasons_watched: number,
    status: string, // Running, Cancelled or Finished
    created_in: string
}