import style from "./FoodInput.module.css";

const FoodInput=({handleOnChange})=>{
    
    return <input type="text" placeholder="Enter food Item here"
     className={style.FoodInput} onChange={(event)=>{
        handleOnChange(event)
     }} />
}
export default FoodInput;