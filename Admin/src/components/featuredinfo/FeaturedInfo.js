import './featuredinfo.css'
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const FeaturedInfo = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">Revanue</span>
            <div className="fetauredMoneyContainer">
                <span className="featuredMoney">$2,300</span>
                <span className="featuredMoneyRate">-10.4<FaArrowDown className='featuredIcon negative' /></span>
            </div>
            <span className="featuredSub">Compared to last Month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="fetauredMoneyContainer">
                <span className="featuredMoney">$3,300</span>
                <span className="featuredMoneyRate">-10.4<FaArrowDown className='featuredIcon negative' /></span>
            </div>
            <span className="featuredSub">Compared to last Month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="fetauredMoneyContainer">
                <span className="featuredMoney">$2,456</span>
                <span className="featuredMoneyRate">+3.4<FaArrowUp className='featuredIcon'/></span>
            </div>
            <span className="featuredSub">Compared to last Month</span>
        </div>
    </div>
  )
}
export default FeaturedInfo