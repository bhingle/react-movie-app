import { Routes,Route } from "react-router-dom";
import "./css/App.css";
import MovieCard from "./components/MovieCard";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Favourites from "./pages/Favourites";
import { MovieProvider } from "./contexts/MovieContext";
function App() {
  return (
    <MovieProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favourites" element={<Favourites/>}></Route>
      </Routes>
    </MovieProvider>
  );
}

export default App;
