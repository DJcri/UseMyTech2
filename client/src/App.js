import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Auth from "./components/Auth";
import Browse from "./components/Browse";
import PrivateRoute from "./components/PrivateRoute";
import MyEquipment from "./components/MyEquipment";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [role, setRole] = useState(localStorage.getItem("role"));

  return (
    <div className="App">
      <Nav token={token} setToken={setToken} setRole={setRole} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/browse">
          <Browse role={role} />
        </Route>
        <PrivateRoute path="/myequipment" component={MyEquipment} />
        <Route path="/login">
          <Auth setToken={setToken} setRole={setRole} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
