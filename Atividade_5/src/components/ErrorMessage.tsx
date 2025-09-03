interface ErrorMessageProps {
  message?: string;
  onRetry?: () => void;
  className?: string;
}

export const ErrorMessage = ({ 
  message = 'Algo deu errado. Tente novamente.', 
  onRetry,
  className = ''
}: ErrorMessageProps) => {
  return (
    <div className={`
      flex flex-col items-center justify-center p-8 text-center
      bg-red-50 border border-red-200 rounded-lg
      ${className}
    `}>
      <div className="text-red-600 text-6xl mb-4">⚠️</div>
      <h3 className="text-lg font-semibold text-red-800 mb-2">Erro</h3>
      <p className="text-red-600 mb-4">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="
            px-4 py-2 bg-red-600 text-white rounded-lg
            hover:bg-red-700 transition-colors
            focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2
          "
        >
          Tentar novamente
        </button>
      )}
    </div>
  );
};