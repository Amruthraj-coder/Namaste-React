import Search from "antd/es/input/Search";
import logo from "../images/logo.png"
import { Link } from "react-router-dom";
const Header = ()=>{
    return ( <div className="header">      
        <img src={logo} alt="image" className="img" />
        
        <ul className="nav-items">
            <li className="item"><Link to="/">home</Link></li>
            <li className="item"><Link to="/about">AboutUs</Link></li>
            <li className="item"><Link to="/contact">Contact</Link></li>
            <li className="item">Cart</li>
        </ul>
        
    </div> )

}

export default Header;