import styles from "./FoodContainer.module.css";
let Items=({foodItem})=>{
    
    
    return  <>
    <li  className={styles.FoodContainer}> {foodItem}</li>
    <button >Buy</button>
    </>
}
export default Items;