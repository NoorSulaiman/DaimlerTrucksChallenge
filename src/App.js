import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPartsPage from "./pages/SearchParts/SearchPartsPage";
import DeletePartsPage from "./pages/DeleteParts/DeletePartsPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={SearchPartsPage} />
          <Route path="/delete" component={DeletePartsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
