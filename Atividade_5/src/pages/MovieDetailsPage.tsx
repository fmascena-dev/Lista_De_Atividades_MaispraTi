import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { tmdbService } from '../services/tmdb';
import type { MovieDetails, MovieCredits } from '../types/movie';
import { useFavorites } from '../hooks/useFavorites';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { ErrorMessage } from '../components/ErrorMessage';

export const MovieDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [movie, setMovie] = useState<MovieDetails | null>(null);
  const [credits, setCredits] = useState<MovieCredits | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const { isFavorite, toggleFavorite } = useFavorites();

  useEffect(() => {
    if (!id) {
      navigate('/');
      return;
    }

    const fetchMovieData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const [movieData, creditsData] = await Promise.all([
          tmdbService.getMovieDetails(parseInt(id)),
          tmdbService.getMovieCredits(parseInt(id))
        ]);
        
        setMovie(movieData);
        setCredits(creditsData);
      } catch (err) {
        setError('Erro ao carregar detalhes do filme. Tente novamente.');
        console.error('Movie details error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieData();
  }, [id, navigate]);

  const handleRetry = () => {
    if (id) {
      const fetchMovieData = async () => {
        setLoading(true);
        setError(null);
        
        try {
          const [movieData, creditsData] = await Promise.all([
            tmdbService.getMovieDetails(parseInt(id)),
            tmdbService.getMovieCredits(parseInt(id))
          ]);
          
          setMovie(movieData);
          setCredits(creditsData);
        } catch (err) {
          setError('Erro ao carregar detalhes do filme. Tente novamente.');
          console.error('Movie details error:', err);
        } finally {
          setLoading(false);
        }
      };

      fetchMovieData();
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <ErrorMessage message={error} onRetry={handleRetry} />
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <ErrorMessage message="Filme não encontrado." />
      </div>
    );
  }

  // const backdropUrl = tmdbService.getBackdropUrl(movie.backdrop_path);
  const posterUrl = tmdbService.getImageUrl(movie.poster_path, 'w500');
  const director = credits?.crew.find(person => person.job === 'Director');
  const releaseYear = movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A';
  const runtime = movie.runtime ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}min` : 'N/A';
  const cast = credits?.cast.slice(0, 10) || [];

  return (
    <div className="min-h-screen">
      {/*
      {backdropUrl && (
        <div 
          className="h-96 bg-cover relative"
          style={{ backgroundImage: `url(${backdropUrl})` }}
        >
          <div className="absolute inset-0 bg-black/20 bg-opacity-50" />
        </div>
      )} */}

      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => navigate(-1)}
          className="
            mb-6 px-4 py-2 bg-gray-600 text-white rounded-lg
            hover:bg-gray-700 transition-colors
            focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 cursor-pointer
          "
        >
          ← Voltar
        </button>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3">
            {posterUrl ? (
              <img
                src={posterUrl}
                alt={movie.title}
                className="w-full max-w-md mx-auto rounded-lg shadow-lg"
              />
            ) : (
              <div className="w-full max-w-md mx-auto h-96 bg-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Sem imagem</span>
              </div>
            )}
          </div>

          <div className="lg:w-2/3">
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-4xl font-bold">{movie.title}</h1>
              <button
                onClick={() => toggleFavorite(movie)}
                className={`
                  p-3 rounded-full text-2xl transition-colors cursor-pointer
                  ${isFavorite(movie.id) 
                    ? 'bg-red-500 text-white hover:bg-red-600' 
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }
                `}
              >
                {isFavorite(movie.id) ? '❤️' : '🤍'}
              </button>
            </div>

            {movie.tagline && (
              <p className="text-xl text-gray-500 italic mb-4">{movie.tagline}</p>
            )}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div>
                <span className="font-semibold">Ano:</span>
                <p>{releaseYear}</p>
              </div>
              <div>
                <span className="font-semibold">Duração:</span>
                <p>{runtime}</p>
              </div>
              <div>
                <span className="font-semibold">Avaliação:</span>
                <p className="flex items-center">
                  <span className="text-yellow-500 mr-1">⭐</span>
                  {movie.vote_average.toFixed(1)}/10
                </p>
              </div>
              <div>
                <span className="font-semibold">Votos:</span>
                <p>{movie.vote_count.toLocaleString()}</p>
              </div>
            </div>

            {director && (
              <div className="mb-6">
                <span className="font-semibold">Diretor:</span>
                <p>{director.name}</p>
              </div>
            )}

            {movie.genres.length > 0 && (
              <div className="mb-6">
                <span className="font-semibold">Gêneros:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {movie.genres.map((genre) => (
                    <span
                      key={genre.id}
                      className="px-3 py-1 bg-blue-200 text-gray-800 rounded-full text-md font-bold uppercase"
                    >
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {movie.overview && (
              <div className="mb-6">
                <span className="font-semibold">Sinopse:</span>
                <p className="mt-2 leading-relaxed">{movie.overview}</p>
              </div>
            )}

            {cast.length > 0 && (
              <div className="mb-6">
                <span className="font-semibold">Elenco principal:</span>
                <div className="mt-4 grid grid-cols-2 md:grid-cols-5 gap-4">
                  {cast.map((actor) => (
                    <div key={actor.id} className="text-center">
                      {actor.profile_path ? (
                        <img
                          src={tmdbService.getImageUrl(actor.profile_path, 'w300')!}
                          alt={actor.name}
                          className="w-20 h-20 rounded-full mx-auto mb-2 object-cover"
                        />
                      ) : (
                        <div className="w-20 h-20 rounded-full mx-auto mb-2 bg-gray-300 flex items-center justify-center">
                          <span className="text-gray-500 text-xs">👤</span>
                        </div>
                      )}
                      <p className="text-md font-medium">{actor.name}</p>
                      <p className="text-sm text-gray-400">{actor.character}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};