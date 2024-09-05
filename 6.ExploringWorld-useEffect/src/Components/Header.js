import Search from "antd/es/input/Search";
import logo from "../images/logo.png"
const Header = ()=>{
    return ( <div className="header">      
        <img src={logo} alt="image" className="img" />
        
        <ul className="nav-items">
            <li className="item">Home</li>
            <li className="item">AboutUs</li>
            <li className="item">ContactUs</li>
            <li className="item">Cart</li>
        </ul>
        
    </div> )

}

export default Header;