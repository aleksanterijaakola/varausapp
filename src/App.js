import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";

function App() {
  return (
     <Router>
       <Switch>
         <Route path="/dashboard" component={Dashboard} />
         <Route path="/register" component={Register} />
         <Route path="/" component={Login} />
       </Switch>
   </Router>
   );
}

export default App;