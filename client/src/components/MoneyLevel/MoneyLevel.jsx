import styles from "./MoneyLevel.module.css"
const MoneyLevel = (props) =>{
    return (
        <div className={styles.levelshow}><p>{props.el + " AVAX"}</p>
                                <p>{props.index+1}</p>
                                </div>
    )
}

export default MoneyLevel;