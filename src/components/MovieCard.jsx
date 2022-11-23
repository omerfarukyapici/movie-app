import { Link } from "react-router-dom";
import { getPosterUrl } from "../utils";

export const MovieCard = ({ MovieTitle, MovieRank, posterPath, Movie, Type, RankStyle }) => {
    return (
        <div className="Card-parent">
            <div className={RankStyle}>{MovieRank} / 10</div>
            <Link to={`/${Type}/${Movie}`} >
                <div className="Img-parent">
                    <img className="Img-movie" src={getPosterUrl(posterPath)} alt="" />
                    <div className="Img-title">{MovieTitle}</div>
                </div>
            </Link>
        </div >
    )
};
