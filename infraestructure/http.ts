export interface MoviesByCategory {
    page: number,
    results: Movie[]
}
export interface Movie {
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    id:                number;
    original_language: string;
    original_title:    string;
    overview:          string;
    popularity:        number;
    poster_path:       string;
    release_date:      string;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}

export interface MovieDetailed {
    adult:                 boolean;
    backdrop_path:         string;
    belongs_to_collection: null;
    budget:                number;
    genres:                Genre[];
    homepage:              string;
    id:                    number;
    imdb_id:               string;
    original_language:     string;
    original_title:        string;
    overview:              string;
    popularity:            number;
    poster_path:           string;
    production_companies:  ProductionCompany[];
    production_countries:  ProductionCountry[];
    release_date:          string;
    revenue:               number;
    runtime:               number;
    spoken_languages:      SpokenLanguage[];
    status:                string;
    tagline:               string;
    title:                 string;
    video:                 boolean;
    vote_average:          number;
    vote_count:            number;
}

export interface Genre {
    id:   number;
    name: string;
}

export interface ProductionCompany {
    id:             number;
    logo_path:      null | string;
    name:           string;
    origin_country: string;
}

export interface ProductionCountry {
    iso_3166_1: string;
    name:       string;
}

export interface SpokenLanguage {
    english_name: string;
    iso_639_1:    string;
    name:         string;
}




export interface Http {
    get(url:string): Promise<string>,
    post(url:string, method: string): Promise<any>
}

export class HttpClient implements Http {
    constructor() { }
    public options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTE5MGY4M2E5NWJjNzJjZTAxZDU4OTcyZDFjMTk2YSIsInN1YiI6IjYyM2E2ZGQ0MTNhZjVmMDA0NzE0YmE1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.w29ToiHMMDrrbl7vjE5Nj5SxSQceSGogIDSfTrDVsXg'
        }
      };

    async get<T>(url:string): Promise<T> {
        this.options.method = 'GET';
        const response = await fetch(url, this.options);
        const moviesInfo = await response.json();
        // console.log(moviesInfo, 'GET METHOD--');
        return moviesInfo
    }
    async post<T>(url: string, method: string): Promise<T> {
        this.options.method = 'POST';
        const response = await fetch(url, this.options);
        const popularMovies = await response.json();
        return popularMovies;
    }
    async getMoviesByCategory(url: string): Promise<Movie[]> {
        this.options.method = 'GET';
        const response = await fetch(url, this.options);
        const popularMovies = await response.json();
        console.log(popularMovies, 'CATEGORIES-');
        return popularMovies.results
    }
}