import "./App.css";
import React from "react";
import Home from "./components/home";
import Contact from "./components/contact";
import { Switch, Route } from "react-router";
import About from "./components/about";
import SignIn from "./components/accounts/sign-in";
import Dashboard from "./components/dashboard";
import Places from "./components/places/index";
import { useHistory } from "react-router";
import PlaceDetails from "./components/places/PlaceDetail/placeDetails";

function App() {
  const hisotry = useHistory();
  const [indexRouteCheck, setIndexRouteCheck] = React.useState(true);

  React.useEffect(() => {
    indexRouteCheck === true && hisotry.replace("/home");
    setIndexRouteCheck(false);
  }, []);
  return (
    <div className="App">
      <Switch>
        <Route path="/home" component={Home} exact />
        <Route path="/" component={Places} exact />
        <Route path="/places-details" component={PlaceDetails} exact />
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/sign-in" component={SignIn} exact />
        <Route path="/dashboard" component={Dashboard} exact />
      </Switch>
    </div>
  );
}

export default App;
