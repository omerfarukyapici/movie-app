import { Card } from "../components/card";
import { useEffect } from "react";
import { toTop } from "../utils";
import useFetch from "../hooks/useFetch";

const Home = () => {

    useEffect(() => {
        toTop()
    })

    const { movie } = useFetch("movie/popular");
    const { serie } = useFetch("tv/popular");

    return (
        <>
            <div className="Home-content-parent">
                <div className="Home-content">

                    <div className="Movie-content">
                        <div className="Content-title">
                            <h1>Popular Movies</h1>
                        </div>
                        <div className="Movies">

                            {
                                movie && <>
                                    {
                                        movie.map(movie => (
                                            <Card
                                                key={movie.id}
                                                MovieTitle={movie.original_title}
                                                MovieRank={movie.vote_average}
                                                posterPath={movie.backdrop_path}
                                                Movie={movie.id}
                                                Type={"movie"}
                                            />
                                        )).slice(0, 4)
                                    }
                                </>
                            }

                        </div>
                    </div>
             
                    <div className="Movie-content">
                        <div className="Content-title">
                            <h1>Popular TV Series</h1>
                        </div>
                        <div className="Series">

                            {
                                serie && <>
                                    {
                                        serie.map(serie => (
                                            <Card
                                                key={serie.id}
                                                MovieTitle={serie.name}
                                                MovieRank={serie.vote_average}
                                                posterPath={serie.backdrop_path}
                                                Movie={serie.id}
                                                Type={"serie"}
                                            />
                                        )).slice(0, 4)
                                    }
                                </>
                            }

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home;