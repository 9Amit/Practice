const extractNumber = (text) => {
  const match = text.match(/\d+/g);
  return match ? match.map(Number).reduce((a, b) => a + b, 0) : 0;
};

const ComparisonResult = ({ movie1, movie2 }) => {
  const score1 = {
    imdb: parseFloat(movie1.imdbRating),
    awards: extractNumber(movie1.Awards),
    runtime: parseInt(movie1.Runtime),
  };

  const score2 = {
    imdb: parseFloat(movie2.imdbRating),
    awards: extractNumber(movie2.Awards),
    runtime: parseInt(movie2.Runtime),
  };

  const highlight = (v1, v2) =>
    v1 > v2 ? "bg-green-100" : v2 > v1 ? "bg-red-100" : "";

  return (
    <div className="bg-white shadow-md rounded p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">
        📊 Comparison Result
      </h2>
      <table className="w-full text-left border">
        <thead>
          <tr>
            <th className="border p-2">Metric</th>
            <th className="border p-2">{movie1.Title}</th>
            <th className="border p-2">{movie2.Title}</th>
          </tr>
        </thead>
        <tbody>
          <tr className={highlight(score1.imdb, score2.imdb)}>
            <td className="border p-2">IMDb Rating</td>
            <td className="border p-2">{score1.imdb}</td>
            <td className="border p-2">{score2.imdb}</td>
          </tr>
          <tr className={highlight(score1.awards, score2.awards)}>
            <td className="border p-2">Awards Count</td>
            <td className="border p-2">{score1.awards}</td>
            <td className="border p-2">{score2.awards}</td>
          </tr>
          <tr className={highlight(score1.runtime, score2.runtime)}>
            <td className="border p-2">Runtime (min)</td>
            <td className="border p-2">{score1.runtime}</td>
            <td className="border p-2">{score2.runtime}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonResult;
