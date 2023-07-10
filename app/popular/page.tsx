import Navbar from "@/components/navbar";
import GridMovies from "@/components/gridMovies";
import { optionsForMenu } from "@/app/menu-options";
import { HttpClient } from "@/infraestructure/http";
import { GridMoviesProps } from "@/interfaces/menu";

export default async function Popular() {
    const http = new HttpClient();
    const popularMovies = await http.getMovies('https://api.themoviedb.org/3/movie/popular');
    console.log(popularMovies, 'HEREEEEEEEEEEEEEEEEEEEEEEEEEEEE');
    return (
        <>
            <Navbar menuOptions={optionsForMenu}/>
            <GridMovies movies={popularMovies} />
        </>
    )
}