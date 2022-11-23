import Pokedex from "./components/Pokedex";
import InputName from "./components/InputName";
import PokedexDetail from "./components/PokedexDetail"
import { HashRouter, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes";
import './App.css'




function App() {

  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<InputName />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/pokedex/:id" element={<PokedexDetail />} />
          </Route>

        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
