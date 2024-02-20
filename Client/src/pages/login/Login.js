import { useContext, useState } from 'react'
import './login.scss'
import { login } from '../../authContext/apiCalls'
import { AuthContext } from '../../authContext/AuthContex'
import bg from "../../img/background.jpg"
import logo from "../../img/logo.png"



const Login = () => {
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const {dispatch} = useContext(AuthContext)

  const handleLogin= (e)=>{
    e.preventDefault()
    login({email,password},dispatch)

  }
  return (
    <div className="login">
      <img src={bg} className='bg' />
        <div className="top">
            <div className="wrapper">

            <img className="logo" src={logo}  />

            </div>
        </div>
        <div className="container">
           <form action="" >
            <h1>Sign In</h1>
            <input type="email" placeholder='Email or phone number' onChange={(e)=>{
              setEmail(e.target.value)
            }} />
            <input type="password" placeholder='password' onChange={(e)=>{setPassword(e.target.value)}}/>
            <button className="loginButton" onClick={handleLogin}>Sign In</button>
            <span>New to SnowBird? <b>Sign up now.</b></span>
            <small>This page is protected by Google reCAPTHA to ensure you're not a bot.<b>Learn More.
                </b></small>
           </form>
           
        </div>
    </div>
  )
}
export default Login