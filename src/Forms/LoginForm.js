import { useState } from "react";
const LoginForm = ({changeForm}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        const postData = {
            email,
            password
        }
        alert("trying to log in")
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
            <button type="submit">Register</button>
        </form>
    )
}

export default LoginForm;