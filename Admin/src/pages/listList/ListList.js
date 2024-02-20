import './listList.css'
import {Link } from 'react-router-dom'
import { useContext, useEffect,  } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { MdOutlineDeleteOutline } from "react-icons/md";
import Sidebar from '../../components/sidebar/Sidebar';
import {ListContext} from "../../context/listContext/ListContext"
import { deleteList, getLists } from '../../context/listContext/apiCalls';

const ListList = () => {
    const {lists,dispatch} = useContext(ListContext)

    useEffect(()=>{
      getLists(dispatch)
    },[dispatch])


    const handleDelete=(id)=>{
      deleteList(id,dispatch)
      } 

const columns  = [
    { field: '_id', headerName: 'ID', width: 250 },
    { field: 'title', headerName: 'title', width: 250 },
    { field: 'genre', headerName: 'Genre', width: 150 },
    { field: 'type', headerName: 'type', width: 150 },
    {
      field:"action",
      headerName:"Action",
      width:120,
      renderCell: (params)=>{
        return (
          <>
          <Link to={{pathname:"/list/" + params.row._id ,lists:params.row,}}  state={{lists}}>
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
        rows={lists}
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
    <Link to="/newList">
            <button className="btn">Create New List</button>
            </Link>
      </div>
        </>
  )
}
export default ListList