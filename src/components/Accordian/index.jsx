// Accordian 2 types
// Single selection
// multi selection
import './style.css'
import { useState } from "react";
import data from "./data";

export default function Accordian(){

    const [selected,setSelected]=useState(null);
    
    const[enablemultiSelection,setMultiSelection]=useState(false);

    const [multiple,setMultiple]=useState([]);



    function handleSinleSelection(CurrentId)
    {
        console.log(CurrentId);
        setSelected(CurrentId);

        if(selected==CurrentId)
        {
            setSelected(null);
        }
    }

    function handleMultipleSelection(CurrentId){
        let cpyMultiple=[...multiple];
        const findIndex=cpyMultiple.indexOf(CurrentId);
        if(findIndex==-1)
        {
            cpyMultiple.push(CurrentId);
        }
        else{
            cpyMultiple.splice(findIndex,1);
        }
        setMultiple(cpyMultiple);
        
    }
    
    console.log(selected,multiple);


    return <div className="wrapper">

            <button  onClick={()=>setMultiSelection(!enablemultiSelection)}  className='mutli'>Enable Multi Selection</button>

            <div className="accordian" > 
                {data && data.length > 0 ?(data.map((dataItem)=> <div className="item">

                    <div onClick={enablemultiSelection?()=>handleMultipleSelection(dataItem.id):()=>handleSinleSelection(dataItem.id)} className="title">
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                    </div> 

                    {
                        enablemultiSelection?
                        multiple.indexOf(dataItem.id)!==-1 &&(<div className="content"> {dataItem.answer}</div>)
                        :
                        selected===dataItem.id && (<div className="content"> {dataItem.answer}</div>)

                    }
                    {
                        // selected===dataItem.id || multiple.indexOf(dataItem.id)!==-1?
                        // <div className="content">
                        //     {dataItem.answer}
                        // </div>:null
                    }

                </div>
                )):<div>No Data Found!</div>

                }  
            </div>
        </div>
    

}