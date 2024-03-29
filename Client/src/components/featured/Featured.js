import './featured.scss'
import { FaPlay } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useEffect, useState } from 'react';
import axios from 'axios';


const Featured = ({type,setGenre}) => {
    const [content,setContent]=useState({})

    useEffect(()=>{
        const getRandomContent= async()=>{
            try{
                const res= await axios.get(`/movies/random?type=${type}`,{
                    headers:{
                    token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OWNkY2Y4NDQ5YWViZGExNTc1N2E1OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNjA5OTYzOCwiZXhwIjoxNzMyMDE5NjM4fQ.LRSfM3hF4xTdsTeBI0TNELt6j9NJvUWyg36TKjVtY0g"
                  }})
                setContent(res.data[0])
            }catch(err){
                console.log(err)
            }
        }
getRandomContent()
    },[type])
  return (
    <div className='featured'>
        {type && (
            <div className="category">
                <span>{type==="movie"?"Movies":"Series"}</span>
                <select name="genre" id="genre" onChange={(e)=>setGenre(e.target.value)}>
                    <option >Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>

                </select>
            </div>
        )}
        <img src={content.img} alt="" />
        <div className="info">
            <img src={content.imgTitle}
            alt="" />
            <span className='desc'>{content.desc}</span>
            <div className="buttons">
                <button className="play">
                <FaPlay />
                <span>play</span>
                </button>
                <button className="more">
                <IoMdInformationCircleOutline />
                <span>Info</span>
                </button>
            </div>
        </div>
    </div>
  )
}
export default Featured