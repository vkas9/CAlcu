import FoodInput from "./FoodInput";
import Items from "./Items";
import styles from "./FoodContainer.module.css";
import { useState } from "react";
let ClockTime = () => {
    let time = new Date();
   
    let [items2,setTextState]=useState([]);
    
    
   
    const handleOnChange=(event)=>{
        if(event.key==='Enter'){
            let newItemList=[...items2,event.target.value];
            event.target.value="";
            setTextState(newItemList);

        }
        
        
    };
    return <><p>
        This is the current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}
    </p>
        <FoodInput handleOnChange={handleOnChange}/>
       
        {items2.length===0? <h2>I am Still Hungry!!!</h2>:null}
        <div className={styles.FoodContainer}>

        <ul className="list-group">{
            items2.map((item)=>(
                <Items key={item} foodItem={item}/>
                
                ))
            } 
        </ul>
            </div>
    </>
}
export default ClockTime;