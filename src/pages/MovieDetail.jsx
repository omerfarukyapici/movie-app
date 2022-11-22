import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPosterUrl, toTop } from "../utils";
import { Card } from "../components/card";
import useFetch from "../hooks/useFetch";

const MovieDetail = (props) => {

    useEffect(() => {
        toTop()
    })

    let { id } = useParams();
    const { movieDetail, movieGenre, movieCompanie } = useFetch(`movie/${id}`);
    const { movieCast } = useFetch(`movie/${id}/credits`);
    const { movie } = useFetch("movie/popular");

    return (
        <>

            <div>
                {
                    movieDetail && <>

                        <div className="Content-detail-parent">
                            <div className="Content">
                                <div className="Content-img">
                                    <img src={getPosterUrl(movieDetail.backdrop_path)} alt="img" />
                                </div>
                                <div className="Content-info">
                                    <div>
                                        <div className="Content-name">{movieDetail.title}</div>
                                        <div className="Content-release-date">({movieDetail.release_date})</div>
                                        <div className="Content-overview">
                                            <h2>Overview</h2>
                                            <p>{movieDetail.overview}</p>
                                        </div>
                                        <div className="Content-vote-average">{movieDetail.vote_average}</div>                                
                                        <div>
                                            <div>

                                                {
                                                    movieGenre && <>
                                                        {
                                                            movieGenre.map(genre => (
                                                                <div key={genre.id}> {genre.name} </div>
                                                            ))
                                                        }
                                                    </>
                                                }

                                            </div>
                                        </div>
                                        <div>
                                            <div>

                                                {
                                                    movieCompanie && <>
                                                        {
                                                            movieCompanie.map(companie => (
                                                                <div key={companie.id}> {companie.name} </div>
                                                            ))
                                                        }
                                                    </>
                                                }

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </>
                }
            </div>

            <div>
                {
                    movieDetail && <>
                        {
                            movieCast && <>
                                {
                                    movieCast.map(cast => (
                                        <div key={cast.id}>
                                            <div>{cast.name}</div>
                                        </div>
                                    ))
                                }
                            </>
                        }
                    </>
                }
            </div>

            <div className="Home-content-parent">
                <div className="Home-content">

                    <div className="Movie-content">
                        <div className="Content-title">
                            <h1>Other Movies</h1>
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
                                        )).slice(15, 20)
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

export default MovieDetail;