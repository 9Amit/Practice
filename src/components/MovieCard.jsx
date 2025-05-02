const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="h-full w-full object-cover"
      />
      <div className="p-4 flex flex-col justify-between flex-1">
        <h2 className="font-semibold text-lg text-gray-800 mb-1">
          {movie.Title}
        </h2>
        <p className="text-sm text-gray-500 mb-1">{movie.Year}</p>
        <p className="text-sm text-yellow-500 mb-1">⭐ {movie.imdbRating}</p>
        <p className="text-sm text-gray-600">{movie.Genre}</p>
      </div>
    </div>
  );
};

export default MovieCard;
