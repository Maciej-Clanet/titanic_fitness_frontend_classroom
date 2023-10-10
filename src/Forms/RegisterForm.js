import { useState } from "react";
const RegisterForm = ({changeForm}) => {

    const [email, setEmail] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [password, setPassword] = useState("");

    const register = () => {
        const postData = {
            email,
            displayName,
            password
        }
        alert("trying to register in")
        //here I'm going to send the date to the backend login user api endpoint
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
            <button type="submit">Register</button>
        </form>
    )
}

export default RegisterForm;