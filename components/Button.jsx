import styles from "../styles/Button.module.css"
export default function Button({title}) {
    return(
        <button className={styles.btn}>
            {title}
        </button>
    )
}