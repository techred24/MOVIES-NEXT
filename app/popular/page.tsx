import Navbar from "@/components/navbar";
import GridMovies from "@/components/gridMovies";
import { optionsForMenu } from "@/app/menu-options";
import { HttpClient, MovieDetailed, MoviesByCategory } from "@/infraestructure/http";
// import { GridMoviesProps } from "@/interfaces/menu";

export default async function Popular() {
    const http = new HttpClient();
    const popularMoviesRequest = await http.get<MoviesByCategory>('https://api.themoviedb.org/3/movie/popular');
    const popularMoviesData: MovieDetailed[] = [];
    for await (const movie of popularMoviesRequest.results) {
        const movieInformation = await http.get<MovieDetailed>('https://api.themoviedb.org/3/movie/' + movie.id);
        popularMoviesData.push(movieInformation);
    }
    return (
        <>
            <Navbar menuOptions={optionsForMenu}/>
            <GridMovies movies={popularMoviesData} />
        </>
    )
}