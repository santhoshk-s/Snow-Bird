import Charts from '../../components/chart/Charts'
import FeaturedInfo from '../../components/featuredinfo/FeaturedInfo'
import './home.css'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import { useState ,useEffect, useMemo} from "react";
import axios from 'axios'
import Sidebar from '../../components/sidebar/Sidebar'
const Home = () => {
  const MONTHS =useMemo(()=>
  [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],[]
  )
const [userStats,setUserStats]=useState([])

useEffect(()=>{
  const getStats= async ()=>{
    try{

      const res = await axios.get("/users/stats",{
        headers:
        {token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OWNkY2Y4NDQ5YWViZGExNTc1N2E1OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNjA5OTYzOCwiZXhwIjoxNzMyMDE5NjM4fQ.LRSfM3hF4xTdsTeBI0TNELt6j9NJvUWyg36TKjVtY0g"}})
        const statsList = res.data.sort(function(a,b){
          return a._id - b._id
        })
      statsList.map(item=> setUserStats(prev=>[...prev,{name:MONTHS[item._id-1],"New User":item.total}]))
    }
    catch(err){
      console.log(err)
    }
  }
getStats()
},[MONTHS])
  return (
    <>
    <Sidebar />
    <div className='home'>
      <FeaturedInfo />
      <Charts data={userStats} title={"User Analytics"} grid dataKey={"New User"}/>
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
    </>
  )
}
export default Home