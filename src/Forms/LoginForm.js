import { useState, useContext } from "react";

import { AuthContext } from "../Components/AuthContext";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const LoginForm = ({changeForm}) => {

    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const {setToken, setUser} = useContext(AuthContext);
    const [error, setError] = useState(null);

    const login = (event) => {
        event.preventDefault()
        const postData = {
            email,
            password
        }

        axios.post("http://localhost:8000/users/login", postData)
        .then((res) => {
            setUser(res.data.user)
            setToken(res.data.access_token)

            localStorage.setItem("token", res.data.token)
            localStorage.setItem("user", JSON.stringify(res.data.user))
            setError(null);
            navigate("/profile")

        }, (error) => {
            setError(error.response.data.detail)
        })

        // alert("trying to log in")
        //here I'm going to send the date to the backend login user api endpoint
    }

    return (
        <form className="auth-form" onSubmit={login}>
            <h2>LOGIN</h2>
            <p>Don't have an account? <span onClick={changeForm} className="form-switch-button">Register</span></p>

            <input type="email" placeholder="Email" value={email} required
                onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} required
                onChange={(e) => setPassword(e.target.value)}
            />
            {
                error ? <p>{error}</p> : null
            }
            <button type="submit">LOGIN</button>
        </form>
    )
}

export default LoginForm;