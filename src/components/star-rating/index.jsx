import { useState } from "react";
import { FaStar } from 'react-icons/fa';
import './style.css';


export default function StarRating(noOfStars) {
    // console.log(noOfStars.starCount);

    // Reference
    // let a=Number(noOfStars.starCount);
    // let stars=[];
    // for(let i=0;i<a;i++)
    // {
    //     stars.push(<span key={i}>&#11088;</span>);
    // }



    const [rating,setRating]=useState(0);
    const [hover,setHover]=useState(0);


    function handleClick(CurrIndex)
    {
        setRating(CurrIndex);
        
    }
    function handleMouseMove(CurrIndex)
    {
        setHover(CurrIndex);
    }
    function handleMouseLeave(CurrIndex)
    {
        // console.log(CurrIndex);
      setHover(rating);

    }


    return (
        <div className="star-rating">
            <h1>Star Rating</h1>
            {/* {noOfStars.starCount} */}


            {[...Array(noOfStars.starCount)].map((_,i)=> {
              
                i+=1
            return (<FaStar
                key={i}
                className={i <= (hover || rating)?'active':'inactive'}
                onClick={()=>handleClick(i) }
                onMouseMove ={ ()=>handleMouseMove(i)}
                onMouseLeave={ ()=>handleMouseLeave(i)}
                size={40}
            />)
            }
            )}



        </div>
    );
}