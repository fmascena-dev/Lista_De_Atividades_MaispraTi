import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { SearchPage } from "./pages/SearchPage";
import { MovieDetailsPage } from "./pages/MovieDetailsPage";
import { FavoritesPage } from "./pages/FavoritesPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-950 text-gray-200">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/movie/:id" element={<MovieDetailsPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
