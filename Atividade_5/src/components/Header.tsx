import { Link, useLocation } from "react-router-dom";
import { useFavorites } from "../hooks/useFavorites";

export default function Header() {
  const { favoritesCount } = useFavorites();
  const location = useLocation();

  return (
    <header
      className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 
                 bg-white/80 backdrop-blur px-6 py-6"
    >
      <Link
        to="/"
        className="font-bold text-lg text-gray-950 hover:text-blue-800"
      >
        🎬 Movie Explorer
      </Link>

      <nav className="flex items-center space-x-6">
        <Link
          to="/"
          className={`hover:text-blue-600 transition-colors ${
            location.pathname === "/" ? "text-gray-950 font-bold underline" : "text-gray-600 font-bold"
          }`}
        >
          BUSCAR
        </Link>
        <Link
          to="/favorites"
          className={`hover:text-blue-600 transition-colors flex items-center ${
            location.pathname === "/favorites"
              ? "text-gray-950 font-bold underline"
              : "text-gray-700 font-bold"
          }`}
        >
          FAVORITOS
          {favoritesCount > 0 && (
            <span className="ml-1 bg-red-500 text-gray-950 text-xs rounded-full px-2 py-1 min-w-[1.25rem] text-center">
              {favoritesCount}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}
