import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { tmdbService } from '../services/tmdb';
import type { Movie } from '../types/movie';
import { MovieCard } from '../components/MovieCard';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ErrorMessage } from '../components/ErrorMessage';
import { Pagination } from '../components/Pagination';

export const SearchPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  
  const navigate = useNavigate();

  const searchMovies = async (searchQuery: string, page: number = 1) => {
    if (!searchQuery.trim()) return;
    
    setLoading(true);
    setError(null);
    setHasSearched(true);
    
    try {
      const response = await tmdbService.searchMovies(searchQuery, page);
      setMovies(response.results);
      setTotalPages(Math.min(response.total_pages, 500));
      setCurrentPage(page);
    } catch (err) {
      setError('Erro ao buscar filmes. Tente novamente.');
      console.error('Search error:', err);
    } finally {
      setLoading(false);
    }
  };

  const loadPopularMovies = async (page: number = 1) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await tmdbService.getPopularMovies(page);
      setMovies(response.results);
      setTotalPages(Math.min(response.total_pages, 500));
      setCurrentPage(page);
      setHasSearched(false);
    } catch (err) {
      setError('Erro ao carregar filmes populares. Tente novamente.');
      console.error('Popular movies error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPopularMovies();
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      searchMovies(query, 1);
    }
  };

  const handlePageChange = (page: number) => {
    if (query.trim() && hasSearched) {
      searchMovies(query, page);
    } else {
      loadPopularMovies(page);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewDetails = (movieId: number) => {
    navigate(`/movie/${movieId}`);
  };

  const handleRetry = () => {
    if (query.trim() && hasSearched) {
      searchMovies(query, currentPage);
    } else {
      loadPopularMovies(currentPage);
    }
  };

  return (
    <div className="container mx-auto px-2 py-8 ">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-center mb-6">
          {hasSearched ? 'Resultados da Busca' : 'Filmes Populares'}
        </h1>
        
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
          <div className="flex gap-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar filmes..."
              className="
                flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-200
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
              "
            />
            <button
              type="submit"
              disabled={!query.trim() || loading}
              className="
                px-6 py-2 bg-blue-600 text-white rounded-lg
                hover:bg-blue-700 transition-colors
                disabled:opacity-50 disabled:cursor-not-allowed
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
              "
            >
              {loading ? 'Buscando...' : 'Buscar'}
            </button>
          </div>
        </form>

        {hasSearched && (
          <div className="text-center mt-4">
            <button
              onClick={() => {
                setQuery('');
                loadPopularMovies(1);
              }}
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Ver filmes populares
            </button>
          </div>
        )}
      </div>

      {loading && (
        <LoadingSpinner size="large" className="my-12" />
      )}

      {error && (
        <ErrorMessage 
          message={error} 
          onRetry={handleRetry}
          className="my-8"
        />
      )}

      {!loading && !error && movies.length === 0 && hasSearched && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🎬</div>
          <h3 className="text-xl font-semibold mb-2">Nenhum filme encontrado</h3>
          <p className="text-gray-600">Tente buscar por outro termo.</p>
        </div>
      )}

      {!loading && !error && movies.length > 0 && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 mb-8">
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};