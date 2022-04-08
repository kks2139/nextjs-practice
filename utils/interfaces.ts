export interface Response<Data> {
    page: number
    total_results: number
    total_pages: number
    results: Data[]
}

export interface Movie {
    poster_path: string | null
    adult: boolean
    overview: string
    release_date: string
    genre_ids: number[]
    id: number
    original_title: string
    original_language: string
    title: string
    backdrop_path: string | null
    popularity: number
    vote_count: number
    video: boolean
    vote_average: number
}

export interface Genre {
    id: number
    name: string
}

export interface MovieDetail extends Movie {
    belongs_to_collection: null | object
    budget: number
    genres: Genre[]
    homepage: string
    imdb_id: number
    production_companies: {name: string, id: number, logo_path: string, origin_country: string}[]
    production_countries: {iso_3166_1: string, name: string}[]
    revenue: number
    runtime: number | null
    spoken_languages: {iso_639_1: string, name: string}[]
    status: string
    tagline: string
}

export interface Constraint<Data> {
    [key: string]: Data
}