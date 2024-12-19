import { nowPlayingAction } from "@/core/actions/movies/now-playing.actions"
import { popularMoviesAction } from "@/core/actions/movies/popular.action"
import { topRatedMoviesAction } from "@/core/actions/movies/top-rated.action"
import { upcomigMoviesAction } from "@/core/actions/movies/upcoming.action"
import { useQuery } from "@tanstack/react-query"

export const useMovies = () => {

    // Queries
    const nowPlayingQuery = useQuery({
        queryKey:['movies', 'nowPlaying'],
        queryFn: nowPlayingAction,
        staleTime: 1000 * 60 * 60 * 24, //24horas
    })

    const popularQuery = useQuery({
        queryKey:['movies', 'popular'],
        queryFn: popularMoviesAction,
        staleTime: 1000 * 60 * 60 * 24, //24horas
    })

    const topRatedQuery = useQuery({
        queryKey:['movies', 'top-rated'],
        queryFn: topRatedMoviesAction,
        staleTime: 1000 * 60 * 60 * 24, //24horas
    })

    const upcomingQuery = useQuery({
        queryKey:['movies', 'upcoming'],
        queryFn: upcomigMoviesAction,
        staleTime: 1000 * 60 * 60 * 24, //24horas
    })


    return {
        nowPlayingQuery,
        popularQuery,
        topRatedQuery,
        upcomingQuery
    };
}