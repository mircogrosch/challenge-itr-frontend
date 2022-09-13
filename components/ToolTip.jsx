import styles from "../styles/ToolTip.module.css";

export default function ToolTip({ children, title }) {
  return (
    <div className={styles.container}>
      {children}
      <span className={`${styles.tooltip} ${styles[title]}`}>{title}</span>
    </div>
  );
}
