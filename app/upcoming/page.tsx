import Navbar from "@/components/navbar";
import { optionsForMenu } from '@/app/menu-options';
import { HttpClient, MovieDetailed, MoviesByCategory } from "@/infraestructure/http";
import GridMovies from "@/components/gridMovies";

export default async function Upcoming() {
    const http = new HttpClient();
    const upcomingMoviesRequest = await http.get<MoviesByCategory>('https://api.themoviedb.org/3/movie/upcoming');
    const upcomingMoviesData: MovieDetailed[] = [];
    for await (const movie of upcomingMoviesRequest.results) {
        const movieInformation = await http.get<MovieDetailed>('https://api.themoviedb.org/3/movie/' + movie.id);
        upcomingMoviesData.push(movieInformation);
    }
    return (
        <>
            <Navbar menuOptions={optionsForMenu} />
            <GridMovies movies={upcomingMoviesData} />
        </>
    );
}