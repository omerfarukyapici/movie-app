import { useEffect } from "react";
import { MovieCard } from "../components/MovieCard";
import { toTop } from "../utils";
import useFetch from "../hooks/useFetch";

const Series = () => {

    useEffect(() => {
        toTop()
    })

    const { serie } = useFetch("tv/popular");

    return (
        <>
            <div className="Home-content-parent">
                <div className="Home-content">

                    <div className="Movie-content">
                        <div className="Content-title">
                            <h1>Popular Tv Series</h1>
                        </div>
                        <div className="Movies">

                            {
                                serie && <>
                                    {
                                        serie.map(serie => (
                                            <MovieCard
                                                key={serie.id}
                                                MovieTitle={serie.name}
                                                MovieRank={serie.vote_average}
                                                posterPath={serie.backdrop_path}
                                                Movie={serie.id}
                                                Type={"serie"}
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

export default Series;