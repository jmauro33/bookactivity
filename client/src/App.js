import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchBooks from "./pages/SearchBooks";
import SavedBooks from "./pages/SavedBooks";
import NoMatch from "./pages/noMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/SearchBooks"]}>
            <SearchBooks />
          </Route>
          <Route exact path={["/", "/SavedBooks"]}>
            <SavedBooks />
          </Route>
          <Route exact path={["/", "/NoMatch"]}>
            <NoMatch />
          </Route>
        </Switch>
      </div>  
    </Router>
  );
}

export default App;
