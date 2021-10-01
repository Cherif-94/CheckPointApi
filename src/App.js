import { Switch, Route } from "react-router";
import "./App.css";
import Home from "./Pages/Home";
import Cocktails from "./Pages/Cocktails";
import Error from "./Pages/Error";
// import Admin from "./pages/Admin";
import DetailCocktail from "./Pages/DetailCocktail";
import NavBar from "./Component/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Cocktails" component={Cocktails} />

        {/* <Route path="/Admin" component={Admin} /> */}

        <Route
          path="/Cocktails/DetailCocktail/:id"
          component={DetailCocktail}
        />

        <Route path="/*" component={Error} />
      </Switch>
    </div>
  );
}

export default App;
