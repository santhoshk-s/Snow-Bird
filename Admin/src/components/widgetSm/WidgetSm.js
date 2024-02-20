import { useEffect, useState } from 'react';
import './widgetSm.css'
import { MdVisibility } from "react-icons/md";
import axios from 'axios'


const WidgetSm = () => {
    const [newUsers, setNewUsers]= useState([])

    useEffect(()=>{
        const getNewUsers = async()=>{
            try{
                const res = await axios.get("/users?new=true", {
                headers:
                {
                    token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OWNkY2Y4NDQ5YWViZGExNTc1N2E1OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNjA5OTYzOCwiZXhwIjoxNzMyMDE5NjM4fQ.LRSfM3hF4xTdsTeBI0TNELt6j9NJvUWyg36TKjVtY0g"}
                })
                setNewUsers(res.data)
            }
            catch(err){
                console.log(err)
            }
        }
        getNewUsers()
    },[])
  return (
    <div className="widgetSm">
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetsmlist">
            {newUsers.map((user)=>(
                <li className="widgetSmListItem" key={user._id}>
                <img src={user.profilePic || "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg"} alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">{user.username}</span>
                </div>
                <button className="widgetSmBtn">
                <MdVisibility className="widgetSmIcon" />
                Display
                </button> 
            </li>
        ))}
        </ul>
    </div>
  )
}
export default WidgetSm