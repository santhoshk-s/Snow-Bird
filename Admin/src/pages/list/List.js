import './list.css'
import { Link, useLocation} from 'react-router-dom'
import Sidebar from '../../components/sidebar/Sidebar';
const List = () => {
  const location = useLocation()
  const list = location.state.lists
  
  return (
    <>
    <Sidebar />
    <div className='product'>
        <div className="productTitleContainer">
            <h1 className="productTitle">List</h1>
            <Link to="/newList">
            <button className="productAddButton">Create</button>
            </Link>
        </div>
        <div className="productTop">
          <div className="productTopRight">
            <div className="productInfoTop">
              <span className="productName">{list[0].title}</span>
            </div>
            <div className="productInfoBottom">
          <div className="productInfoItem">
            <span className="productInfoKey">id:</span>
            <span className="productInfoValue">{list[0]._id}</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">genre:</span>
            <span className="productInfoValue">{list[0].genre}</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">type:</span>
            <span className="productInfoValue">{list[0].type}</span>
          </div>
            </div>
          </div>
        </div>
        <div className="productBottom">
          <form  className="productForm">
            <div className="productFormLeft">
              <label>List Title</label>
              <input type="text" placeholder={list[0].title} />
              <label>Type</label>
              <input type="text"  placeholder={list[0].type} />
              <label>Genre</label>
              <input type="text"  placeholder={list[0].genre} />
            </div>
            <div className="productFormRight">
              <button className="productButton">Update</button>
            </div>
          </form>
        </div>
    </div>
    </>
  )
}
export default List