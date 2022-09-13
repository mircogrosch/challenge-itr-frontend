import styles from "../styles/Button.module.css"
export default function Button({title,color,onClick}) {
    return(
        <button className={`${styles.btn} ${styles[color]}`} onClick={onClick}>
            {title}
        </button>
    )
}