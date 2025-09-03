import { useNavigate } from 'react-router-dom';
import { useFavorites } from '../hooks/useFavorites';
import { MovieCard } from '../components/MovieCard';

export const FavoritesPage = () => {
  const { favorites, clearFavorites, favoritesCount } = useFavorites();
  const navigate = useNavigate();

  const handleViewDetails = (movieId: number) => {
    navigate(`/movie/${movieId}`);
  };

  const handleClearFavorites = () => {
    if (window.confirm('Tem certeza que deseja remover todos os favoritos?')) {
      clearFavorites();
    }
  };

  if (favoritesCount === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Meus Favoritos</h1>
        
        <div className="text-center py-12">
          <div className="text-6xl mb-4">❤️</div>
          <h3 className="text-xl font-semibold mb-2">Nenhum filme favorito ainda</h3>
          <p className="text-gray-600 mb-6">
            Adicione filmes aos seus favoritos para vê-los aqui.
          </p>
          <button
            onClick={() => navigate('/')}
            className="
              px-6 py-3 bg-blue-600 text-white rounded-lg
              hover:bg-blue-700 transition-colors
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer
            "
          >
            Descobrir filmes
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          Meus Favoritos ({favoritesCount})
        </h1>
        
        <button
          onClick={handleClearFavorites}
          className="
            px-4 py-2 text-red-600 border border-red-600 rounded-lg
            hover:bg-red-600 hover:text-white transition-colors duration-500
            focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 cursor-pointer
          "
        >
          Limpar todos
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {favorites.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>
    </div>
  );
};