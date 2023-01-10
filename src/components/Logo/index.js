import logo from "../../images/logo.svg";
import {Link} from "react-router-dom";

const Logo = () => {

    return (
        <Link to="/" className="cursor-pointer">
        <div className="cursor-pointer">
            <img src={logo} alt={"Logo"} />
        </div>
        </Link>
    );
}

export default Logo;
