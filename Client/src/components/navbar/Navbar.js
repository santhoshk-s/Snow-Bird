import { useContext, useState } from 'react';
import './navbar.scss'
import { FaSearch,FaBell ,FaCaretDown} from "react-icons/fa";
import { Link } from 'react-router-dom';
import {logout} from "../../authContext/AuthActions"
import { AuthContext } from '../../authContext/AuthContex';
import logo from "../../img/logo.png"


const Navbar = () => {

    const [isScrolled,setIsScrolled] = useState(false)

    const {dispatch}= useContext(AuthContext)
    window.onscroll=()=>{
        setIsScrolled(window.pageYOffset===0 ?false:true);
        return()=>window.onscroll=null
    }


  return (
    <div className={isScrolled ?"navbar scrolled":"navbar"}>
        <div className="container">
            <div className="left">
                <img src={logo}  />
               <Link to="/" className='link'>
                <span>Homepage</span>
               </Link>
                <Link  to='/series' className='link'>
                <span  className='navbarMainLinks'>Series</span>
                </Link>
                <Link to="/movies" className='link'>
                <span  className='navbarMainLinks'>Movies</span>
                </Link>
                <span>New and popular</span>
                <span>My list</span>
            </div>
            <div className="right">
            <FaSearch  className='icon'/>
            <span>KID</span>
            <FaBell className='icon' />
            <img src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
            <div className="profile">
                <FaCaretDown className='icon' />
                <div className="options">
                    <span>Settings</span>
                    <span onClick={()=>dispatch(logout())}>Logout</span>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
export default Navbar