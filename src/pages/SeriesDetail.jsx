import { Card } from "../components/card";
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
    const { serie } = useFetch("tv/popular");

    return (
        <>
            <div>
                {
                    serieDetail &&

                    <div className="Content-detail-parent">
                        <div className="Content">
                            <div className="Content-img">
                                <img src={getPosterUrl(serieDetail.backdrop_path)} alt="img" />
                            </div>
                            <div className="Content-info">
                                <div>
                                    <div className="Content-name">{serieDetail.name}</div>
                                    <div className="Content-release-date">({serieDetail.first_air_date})</div>
                                    <div className="Content-overview">
                                        <h2>Overview</h2>
                                        <p>{serieDetail.overview}</p>
                                    </div>
                                    <div className="Content-vote-average">{serieDetail.vote_average}</div>
                                    <div>

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
                                    <div>

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
                                    <div>

                                        {
                                            serieCast && <>
                                                {
                                                    serieCast.map(cast => (
                                                        <div key={cast.id}>
                                                            <div>{cast.name}</div>
                                                        </div>
                                                    ))
                                                }
                                            </>
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>

            <div>

                {
                    serieDetail && <>
                        {
                            serieCast && <>
                                {
                                    serieCast.map(cast => (
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
                            <h1>Popular Tv Series</h1>
                        </div>
                        <div className="Movies">

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