import './login.css'
import { login } from '../../context/authContext/apiCalls'
import {useState,useContext} from 'react'
import { AuthContext } from '../../context/authContext/AuthContex'

const Login = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const {isFetching,dispatch} = useContext(AuthContext)

  const handleLogin =(e)=>{
    e.preventDefault()
    login({email,password},dispatch)
  }
  return (
    <div className="login">
        <form className="loginform">
            <input 
            type="text" 
            placeholder="email" 
            className="loginInput" 
            onChange={(e)=>setEmail(e.target.value)} />
            <input 
            type="password" 
            placeholder="password" 
            className="loginInput"
            onChange={(e)=>setPassword(e.target.value)} />
            <button className="loginB" onClick={handleLogin} disabled={isFetching} >Login</button>
        </form>
    </div>
  )
}
export default Login