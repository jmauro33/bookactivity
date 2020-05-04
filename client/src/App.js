import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";


import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path={["/", "/books"]}>
            <Books />
          </Route>
        
        </Switch>
      </div>
    </Router>
  );
}

export default App;
