import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import Products from "./Pages/Home/Products/Products";
import PlaceOrder from "./Pages/Home/PlaceOrder/PlaceOrder";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Footer from "./Pages/Shared/Footer/Footer";
import Dashboard from "./Pages/Dashoard/Dashboard/Dashboard";
import AllProducts from "./Pages/Explore/AllProducts/AllProducts";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route exact path="/explore">
            <AllProducts />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <PrivateRoute path="/placeorder/:serviceId">
            <PlaceOrder />
          </PrivateRoute>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
