import Navbar from "@/components/navbar"
import { optionsForMenu } from "@/app/menu-options"
import { HttpClient, MovieDetailed, MoviesByCategory } from "@/infraestructure/http";
import GridMovies from "@/components/gridMovies";

export default async function TopRated() {
    const http = new HttpClient();
    const topRatedMoviesRequest = await http.get<MoviesByCategory>('https://api.themoviedb.org/3/movie/top_rated');
    const topRatedMoviesData: MovieDetailed[] = [];
    for await (const movie of topRatedMoviesRequest.results) {
        const movieInformation = await http.get<MovieDetailed>('https://api.themoviedb.org/3/movie/' + movie.id);
        topRatedMoviesData.push(movieInformation);
    }
    return (
        <>
            <Navbar menuOptions={optionsForMenu} />
            <GridMovies movies={topRatedMoviesData} />
        </>
    )
}