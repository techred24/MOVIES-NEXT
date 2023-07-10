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
    release_date:      Date;
    title:             string;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
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

    async get(url:string): Promise<string> {
        return ''
    }
    async post(url: string, method: string): Promise<any> {
        this.options.method = 'POST';
        const response = await fetch(url, this.options);
        const popularMovies = await response.json();
        return popularMovies;
    }
    async getMovies(url: string): Promise<Movie[]> {
        this.options.method = 'GET';
        const response = await fetch(url, this.options);
        const popularMovies = await response.json();
        //console.log(popularMovies.results);
        return popularMovies.results
    }
}