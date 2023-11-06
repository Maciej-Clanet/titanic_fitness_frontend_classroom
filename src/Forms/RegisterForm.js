import { useState, useContext } from "react";
import { AuthContext } from "../Components/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterForm = ({changeForm}) => {
    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [password, setPassword] = useState("");

    const {setUser, setToken} = useContext(AuthContext);
    const [error, setError] = useState(null);

    const register = (event) => {
        event.preventDefault();

        const postData = {
            email,
            display_name: displayName,
            password
        }

        axios.post("http://localhost:8000/users/register", postData)
        .then((res) => {
            setUser(res.data.user)
            setToken(res.data.access_token)

            localStorage.setItem("token", res.data.access_token)
            localStorage.setItem("user", JSON.stringify(res.data.user))
            setError(null);
            navigate("/profile")

        }, (error) => {
            setError(error.response.data.detail)
        })

    }

    return (
        <form className="auth-form" onSubmit={register}>
            <h2>REGISTER</h2>
            <p>Already have an account? <span onClick={changeForm} className="form-switch-button">Log In</span></p>

            <input type="email" placeholder="Email" value={email} required
                onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="Display Name" value={displayName} required 
                onChange={(e) => setDisplayName(e.target.value)} />
            <input type="password" placeholder="Password" value={password} required
                onChange={(e) => setPassword(e.target.value)}
            />
            {
                error ? <p>{error}</p> : null
            }
            <button type="submit">REGISTER</button>
        </form>
    )
}

export default RegisterForm;