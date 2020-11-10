import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Register from "./Register";

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
