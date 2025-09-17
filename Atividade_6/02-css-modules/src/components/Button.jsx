import styles from "../styles/Button.module.css";

export default function Button({
  children,
  variant = "solid",
  loading,
  disabled,
  ...props
}) {
  return (
    <button
      className={`${styles.btn} ${styles[variant]} ${loading ? styles.loading : ""}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className={styles.skeleton} aria-hidden="true" />
      ) : (
        children
      )}
    </button>
  );
}
