import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import PartsLookupPage from "./pages/SearchParts/PartsLookupPage";
import DeletePartsPage from "./pages/DeleteParts/DeletePartsPage";
function App() {
  // Added main routes for search and delete algorithm tasks
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" exact component={PartsLookupPage} />
          <Route path="/delete" component={DeletePartsPage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
