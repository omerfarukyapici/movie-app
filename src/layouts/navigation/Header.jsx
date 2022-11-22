import { Card } from "../../components/card";
import { Link } from "react-router-dom";
import { useState } from "react";

import MobileMenu from "../../assets/img/mobile-menu.svg";
import useFetch from "../../hooks/useFetch";


const Header = () => {

    const [showNav, setShowNav] = useState(false);

    const { movie } = useFetch("movie/popular");
    const { serie } = useFetch("tv/popular");

    return (
        <div className="Header-Parent">
            <div className="Header">
                <div className="Header-rectangle"></div>
                <div className="Navbar">
                    <div className="Logo">
                        <Link to={"/"}>
                            Logo
                        </Link>
                    </div>
                    <div className="Links">
                        <div>
                            <Link to={"/serie"}>
                                Popular TV Series
                            </Link>
                        </div>
                        <div>
                            <Link to={"/movie"}>
                                Popular Movies
                            </Link>
                        </div>
                    </div>
                    {/* Mobile menu */}
                    <button className='Navbar-mobile' onClick={() => {
                        setShowNav(!showNav)
                    }}>

                        <img src={MobileMenu} alt="" />

                        {
                            showNav ?
                                <div className='Navbar-mobile-content'>
                                    <ul>
                                        <li>
                                            <Link to={"/serie"}>
                                                Popular TV Series
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/movie"}>
                                                Popular Movies
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                : null
                        }
                    </button>
                </div>

                <div>
                    <div className="App-title-mobile">
                        <h1>Welcome to the</h1>
                        <h1>World of TV Series & Movies</h1>
                    </div>
                    <div className="Movie-img-title">


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
                                    )).slice(-1)
                                }
                            </>
                        }

                        <div className="App-title">
                            <h1>Welcome to the</h1>
                            <h1>World of TV Series & Movies</h1>
                        </div>

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
                                    )).slice(0, 1)
                                }
                            </>
                        }


                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;
