import styles from "./Button.module.css"
export default function Button({title,color,onClick}) {
    return(
        <button className={`${styles.btn} ${styles[color]}`} onClick={onClick}>
            {title}
        </button>
    )
}