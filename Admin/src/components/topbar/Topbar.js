import './topbar.css'
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaGlobe } from "react-icons/fa6";
import { TbSettingsFilled } from "react-icons/tb";

const Topbar = () => {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft"> 
                <span className="logo">BirdAdmin</span>
            </div>
            <div className="topRight">
              <div className="topbarIconContainer">
              <IoMdNotificationsOutline className='logo1' />
              <span className="topIconBadge">2</span>
              </div>
              <div className="topbarIconContainer">
              <FaGlobe  className='logo1'  />
              <span className="topIconBadge">2</span>
              </div>
              <div className="topbarIconContainer">
              <TbSettingsFilled className='logo1' />
              </div>
              <img src="https://preview.redd.it/tried-generating-a-realistic-recreation-of-kakashi-naruto-v0-fcejvxlyrifa1.png?width=1024&format=png&auto=webp&s=b070f20c3e1b41c899bd8dc4a1024ff31ee29000" alt="" className='topAvatar'/>
            </div>
        </div>
    </div>
  )
}
export default Topbar