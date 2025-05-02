import { useState } from "react";
import MovieInput from "../components/MovieInput";
import MovieCard from "../components/MovieCard";
import ComparisonResult from "../components/ComparisonResult";

const API_KEY = "37a52b70";

const Home = () => {
  const [movie1, setMovie1] = useState(null);
  const [movie2, setMovie2] = useState(null);

  const fetchMovie = async (title, setter) => {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&t=${title}`
    );
    const data = await res.json();
    if (data.Response === "True") setter(data);
    else alert(`Movie "${title}" not found!`);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        🎬 Movie Comparison App
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <MovieInput
          label="Movie 1"
          onSearch={(title) => fetchMovie(title, setMovie1)}
        />
        <MovieInput
          label="Movie 2"
          onSearch={(title) => fetchMovie(title, setMovie2)}
        />
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {movie1 && <MovieCard movie={movie1} />}
        {movie2 && <MovieCard movie={movie2} />}
      </div>

      {movie1 && movie2 && (
        <div className="mt-8">
          <ComparisonResult movie1={movie1} movie2={movie2} />
        </div>
      )}
    </div>
  );
};

export default Home;
