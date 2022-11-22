import MobileMenu from "../../assets/img/mobile-menu.svg";
import { useState } from "react";
import { Link } from "react-router-dom";


const HeaderTwo = () => {

    const [showNav, setShowNav] = useState(false);

    return (
        <div className="Header-Parent">
            <div className="Header-two">
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

            </div>
        </div>
    );
};

export default HeaderTwo;
