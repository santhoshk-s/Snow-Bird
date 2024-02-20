import './listitem.scss'
import { FaPlay } from "react-icons/fa6";
import { IoAdd } from "react-icons/io5";
import { BiLike ,BiDislike} from "react-icons/bi";
import { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';


const Listitem = ({index,item}) => {

  const [isHovered, setIsHovered]= useState(false)
  const [movie, setMovie]= useState({})

  useEffect(()=>{
    const getMovie = async()=>{
      try{
        const res = await axios.get("/movies/find/"+item ,{
          headers:{
          token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OWNkY2Y4NDQ5YWViZGExNTc1N2E1OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNjA5OTYzOCwiZXhwIjoxNzMyMDE5NjM4fQ.LRSfM3hF4xTdsTeBI0TNELt6j9NJvUWyg36TKjVtY0g"
        }})
        setMovie(res.data)
      }catch(err){
        console.log(err)
      }
    }
    getMovie()
  },[item])



  return (
    <Link to={{pathname:"/watch" , movie:movie}} state={{movie}} > 
    
    <div className='listitem'
    style={{left:isHovered && index *225-50 +index*2.5}}
     onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
      
      <img src={movie.img} alt="" />
      {isHovered &&(
      <>
        <video src={movie.trailer} autoPlay={true} loop/>
        <div className="itemInfo">
        <div className="icons">
        <FaPlay className='icon'/>
        <IoAdd className='icon'/>
        <BiLike className='icon'/>
        <BiDislike className='icon'/>
        </div>
        <div className="itemInfoTop">
          <span>{movie.duration}</span>
          <span className='limit'>+{movie.limit}</span>
          <span>{movie.year}</span>
        </div>
        <div className="desc">{movie.desc} </div>
      <div className="genre">{movie.genre}</div>
      </div>
      </>
        )}
    </div>
    </Link>
  )
}
export default Listitem