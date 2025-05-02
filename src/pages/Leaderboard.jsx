import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const API_KEY = "37a52b70";

// Sample top-rated movie titles (replace these with actual titles you want to display)
const topRatedMovies = [
  "The Shawshank Redemption",
  "The Godfather",
  "The Dark Knight",
  "Schindler's List",
  "The Lord of the Rings: The Return of the King",
  "Pulp Fiction",
  "The Good, the Bad and the Ugly",
  "Forrest Gump",
  "Inception",
  "Fight Club",
  "The Lord of the Rings: The Fellowship of the Ring",
  "Star Wars: Episode V - The Empire Strikes Back",
  "The Matrix",
  "Goodfellas",
  "The Lord of the Rings: The Two Towers",
  "The Godfather: Part II",
  "The Dark Knight Rises",
  "The Prestige",
  "Interstellar",
  "Whiplash",
];

const Leaderboard = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      const movieData = await Promise.all(
        topRatedMovies.map((title) =>
          fetch(
            `https://www.omdbapi.com/?apikey=${API_KEY}&t=${encodeURIComponent(
              title
            )}`
          ).then((res) => res.json())
        )
      );

      const filtered = movieData.filter((m) => m.Response === "True");
      const sorted = filtered.sort(
        (a, b) => parseFloat(b.imdbRating) - parseFloat(a.imdbRating)
      );
      setMovies(sorted);
      setLoading(false);
    };

    fetchMovies();
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-100 rounded-xl shadow-lg">
      <h1 className="text-3xl font-extrabold text-center mb-8 text-blue-600">
        Top 20 Rated IMDb Movies
      </h1>
      {loading ? (
        <p className="text-center text-xl text-gray-600">Loading movies...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map((movie, index) => (
            <div
              key={movie.imdbID || index}
              className="movie-card transition-all duration-300 hover:scale-105"
            >
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Leaderboard;
