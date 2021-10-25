import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Admin from "./pages/Admin";
import Index from "./pages/index";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="./pages/Admin.jsx">
          <Admin />
        </Route>
        <Route path="/">
          <Index />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
