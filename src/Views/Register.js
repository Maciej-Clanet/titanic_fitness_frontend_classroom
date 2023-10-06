import "./Register.css"
import HeroText from "../Components/HeroText/HeroText"

import {useState} from "react"

const Register = () =>{

    const [email, setEmail] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [password, setPassword] = useState("");
    const [formState, setFormState] = useState("register");

                                            const modeSwitch = ()=>{
                                                if(formState == "register"){
                                                    setFormState("login")
                                                }else{
                                                    setFormState("register")
                                                }
                                            }

    return(
        <div>
            <HeroText headingText="SET SAIL ON YOUR WORKOUT JOURNEY">
                Ocean of information awaits
            </HeroText>

            <form className="auth-form">
                <h2>{formState.toUpperCase()}</h2>
                {
                    formState == "register"
                    ? <p>Already have an account? <span onClick={modeSwitch} className="form-switch-button">Log In</span></p>
                    : <p>Don't have an account? <span onClick={modeSwitch} className="form-switch-button">Register</span></p>
                }
     
                <input type="email" placeholder="Email" value={email} required 
                onChange={(e) => setEmail(e.target.value)} />
                
                

                {
                    formState == "register" ?
                    <input type="text" placeholder="Display Name" value={displayName} required 
                onChange={(e) => setDisplayName(e.target.value)} />
                    : null
                }
                
               



               <input type="password" placeholder="Password" value={password} required 
                onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Register</button>
            </form>

            

        </div>
    )
}

export default Register