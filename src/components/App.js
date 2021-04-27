import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Register from "./Register";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./Forgotpassword";
import BookingInterface from "./BookingInterface";
import SeatBooking from "./SeatBooking";
import Datepicker from "./Datepicker";
import Alert from "./Alert";
import { AuthProvider } from "../contexts/AuthContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/reserve" component={BookingInterface} />
          <PrivateRoute exact path="/testi" component={Datepicker} />
          <Route path="/register" component={Register} />
          <Route path="/forgotpassword" component={ForgotPassword} />
          <PrivateRoute exact path="/seat" component={SeatBooking} />
          <Route path="/alert" component={Alert} />
          <Route path="/" component={Login} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
