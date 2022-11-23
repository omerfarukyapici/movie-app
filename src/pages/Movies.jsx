import { useEffect } from "react";
import { MovieCard } from "../components/MovieCard";
import { toTop } from "../utils";
import useFetch from "../hooks/useFetch";

const Movies = () => {

    useEffect(() => {
        toTop()
    })

    const { movie } = useFetch("movie/popular");

    return (
        <>
            <div className="Home-content-parent">
                <div className="Home-content">

                    {/* Movies */}
                    <div className="Movie-content">
                        <div className="Content-title">
                            <h1>Popular Movies</h1>
                        </div>
                        <div className="Movies">

                            {
                                movie && <>
                                    {
                                        movie.map(movie => (
                                            <MovieCard
                                                key={movie.id}
                                                MovieTitle={movie.original_title}
                                                MovieRank={movie.vote_average}
                                                posterPath={movie.backdrop_path}
                                                Movie={movie.id}
                                                Type={"movie"}
                                                RankStyle={"Img-popularity Rank-bg"}
                                            />
                                        ))
                                    }
                                </>
                            }

                        </div>
                    </div>

                </div>
            </div>

        </>
    )
};

export default Movies;