import "./Register.css"
import HeroText from "../Components/HeroText/HeroText"
import LoginForm from "../Forms/LoginForm"
import RegisterForm from "../Forms/RegisterForm"

import { useState } from "react"

const Register = () => {
    const [formState, setFormState] = useState("register");
    const formChange = () =>{
        if(formState == "register"){
            setFormState("login")
        }
        else{
            setFormState("register")
        }
    }

    if (formState == "register") {
        return (
            <div>
                <HeroText headingText="SET SAIL ON YOUR WORKOUT JOURNEY">
                    Ocean of information awaits
                </HeroText>
                <RegisterForm changeForm={formChange} />
            </div>
        )
    }
    else {
        return (
            <div>
                <HeroText headingText="SET SAIL ON YOUR WORKOUT JOURNEY">
                    Ocean of information awaits
                </HeroText>
                <LoginForm changeForm={formChange}/>
            </div>
        )
    }

}

// const Register = () =>{

//     const [email, setEmail] = useState("");
//     const [displayName, setDisplayName] = useState("");
//     const [password, setPassword] = useState("");
//     const [formState, setFormState] = useState("register");

//     const modeSwitch = ()=>{
//         if(formState == "register"){
//             setFormState("login")
//         }else{
//             setFormState("register")
//         }
//     }
//     const register = () =>{
//         const postData = {
//             email,
//             displayName,
//             password
//         }
//         alert("trying to register")
//         //here I'm going to send the data to the backend register user api endpoint
//     }
//     const login = () =>{
//         const postData = {
//             email,
//             password
//         }
//         alert("trying to log in")
//         //here I'm going to send the date to the backend login user api endpoint
//     }
//     const authSubmit = (event) =>{
//         event.preventDefault();
//         if(formState == "register"){
//             register();
//         }else{
//             login();
//         }
//     }

//     return(
//         <div>
//             <HeroText headingText="SET SAIL ON YOUR WORKOUT JOURNEY">
//                 Ocean of information awaits
//             </HeroText>

//             <form className="auth-form" onSubmit={authSubmit} >
//                 <h2>{formState.toUpperCase()}</h2>
//                 {
//                     formState == "register"
//                     ? <p>Already have an account? <span onClick={modeSwitch} className="form-switch-button">Log In</span></p>
//                     : <p>Don't have an account? <span onClick={modeSwitch} className="form-switch-button">Register</span></p>
//                 }

//                 <input type="email" placeholder="Email" value={email} required 
//                 onChange={(e) => setEmail(e.target.value)} />



//                 {
//                     formState == "register" ?
//                     <input type="text" placeholder="Display Name" value={displayName} required 
//                 onChange={(e) => setDisplayName(e.target.value)} />
//                     : null
//                 }





//                <input type="password" placeholder="Password" value={password} required 
//                 onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <button type="submit">Register</button>
//             </form>



//         </div>
//     )
// }

export default Register