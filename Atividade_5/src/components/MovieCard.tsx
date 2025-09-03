import type { Movie } from "../types/movie";
import { tmdbService } from "../services/tmdb";
import { useFavorites } from "../hooks/useFavorites";

interface MovieCardProps {
  movie: Movie;
  onViewDetails: (movieId: number) => void;
}

export const MovieCard = ({ movie, onViewDetails }: MovieCardProps) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const posterUrl = tmdbService.getImageUrl(movie.poster_path);
  const releaseYear = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : "N/A";

  return (
    <div className=" rounded-lg shadow-md overflow-hidden border border-gray-700 flex flex-col justify-between">
      <div className="relative">
        {posterUrl ? (
          <img
            src={posterUrl}
            alt={movie.title}
            className="w-full object-cover"
          />
        ) : (
          <div className="w-full bg-gray-300 flex items-center justify-center">
            <span className="text-gray-500">Sem imagem</span>
          </div>
        )}

        <button
          onClick={() => toggleFavorite(movie)}
          className={`
            absolute top-2 right-2 p-2 rounded-full transition-colors cursor-pointer text-2xl
            ${
              isFavorite(movie.id)
                ? " text-white hover:bg-red-600/60"
                : " text-gray-600 hover:bg-gray-100/60"
            }
          `}
        >
          {isFavorite(movie.id) ? "❤️" : "🤍"}
        </button>
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h3 className="font-bold text-lg mb-4 line-clamp-2">{movie.title}</h3>
        <div className="flex items-center mb-3 justify-between">
          <p className="text-gray-500">{releaseYear}</p>
          <span className="text-yellow-500">
            ⭐{" "}
            <span className="ml-1 text-sm text-gray-500">
              {movie.vote_average.toFixed(1)}
            </span>
          </span>
        </div>
        <button
          onClick={() => onViewDetails(movie.id)}
          className="
            w-full bg-blue-600 text-white py-2 rounded-lg
            hover:bg-blue-700 transition-colors
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer
          "
        >
          Ver detalhes
        </button>
      </div>
    </div>
  );
};
