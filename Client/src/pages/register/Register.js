import { useNavigate } from 'react-router-dom'
import './register.scss'
import {useRef, useState} from 'react'
import axios from "axios"
import logo from "../../img/logo.png"
import { Link } from 'react-router-dom'
import bg from "../../img/background.jpg"


const Register = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const navigate = useNavigate()

    const emailRef = useRef()
    const passwordRef = useRef()
    const usernameRef = useRef()

    const handleStart = ()=>{
        setEmail(emailRef.current.value)
    }
    const handleFinish = async (e)=>{
        e.preventDefault()
        setUsername(usernameRef.current.value)
        setPassword(passwordRef.current.value)
        try{
                await axios.post("auth/register", {username,email,password})
            navigate("/login") 
 
        }catch(err){
console.log(err)
        }
        

    }
  return (
    <div className="register">
        <img src={bg} alt="bg" className="bg" />
        <div className="top">
            <div className="wrapper">
            <img className="logo" src={logo} alt="" />
            <Link to="/login"> 
            <button className="loginButton"  >Sign In</button>
            </Link>
            </div>
        </div>
        <div className="container">
            <h1>Unlimited movies, TV Shows , and more.</h1>
            <h2>Watch anywhere . Cancel anytime</h2>
            {
                !email ?(
                <div className="input">
                <input type="email" placeholder="email address" ref={emailRef}/>
                <button className="registerButton" onClick={handleStart}>Get Started</button>
                </div>
                ): <form className="input">
                <input type="username" placeholder="username" ref={usernameRef} />
                <input type="password" placeholder="Password" ref={passwordRef} />
                <button className="registerButton" onClick={handleFinish} >Start</button>
                </form>
            }
            <p>
                Ready to watch? Enter your email to create or restart your membership
            </p>
           
        </div>
    </div>
  )
}
export default Register