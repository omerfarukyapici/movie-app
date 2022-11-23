import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPosterUrl, toTop } from "../utils";
import { MovieCard } from "../components/MovieCard";
import { CastCard } from "../components/CastCard";
import useFetch from "../hooks/useFetch";

const MovieDetail = (props) => {

    useEffect(() => {
        toTop()
    })

    let { id } = useParams();
    const { movieDetail, movieGenre, movieCompanie } = useFetch(`movie/${id}`);
    const { movieCast } = useFetch(`movie/${id}/credits`);
    const { movieSimilar } = useFetch(`movie/${id}/similar`)


    return (
        <>
            <div>
                {
                    movieDetail && <>

                        <div className="Content-detail-parent">
                            <div className="Content">
                                <div className="Content-img">
                                    <img src={getPosterUrl(movieDetail.backdrop_path)} alt="img" />
                                    <div className="Content-detail-rectangle"></div>
                                </div>
                                <div className="Content-info">
                                    <div>
                                        <div className="Content-name">{movieDetail.title}</div>
                                        <div className="Content-release-date">({movieDetail.release_date})</div>
                                        <div className="Content-overview">
                                            <h2>Overview</h2>
                                            <p>{movieDetail.overview}</p>
                                        </div>
                                        <div className="Content-genre-companie-parent">
                                            <div className="Content-genre-companie-child">
                                                <h3>Genres</h3>
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
                                            <div className="Content-genre-companie-child">
                                                <h3>Companies</h3>
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
                                            <div className="Content-genre-companie-child">
                                                <h3 className="Vote-Title">Vote Average</h3>
                                                <div className="Content-vote-average">{movieDetail.vote_average}</div>
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
                <div className="Cast-section-parent">
                    <div className="Cast-content">
                        <h2>Serie Cast</h2>
                        <div className="Cast-content">
                            {
                                movieDetail && <>
                                    {
                                        movieCast && <>
                                            {
                                                movieCast.map(cast => (
                                                    <CastCard
                                                        key={cast.id}
                                                        posterPath={cast.profile_path}
                                                        character={cast.character}
                                                        original_name={cast.original_name}
                                                    />
                                                )).slice(0, 7)
                                            }
                                        </>
                                    }
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="Home-content-parent">
                <div className="Home-content">
                    <div className="Movie-content">
                        <div className="Content-title">
                            <h1>Similar Movies</h1>
                        </div>
                        <div className="Movies">

                            {
                                movieSimilar && <>
                                    {
                                        movieSimilar.map(movie => (

                                            <MovieCard
                                                key={movie.id}
                                                MovieTitle={movie.original_title}
                                                MovieRank={movie.vote_average}
                                                posterPath={movie.backdrop_path}
                                                Movie={movie.id}
                                                Type={"movie"}
                                                RankStyle={"Img-popularity Rank-bg"}
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