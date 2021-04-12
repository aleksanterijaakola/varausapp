import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Register from "./Register";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./Forgotpassword";
import BookingInterface from "./BookingInterface";
import SeatSelection from "./SeatSelection";
import Bookings from "./Booking";
import { AuthProvider } from "../contexts/AuthContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/reserve" component={BookingInterface} />
          <PrivateRoute exact path="/testi" component={Bookings} />
          <Route path="/register" component={Register} />
          <Route path="/forgotpassword" component={ForgotPassword} />
          <Route path="/seat" component={SeatSelection} />
          <Route path="/" component={Login} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
