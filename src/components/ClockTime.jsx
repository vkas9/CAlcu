import FoodInput from "./FoodInput";
import Items from "./Items";
import styles from "./FoodContainer.module.css";
import { useState } from "react";
let ClockTime = ({items}) => {
    let time = new Date();
   
    let [textToShow,setTextState]=useState("Food Item Entered by user",null);
    
    console.log(textToShow)
    const handleOnChange=(event)=>{
        console.log(event.target.value);
        setTextState(event.target.value);
    }
    return <><p>
        This is the current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}
    </p>
        <FoodInput handleOnChange={handleOnChange}/>
        <p>{textToShow}</p>
        {items.length==0? <h2>I am Still Hungry!!!</h2>:null}
        <div className={styles.FoodContainer}>

        <ul className="list-group">{
            items.map((item)=>(
                <Items key={item} foodItem={item}/>
                
                ))
            }
            
            
        </ul>
            </div>
    </>
}
export default ClockTime;