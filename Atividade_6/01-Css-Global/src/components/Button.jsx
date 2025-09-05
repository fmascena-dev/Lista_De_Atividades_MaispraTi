import "../styles/Button.css";

export default function Button({
  children,
  variant = "solid",
  loading,
  disabled,
  ...props
}) {
  return (
    <button
      className={`btn btn--${variant}${loading ? " btn--loading" : ""}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span className="btn__skeleton" aria-hidden="true" />
      ) : (
        children
      )}
    </button>
  );
}
