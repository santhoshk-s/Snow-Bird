import './product.css'
import { Link, useLocation} from 'react-router-dom'
import { MdOutlineFileUpload } from "react-icons/md";
import Sidebar from '../../components/sidebar/Sidebar';
const Product = () => {
  const location = useLocation()
  const movies = location.state.movies
  
  return (
    <>
    <Sidebar />
    <div className='product'>
        <div className="productTitleContainer">
            <h1 className="productTitle">Movie</h1>
            <Link to="/newproduct">
            <button className="productAddButton">Create</button>
            </Link>
        </div>
        <div className="productTop">
          <div className="productTopRight">
            <div className="productInfoTop">
              <img src={movies[0].img} className="productInfoImg" alt="sk"  />
              <span className="productName">{movies[0].title}</span>
            </div>
            <div className="productInfoBottom">
          <div className="productInfoItem">
            <span className="productInfoKey">id:</span>
            <span className="productInfoValue">{movies[0]._id}</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">genre:</span>
            <span className="productInfoValue">{movies[0].genre}</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">year:</span>
            <span className="productInfoValue">{movies[0].year}</span>
          </div>
          <div className="productInfoItem">
            <span className="productInfoKey">limit:</span>
            <span className="productInfoValue">{movies[0].limit}</span>
          </div>
            </div>
          </div>
        </div>
        <div className="productBottom">
          <form  className="productForm">
            <div className="productFormLeft">
              <label>Movie Title</label>
              <input type="text" placeholder={movies[0].title} />
              <label>Year</label>
              <input type="text"  placeholder={movies[0].year} />
              <label>Genre</label>
              <input type="text"  placeholder={movies[0].genre} />
              <label>Limit</label>
              <input type="text"  placeholder={movies[0].limit} />
              <label>Trailer</label>
              <input type="file"  placeholder={movies[0].tariler} />
              <label>Video</label>
              <input type="file"  placeholder={movies[0].video} />
            </div>
            <div className="productFormRight">
              <div className="productUpload">
                <img src={movies[0].img} alt="" className="productuploadImg" />
                <label htmlFor="file">
                <MdOutlineFileUpload />
                </label>
                <input type="file" id='file' style={{display:"none"}}/>
              </div>
              <button className="productButton">Update</button>
            </div>
          </form>
        </div>
    </div>
    </>
  )
}
export default Product