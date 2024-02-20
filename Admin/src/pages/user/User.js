import './user.css'
import { MdOutlinePersonOutline,MdLocationPin ,MdOutlineFileUpload} from "react-icons/md";
import { FaRegCalendar,FaMobileAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import {Link } from 'react-router-dom'
import Sidebar from '../../components/sidebar/Sidebar';


const User = () => {
  return (
    <>
    <Sidebar />
    <div className='user'>
        <div className="userTitleContainer">
            <h1 className='userTitle'>Edit User</h1>
            <Link to="/newUser">
            <button className="userAddButton">Create</button>
            </Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <img src="https://w0.peakpx.com/wallpaper/794/29/HD-wallpaper-best-whatsapp-dp-boy-walking-alone-birds.jpg" alt="sk" className="userShowImg" />
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">John Wick</span>
                        <span className="userShowUserTitle">software engineer</span>
                    </div>
                </div>
                <div className="userShowBottom">
                    <span className="userShowTitle">
                        Account Details
                    </span>
                    <div className="userShowInfo">
                    <MdOutlinePersonOutline className='userShowIcon'/>
                    <span className="userShowInfoTitle">Captain America99</span>
                    </div>
                    <div className="userShowInfo">
                    <FaRegCalendar className='userShowIcon'/>
                    <span className="userShowInfoTitle">10.12.1999</span>
                    </div>
                    <span className="userShowTitle">
                        Contact Details
                    </span>
                    <div className="userShowInfo">
                    <FaMobileAlt className='userShowIcon'/>
                    <span className="userShowInfoTitle">9876543210</span>
                    </div>
                    <div className="userShowInfo">
                    <CiMail className='userShowIcon'/>
                    <span className="userShowInfoTitle">Captainamerica@gmail.com</span>
                    </div>
                    <div className="userShowInfo">
                    <MdLocationPin className='userShowIcon'/>
                    <span className="userShowInfoTitle">Mars / USA</span>
                    </div>
                </div>
            </div>
            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form  className="userUpdateForm">
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>User Name</label>
                            <input type="text" placeholder='captain america99' className='userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label>Full Name</label>
                            <input type="text" placeholder='John Wick' className='userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label>Email</label>
                            <input type="text" placeholder='Captainamerica@gmail.com' className='userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label>Phone</label>
                            <input type="text" placeholder='9876543210' className='userUpdateInput' />
                        </div>
                        <div className="userUpdateItem">
                            <label>Address</label>
                            <input type="text" placeholder='Mars / USA' className='userUpdateInput' />
                        </div>
                    </div>
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img src="https://instacaptionsforall.in/wp-content/uploads/2023/11/85-1-1024x1024.jpg" className='userUpdateImg' alt="sk" />
                            <label style={{cursor:"pointer"}} htmlFor="file"><MdOutlineFileUpload className='userUpdateIcon'/></label>
                            <input type="file" id='file' style={{display:"none"}}/>
                        </div>
                        <button className="userUpdateBtn">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}
export default User