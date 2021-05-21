import "./App.css";
import { Redirect, Route, Switch } from "wouter";

import Home from "./components/Home";
import requestOne from "./components/RequestOne";
import requestTwo from "./components/RequestTwo";
import requestThree from "./components/RequestThree";
import NotFound from "./components/404";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route component={Home} path="/" />
        <Route component={requestOne} path="/R1" />
        <Route component={requestTwo} path="/R2" />
        <Route component={requestThree} path="/R3" />
        <Route component={NotFound} path="/404" />
        <Redirect component={NotFound} to="/404" />
      </Switch>
    </div>
  );
}

export default App;
