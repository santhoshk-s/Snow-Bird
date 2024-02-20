import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../../components/sidebar/Sidebar'
import './newList.css'
/* import storage from "../../firebase" */
import {  getMovies } from '../../context/movieContext/apiCalls'
import {MovieContext} from "../../context/movieContext/MovieContext"
import {ListContext} from "../../context/listContext/ListContext"
import { createList } from '../../context/listContext/apiCalls'

const NewList = () => {
 
    const [list,setList] = useState(null)
    const navigate = useNavigate()


    const {dispatch} = useContext(ListContext)
    const {movies,dispatch: dispatchMovie} = useContext(MovieContext)

    useEffect(()=>{
        getMovies(dispatchMovie)
    },[dispatchMovie])
   
const handleChange=(e)=>{
    const value = e.target.value
    setList({...list,[e.target.name]:value})
}

const handlleSelect= (e)=>{
    let value = Array.from(e.target.selectedOptions, (option)=>option.value)
    setList({...list, [e.target.name]:value})
}


const handleSubmit=(e)=>{
    e.preventDefault()
    createList(list, dispatch)
    navigate("/lists")
}

const multiple = true

  return (
    <>
    <Sidebar /> 
    <div className="newproduct">
        <h1 className="addProductTitle">New List</h1>
        <form  className="addProductform">
            <div className="formLeft">

           
            <div className="addProductItem">
                <label>Title</label>
                <input type="text" placeholder="Popular Movies" name='title' onChange={handleChange} />
            </div>
            <div className="addProductItem">
                <label>Genre</label>
                <input type="text" placeholder="Action" name='genre' onChange={handleChange}/>
            </div>

            <div className="addProductItem">
                <label>type</label>
                <select name="type"onChange={handleChange}>
                    <option>Type</option>
                    <option value="movie">Movie</option>
                    <option value="series">Series</option>
                </select>
            </div>
            </div>
            <div className="formRight">


            <div className="addProductItem">
                <label>Content</label>
                <select  name="content" multiple={true} onChange={handlleSelect} style={{height:"300px"}}>
                   {movies.map((movie)=>(
                       <option key={movie._id} value={movie._id}>{movie.title}</option>
                       ))}
                </select>
            </div>
                       </div>
            
                <button className="addProductButton" onClick={handleSubmit}>Create</button>
              
        </form>
    </div>
    </>
  )
}
export default NewList