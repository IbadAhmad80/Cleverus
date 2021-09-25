import "./App.css";
import Home from "./components/home";
import Contact from "./components/contact";
import { Switch, Route } from "react-router";
import "mapbox-gl/dist/mapbox-gl.css";
import About from "./components/about";
import SignIn from "./components/accounts/sign-in";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/sign-in" component={SignIn} exact />
      </Switch>
    </div>
  );
}

export default App;
