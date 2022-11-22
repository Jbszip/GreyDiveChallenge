import "./App.css";
import IndividualItem from "./components/individualItem";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Listado from "./components/listado";

function App() {
  return (
    <div className="App min-h-screen bg-slate-900 text-slate-100">
      <Navbar />
      <main>
          <Routes>
            <Route path="/" element={<Listado />} />
            <Route path="/:test" element={<IndividualItem />} />
          </Routes>
      </main>
    </div>
  );
}

export default App;
