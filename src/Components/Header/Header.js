import "./Header.css"
import logo from "../../Assets/logo.png";
import { useNavigate } from "react-router-dom";

const NavButton = ({text, path}) =>{
    const navigate = useNavigate()

    return(
    <button className="nav-button" onClick={() => navigate(path)}>
        {text}
    </button>
    )
}

const Header = () =>{
    return(
        <header>
            <div className="logo-container">
                <img className="logo" src={logo} alt="logo"/>
                <h1>Titanic Fitness</h1>
            </div>
            <div className="nav-buttons">
                <NavButton text="Home" path="/home"/>
                <NavButton text="Workouts" path="/workouts"/>
                <NavButton text="Register" path="/Register"/>
            </div>
        </header>
    )
}

export default Header;