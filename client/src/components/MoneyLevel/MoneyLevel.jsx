import styles from "./MoneyLevel.module.css"
import diamond from "../../images/diamond.svg"
import empty from "../../images/empty.svg"
const MoneyLevel = (props) =>{
    return (
        /* Rectangle 12 */

            props.selected===props.index?<div className={styles.levelshow} style={{"background":"radial-gradient(905.81% 4371.44% at 50% 50%, #97450A 0%, rgba(217, 217, 217, 0) 100%)"}}><p style={{"width": "7rem"}}>{props.el + " AVAX"}</p>
            <img src={diamond} height={"10rem"} alt="" />
            <p>{props.index+1}</p>
            </div>:<div className={styles.levelshow}><p style={{"width": "7rem"}}>{props.el + " AVAX"}</p>
            {
                props.index>props.selected?<img src={empty} height={"10rem"} alt="" />:<img src={diamond} height={"10rem"} alt="" />
            }
            <p>{props.index+1}</p>
            </div>
        
        
    )
}

export default MoneyLevel;