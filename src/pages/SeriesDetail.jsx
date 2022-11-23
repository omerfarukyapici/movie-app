import { MovieCard } from "../components/MovieCard";
import { CastCard } from "../components/CastCard";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPosterUrl, toTop } from "../utils";
import useFetch from "../hooks/useFetch";

const SeriesDetail = (props) => {

    useEffect(() => {
        toTop()
    })

    let { id } = useParams();
    const { serieDetail, serieGenre, serieCompanie } = useFetch(`tv/${id}`);
    const { serieCast } = useFetch(`tv/${id}/credits`);
    const { serieSimilar } = useFetch(`tv/${id}/similar`);


    return (
        <>
            <div>
                {
                    serieDetail &&

                    <div className="Content-detail-parent">
                        <div className="Content">
                            <div className="Content-img">
                                <img src={getPosterUrl(serieDetail.backdrop_path)} alt="img" />
                                <div className="Content-detail-rectangle"></div>
                            </div>
                            <div className="Content-info">
                                <div>
                                    <div className="Content-name">{serieDetail.name}</div>
                                    <div className="Content-release-date">({serieDetail.first_air_date})</div>
                                    <div className="Content-overview">
                                        <h2>Overview</h2>
                                        <p>{serieDetail.overview}</p>
                                    </div>
                                    <div className="Content-genre-companie-parent">
                                        <div className="Content-genre-companie-child">
                                            <h3>Genres</h3>

                                            {
                                                serieGenre && <>
                                                    {
                                                        serieGenre.map(genre => (
                                                            <div key={genre.id}> {genre.name} </div>
                                                        ))
                                                    }
                                                </>
                                            }

                                        </div>
                                        <div className="Content-genre-companie-child">
                                            <h3>Companies</h3>
                                            {
                                                serieCompanie && <>
                                                    {
                                                        serieCompanie.map(companie => (
                                                            <div key={companie.id}> {companie.name} </div>
                                                        ))
                                                    }
                                                </>
                                            }

                                        </div>
                                        <div className="Content-genre-companie-child">
                                            <h3 className="Vote-Title">Vote Average</h3>
                                            <div className="Content-vote-average">{serieDetail.vote_average}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>

            <div>
                <div className="Cast-section-parent">
                    <div className="Cast-content">
                        <h2>Serie Cast</h2>
                        <div className="Cast-content">
                            {
                                serieDetail && <>
                                    {
                                        serieCast && <>
                                            {
                                                serieCast.map(cast => (
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
                            <h1>Similar Tv Series</h1>
                        </div>
                        <div className="Movies">
                            {
                                serieSimilar && <>
                                    {
                                        serieSimilar.map(serie => (
                                            <MovieCard
                                                key={serie.id}
                                                MovieTitle={serie.name}
                                                MovieRank={serie.vote_average}
                                                posterPath={serie.backdrop_path}
                                                Movie={serie.id}
                                                Type={"serie"}
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

export default SeriesDetail;