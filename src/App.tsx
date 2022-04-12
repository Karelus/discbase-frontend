import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./Util/Theme";
import Dashboard from "Features/Dashboard";
import SingleDisc from "./Features/Discs";
import Header from "./Components/Header";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/discs/:id">
            <SingleDisc />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
