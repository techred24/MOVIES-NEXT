import { Movie, MovieDetailed } from "@/infraestructure/http"

export interface MenuOptions {
    name: string,
    href: string
}
export interface NavigationProps {
    menuOptions: MenuOptions[]
}
export interface GridMoviesProps {
    movies: MovieDetailed[]
}