import './App.css';
import React from "react";
import { Route } from 'react-router';
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Registration from './Registration/Registration';
import FooterPage from './Footer/FooterPage';
import Header from './Header/Header';
import Login from './Login/Login';
import Services from './Services/Services';
import AddServices from './Admin/AddServices';
import Dashboard from './DashBoard/Dashboard';
import Home from './Home/Home';
import AboutUs from './AboutUs/AboutUs';
import NotFound from './NotFound/NotFound';
import Purchase from './Purchase/Purchase';
import MyOrders from './myOrders/MyOrders';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>

          <Route exact path="/">

            <Home></Home>

          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/register">

            <Registration></Registration>

          </Route>
          <Route path="/explore">

            <Services></Services>

          </Route>
          <Route path="/add">

            <AddServices></AddServices>

          </Route>
          <Route path="/dashboard">

            <Dashboard></Dashboard>

          </Route>
          <Route exact path="/home">

            <Home></Home>

          </Route>
          <Route path="/aboutus">

            <AboutUs></AboutUs>
          </Route>

          <Route exact path="/purchasing/:serviceId">
            <Purchase></Purchase>
          </Route>
          <Route exact path="/myOrder">
            <MyOrders></MyOrders>
          </Route>
          <Route exact path="/*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <FooterPage></FooterPage>
      </Router>




    </div>
  );
}

export default App;
