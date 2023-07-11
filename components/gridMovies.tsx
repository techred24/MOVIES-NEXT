import { GridMoviesProps } from "@/interfaces/menu";
import Image from 'next/image'

export default function GridMovies({ movies }: GridMoviesProps) {
    const dateOptions:Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' };
    return (
        <main className="mx-20 py-8">
            <div className="grid grid-cols-5 gap-4">
                    {
                        movies.map(e => {
                            const movieReleaseDateArray = e.release_date.split('-');
                            const [ year, month, day ] = movieReleaseDateArray;
                            const movieReleaseDate = new Date(Number(year), Number(month)-1, Number(day));
                            const formattedDate = movieReleaseDate.toLocaleDateString('en-US', dateOptions);
                            return <article key={e.original_title} className="relative rounded-md overflow-hidden shadow-md">
                                        <Image
                                            src={`https://image.tmdb.org/t/p/w500${e.poster_path}`}
                                            alt="Landscape picture"
                                            width={800}
                                            height={500}
                                            className="cursor-pointer"
                                        />
                                        <div className="py-6 px-4">
                                            <h3 className="font-bold cursor-pointer hover:text-teal-300">{e.original_title}</h3>
                                            <p className="text-stone-400 font-medium">{formattedDate}</p>
                                            <p className="font-bold">Genres: {e.genres.map(e => <span className="font-normal">{`${e.name} `}</span>)}</p>
                                        </div>
                                    </article>
                        })
                    }
            </div>
        </main>
    )
}