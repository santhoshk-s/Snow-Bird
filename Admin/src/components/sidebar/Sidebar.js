import './sidebar.css'
import { MdOutlineLineStyle,MdOutlineTimeline,MdTrendingUp,MdOutlineSignalCellularAlt ,MdDynamicFeed} from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { FaRegUser,FaDollarSign } from "react-icons/fa";
import { FaRegCirclePlay,FaList } from "react-icons/fa6";
import { TbAlertHexagonFilled } from "react-icons/tb";
import { IoBagOutline } from "react-icons/io5";
import { FiMessageSquare } from "react-icons/fi";
import {Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className='sidebarList'>
            <Link to="/" className='link'>
            <li className="sidebarListItem active">
            <MdOutlineLineStyle className='sidebaricon'/>
            Home
            </li>
            </Link>
            <li className="sidebarListItem">
            <MdOutlineTimeline className='sidebaricon'/>
            Analytics
            </li>
            <li className="sidebarListItem">
            <MdTrendingUp className='sidebaricon'/>
            Sales
            </li>  
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className='sidebarList'>
            <Link to="/users" className="link">
            <li className="sidebarListItem ">
            <FaRegUser className='sidebaricon'/>
            Users
            </li>
            </Link>
            <Link to="/movies" className="link">
            <li className="sidebarListItem">
            <FaRegCirclePlay className='sidebaricon'/>
            Movies
            </li>
            </Link>
            <Link to="/lists" className='link'>
            <li className="sidebarListItem">
            <FaList className='sidebaricon'/>
            Lists
            </li>  
            </Link>
            <li className="sidebarListItem">
            <MdOutlineSignalCellularAlt className='sidebaricon'/>
            Reports
            </li>  
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className='sidebarList'>
            <li className="sidebarListItem ">
            <CiMail className='sidebaricon'/>
            Mail
            </li>
            <li className="sidebarListItem">
            <MdDynamicFeed className='sidebaricon'/>
            Feedback
            </li>
            <li className="sidebarListItem">
            <FiMessageSquare className='sidebaricon'/>
            Messages
            </li>  
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className='sidebarList'>
            <li className="sidebarListItem ">
            <IoBagOutline className='sidebaricon'/>
            Manage
            </li>
            <li className="sidebarListItem">
            <MdOutlineTimeline className='sidebaricon'/>
            Analytics
            </li>
            <li className="sidebarListItem">
            <TbAlertHexagonFilled className='sidebaricon'/>
            Reports
            </li>  
          </ul>
        </div>
        
      </div>
    </div>
  )
}
export default Sidebar