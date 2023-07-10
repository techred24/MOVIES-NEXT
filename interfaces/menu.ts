import { Movie } from "@/infraestructure/http"

export interface MenuOptions {
    name: string,
    href: string
}
export interface NavigationProps {
    menuOptions: MenuOptions[]
}
export interface GridMoviesProps {
    movies: Movie[]
}