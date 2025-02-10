import { useEffect, useState } from "react";
import './style.css'



export default function RandomColor(){

    const [typeOf,setType]=useState('hex');
    const [color,setColor]=useState('#000000');


    function randomColor(length)
    {
        return Math.floor(Math.random()*length);
    }

    function handleRandomHexColor()
    {
        // #123456
        const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
        let hexColor="#";

        for(let i=0;i<6;i++)
        {
            hexColor+=hex[randomColor(hex.length)];
        }
        console.log(hexColor);
        setColor(hexColor);

    }

   
    function handleRandomRgbColor()
    {
        const r=randomColor(256);
        const g=randomColor(256);
        const b=randomColor(256);
        // let rgbColor='rgb('+r+','+g+','+b+')';
        let rgbColor=`rgb(${r},${g},${b})`;
        console.log(rgbColor);
        setColor(rgbColor);
    }


    // useEffect(()=>{
    //     if(typeOf==='rgb')handleRandomRgbColor();
    //     else handleRandomHexColor();


    // },[typeOf]);


    return (
        <div className="container" style={{
            width:'100vw',
            height:'100vh',
            background:color
        }}>
            <button onClick={()=>setType('hex')}>Create Hex color</button>
            <button onClick={()=>setType('rgb')}>Create RGB color</button>
            <button onClick={typeOf==='hex'?handleRandomHexColor:handleRandomRgbColor}>Create Random color</button>
            <div style={{
                display:"flex",
                justifyContent:'center',
                alignItems:"center",
                color:"white",
                fontSize:"55px",
               
                flexDirection:"column",
               

            }}>
                <h3>{typeOf==='rgb'?`RGB Color: `:`HEX color: `}</h3>
                <h3>{color}</h3>

            </div>
        </div>
    );
}