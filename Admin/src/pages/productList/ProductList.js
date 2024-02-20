import './productlist.css'
import {Link } from 'react-router-dom'
import { useContext, useEffect,  } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { MdOutlineDeleteOutline } from "react-icons/md";
import Sidebar from '../../components/sidebar/Sidebar';
import {MovieContext} from "../../context/movieContext/MovieContext"
import { deleteMovie, getMovies } from '../../context/movieContext/apiCalls';

const ProductList = () => {
    const {movies,dispatch} = useContext(MovieContext)

    useEffect(()=>{
      getMovies(dispatch)
    },[dispatch])


    const handleDelete=(id)=>{
      deleteMovie(id,dispatch)
      } 
const columns  = [
    { field: '_id', headerName: 'ID', width: 90 },
    { field: 'movie', headerName: 'Movie', width: 200, 
    renderCell:(params)=>{
      return (
        <div className="productListItem">
          <img className='productListImg' src={params.row.img} alt="" />
          {params.row.title}
        </div>
      )
    } },
    { field: 'genre', headerName: 'Genre', width: 120 },
    { field: 'year', headerName: 'year', width: 120 },
    { field: 'limit', headerName: 'limit', width: 120 },
    { field: 'isSeries', headerName: 'isSeries', width: 120 },
    {
      field:"action",
      headerName:"Action",
      width:120,
      renderCell: (params)=>{
        return (
          <>
          <Link to={{pathname:"/product/" + params.row._id ,movie:params.row,}}  state={{movies,key:params.row._id}}>
          <button className='productListEdit' >{"Edit"}</button>
          </Link>
          <MdOutlineDeleteOutline className='productListDelete' onClick={()=>handleDelete(params.row._id)}/>
         
          </>
          
        )
      }
    }
  ];

  return (
    <>
    <Sidebar/>
    <div className="productList">
        <DataGrid
        rows={movies}
        columns={columns}
        disableRowSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        getRowId={(r)=>r._id}
        />
    </div>
    <div >
          <Link to="/newproduct">
            <button className="btn">Create Movie</button>
            </Link>
          </div>
        </>
  )
}
export default ProductList