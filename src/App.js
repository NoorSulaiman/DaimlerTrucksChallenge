import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import PartSortingPage from "./pages/PartSorting/PartSortingPage";
import DeletePartsPage from "./pages/DeleteParts/DeletePartsPage";
function App() {
  // Added main routes for search and delete algorithm tasks
  return (
    <div className="App">
      <Router>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact component={PartSortingPage} />
          <Route path="/delete" component={DeletePartsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
