import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import { Apod } from "./components/Apod";

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Apod} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
};

export default App;
