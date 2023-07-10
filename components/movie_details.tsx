import { HttpClient } from "@/infraestructure/http";

export default async function Movie({
  movieId
}: { movieId: String }) {
    const http = new HttpClient();
    const movie = await http.getMoviesByCategory('https://api.themoviedb.org/3/movie/' + movieId);
    const credits = await http.getMoviesByCategory('https://api.themoviedb.org/3/movie/' + movieId + '/credits');
    return (
        <>
            {/* Loading */}
            {/* Movie Data */}
            {/* Actors */}
        </>
    )
}