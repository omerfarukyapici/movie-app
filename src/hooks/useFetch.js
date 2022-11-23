import { useState, useEffect } from "react";
import { Api } from "../data";

export default function useFetch(url) {

    const [movie, setMovie] = useState(null);
    const [serie, setSerie] = useState(null);

    const [movieDetail, setMovieDetail] = useState(null);
    const [serieDetail, setSerieDetail] = useState(null);

    const [movieGenre, setMovieGenre] = useState(null);
    const [serieGenre, setSerieGenre] = useState(null);

    const [movieCompanie, setMovieCompanie] = useState(null);
    const [serieCompanie, setSerieCompanie] = useState(null);

    const [movieCast, setMovieCast] = useState(null);
    const [serieCast, setSerieCast] = useState(null);

    const [movieSimilar, setMovieSimilar] = useState(null);
    const [serieSimilar, setSerieSimilar] = useState(null);

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        (
            async function () {
                try {
                    setLoading(true)
                    const res = await Api().get(url);
                    const data = await res.data;

                    setMovie(data.results);
                    setSerie(data.results);

                    setMovieDetail(data);
                    setSerieDetail(data);

                    setMovieGenre(data.genres);
                    setSerieGenre(data.genres);

                    setMovieCompanie(data.production_companies);
                    setSerieCompanie(data.production_companies);

                    setMovieCast(data.cast);
                    setSerieCast(data.cast);

                    setMovieSimilar(data.results)
                    setSerieSimilar(data.results)

                } catch (err) {
                    setError(err)
                } finally {
                    setLoading(false)
                }
            }
        )()
    }, [url])

    return {
        movie,
        serie,
        movieDetail,
        serieDetail,

        movieGenre,
        serieGenre,

        movieCompanie,
        serieCompanie,

        movieCast,
        serieCast,

        movieSimilar,
        serieSimilar,

        error,
        loading
    }
}
