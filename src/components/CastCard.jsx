import { getPosterUrl } from "../utils"

export const CastCard = ({posterPath, original_name, character}) => {
    return (
        <div className="Cast-card">
            <img src={getPosterUrl(posterPath)} alt="" />
            <div className="Cast-info">
                <h2>{original_name}</h2>
                <h3>{character}</h3>
            </div>
        </div>
    )
}