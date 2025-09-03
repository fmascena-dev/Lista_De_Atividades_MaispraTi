interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export const Pagination = ({ 
  currentPage, 
  totalPages, 
  onPageChange, 
  className = '' 
}: PaginationProps) => {
  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (let i = Math.max(2, currentPage - delta); 
         i <= Math.min(totalPages - 1, currentPage + delta); 
         i++) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else {
      if (totalPages > 1) {
        rangeWithDots.push(totalPages);
      }
    }

    return rangeWithDots;
  };

  if (totalPages <= 1) return null;

  return (
    <div className={`flex justify-center items-center space-x-2 ${className}`}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="
          px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 
          rounded-l-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer
        "
      >
        Anterior
      </button>

      {getVisiblePages().map((page, index) => (
        <div key={index}>
          {page === '...' ? (
            <span className="px-3 py-2 text-sm font-medium text-gray-700">...</span>
          ) : (
            <button
              onClick={() => onPageChange(page as number)}
              className={`
                px-3 py-2 text-sm font-medium border cursor-pointer
                ${currentPage === page
                  ? 'z-10 bg-blue-200 border-blue-500 text-blue-600'
                  : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-300'
                }
              `}
            >
              {page}
            </button>
          )}
        </div>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="
          px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 
          rounded-r-md hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer
        "
      >
        Próxima
      </button>
    </div>
  );
};