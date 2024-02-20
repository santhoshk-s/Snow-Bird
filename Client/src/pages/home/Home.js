import { useEffect, useState } from 'react';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import Navbar from '../../components/navbar/Navbar';
import './home.scss'
import axios from 'axios'

const Home = ({type}) => {
  const [lists,setLists] = useState([])
  const [genre,setGenre] = useState(null)

  useEffect(()=>{
    const getRandomLists = async ()=>{
      try{
        const res= await axios.get(
          `lists ${type ? "?type=" + type:""}${genre ? "&genre="+genre:""}`,
          {headers:{
          token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OWNkY2Y4NDQ5YWViZGExNTc1N2E1OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNjA5OTYzOCwiZXhwIjoxNzMyMDE5NjM4fQ.LRSfM3hF4xTdsTeBI0TNELt6j9NJvUWyg36TKjVtY0g"
        }}
        )
        setLists(res.data)
      }catch(err){
        console.log(err)
      }
    }
    getRandomLists()
  },[type,genre])
  return (
    <div className="home">

         <Navbar />
         <Featured type={type} setGenre={setGenre} />
         {lists.map((list)=>(
         <List list={list}/>
         ))}

    </div>
  )
}
export default Home