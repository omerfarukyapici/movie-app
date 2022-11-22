import { Link } from "react-router-dom";
import { getPosterUrl } from "../utils";

export const Card = ({ MovieTitle, MovieRank, posterPath, Movie, Type }) => {
    return (
        <div className="Card-parent">
            <div className="Img-popularity">{MovieRank} / 10</div>
            <Link to={`/${Type}/${Movie}`} >
                <div className="Img-parent">
                    <img className="Img-movie" src={getPosterUrl(posterPath)} alt="" />
                    <div className="Img-title">{MovieTitle}</div>
                </div>
            </Link>
        </div >
    )
};
