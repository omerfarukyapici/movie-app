import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="Footer-parent">
            <div className="Footer">
                <div className="Footer-name">
                    <Link to={"/"}>
                        Ömer Faruk Yapıcı
                    </Link>
                </div>
                <div className="Footer-links">
                    <a href="https://www.linkedin.com/in/%C3%B6mer-faruk-yap%C4%B1c%C4%B1-57b5b11b6/">Linkedin</a>
                    <a href="https://github.com/omerfarukyapici">Github</a>
                </div>
            </div>
        </div>
    )
};

export default Footer;
