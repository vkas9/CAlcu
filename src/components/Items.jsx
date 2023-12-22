import styles from "./FoodContainer.module.css";
import { FcGoogle } from "react-icons/fc";


let Items=({foodItem})=>{
    
    
    return  <>
    <li  className={`${styles.FoodContainer} active`} > {foodItem}</li>
    <button ><FcGoogle />

</button>
    </>
}
export default Items;