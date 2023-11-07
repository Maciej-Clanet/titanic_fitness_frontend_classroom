import "./Header.css"
import logo from "../../Assets/logo.png";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../AuthContext";

const NavButton = ({text, path}) =>{
    const navigate = useNavigate()

    return(
    <button className="nav-button" onClick={() => navigate(path)}>
        {text}
    </button>
    )
}

const LogoutButton = () =>{
    const navigate = useNavigate();
    const {token, setToken, setUser} = useContext(AuthContext);

    function logout(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setToken(null)
        setUser(null)
        navigate("/home")
    }

    if(token){
        return(
            <button className="nav-button" onClick={logout}>Logout</button>
        )
    }    
}

const ProfileButton = () =>{
    const navigate = useNavigate()
    const {user} = useContext(AuthContext)

    if(user){
        return(
            <button className="profile-button" onClick={() => navigate("/profile")}>
                {user.display_name[0].toUpperCase()}
            </button>
        )
    }
}

const Header = () =>{
    const {token} = useContext(AuthContext)
    return(
        <header>
            <div className="logo-container">
                <img className="logo" src={logo} alt="logo"/>
                <h1>Titanic Fitness</h1>
            </div>
            <div className="nav-buttons">
                <NavButton text="Home" path="/home"/>
                <NavButton text="Workouts" path="/workouts"/>
                <LogoutButton/>
                <ProfileButton/>
                {token === null && <NavButton text="Register" path="/Register"/>}
            </div>
        </header>
    )
}

export default Header;