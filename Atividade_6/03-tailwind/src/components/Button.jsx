export default function Button({
  children,
  variant = "solid",
  loading,
  disabled,
  className = "",
  ...props
}) {
  const baseClasses = "px-4 py-2 rounded-lg font-bold cursor-pointer transition-all duration-200 relative focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 disabled:opacity-70 disabled:cursor-not-allowed active:scale-[0.98]";
  
  const variantClasses = {
    solid: "bg-blue-500 text-white hover:bg-blue-600 disabled:hover:bg-blue-500",
    outline: "bg-transparent border-2 border-blue-500 text-red-500 hover:bg-blue-500 hover:text-white disabled:hover:bg-transparent disabled:hover:text-blue-500",
    ghost: "bg-red-500 text-gray-500 dark:text-white hover:bg-gray-100 dark:hover:bg-red-800 disabled:hover:bg-transparent"
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <span 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-0.5 button-loading"
          aria-hidden="true" 
        />
      ) : (
        children
      )}
    </button>
  );
}