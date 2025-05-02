import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Leaderboard from "./pages/Leaderboard"; // adjust path if needed
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <nav className="bg-black text-white p-4 flex gap-6">
        <Link to="/" className="hover:underline">
          🏠 Home
        </Link>
        <Link to="/leaderboard?page=1" className="hover:underline">
          🏆 Leaderboard
        </Link>
      </nav>

      <Routes>
        {/* Define the home route */}
        <Route path="/" element={<Home/>} />

        {/* Define the leaderboard route */}
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
