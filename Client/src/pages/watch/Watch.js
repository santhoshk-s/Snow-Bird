import './watch.scss'
import { IoArrowBack } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';


const Watch = () => {
  const location =useLocation()
  const movie = location.state.movie
  return (
    <div className='watch'>
      <Link to='/'>
        <div className="back">
        <IoArrowBack />
        Home
        </div>
      </Link> 
        <video src={movie.video} className='video'  autoPlay progress={true.toString()} controls ></video>
    </div>
 
  )
}
export default Watch