import styles from "../styles/Button.module.css"
export default function Button({title,color}) {
    return(
        <button className={`${styles.btn} ${styles[color]}`}>
            {title}
        </button>
    )
}