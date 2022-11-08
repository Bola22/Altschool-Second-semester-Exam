import {BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Error from "./pages/error/Error";
import Repo from "./pages/repo/Repo"
import './App.css';
import {Helmet} from "react-helmet"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/repo/:id" element={<Repo />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
