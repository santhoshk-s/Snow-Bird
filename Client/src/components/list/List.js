import { useRef, useState } from 'react';
import ListItem from '../listitem/Listitem';
import './list.scss'
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";

const List = ({list}) => {

    const [isMoved,setIsMoved] = useState(false)
    const [slideNumber,setSlideNumber] = useState(0)
    const [clickLimit,setClickLimit] = useState(window.innerWidth/230)



    const listref = useRef()

    const handleClick =(direction)=>{
        setIsMoved(true)
        let distance = listref.current.getBoundingClientRect().x-50
        if(direction==="left" && slideNumber>0){
            setSlideNumber(slideNumber-1)
            listref.current.style.transform = `translateX(${230+distance}px)`
        }
        if(direction==="right" && slideNumber < 10 -clickLimit){
            setSlideNumber(slideNumber+1)
            listref.current.style.transform = `translateX(${-230+distance}px)`
        }
    }
  return (
    <div className='list'>
        <span className="listTitle">{list.title}</span>
        <div className="wrapper">
        <IoIosArrowBack  className='sliderArrow left' onClick={()=>handleClick("left")}
        style={{display: !isMoved && "none"}}
        />
        <div className="container" ref={listref}>
            {list.content.map((item,i)=>(
            <ListItem key={item.id} index={i} item={item}/>
            ))}
        </div>
        <IoIosArrowForward className='sliderArrow right' onClick={()=>handleClick("right")}/>

        </div>
    </div>
  )
}
export default List