import { useState } from "react";

const MovieInput = ({ label, onSearch }) => {
  const [title, setTitle] = useState("");

  const handleSearch = () => {
    if (title.trim()) onSearch(title.trim());
  };

  return (
    <div className="bg-white shadow-md rounded p-4">
      <h2 className="font-semibold mb-2">{label}</h2>
      <input
        type="text"
        className="border p-2 w-full mb-2"
        placeholder="Enter movie title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Search
      </button>
    </div>
  );
};

export default MovieInput;
