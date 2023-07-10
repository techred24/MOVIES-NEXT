import { GridMoviesProps } from "@/interfaces/menu";
import Image from 'next/image'

export default function GridMovies({ movies }: GridMoviesProps) {
    return (
        <main className="mx-20">
            <div className="grid grid-cols-5 gap-4">
                    {
                        movies.map(e => {
                            return <article key={e.original_title}>
                                        <Image
                                            src={`https://image.tmdb.org/t/p/w500${e.poster_path}`}
                                            alt="Landscape picture"
                                            width={800}
                                            height={500}
                                        />
                                    </article>
                        })
                    }
            </div>
        </main>
    )
}