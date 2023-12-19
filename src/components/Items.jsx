import styles from "./FoodContainer.module.css";
let Items=({foodItem})=>{
    
    
    return  <>
    <li  className={`${styles.FoodContainer} active`} > {foodItem}</li>
    <button >Delete</button>
    </>
}
export default Items;