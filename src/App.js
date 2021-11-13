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

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        {/* <Registration></Registration> */}
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

            {/* <Add></Add> */}
            <AddServices></AddServices>

          </Route>
          <Route path="/dashboard">

            {/* <Add></Add> */}
            <Dashboard></Dashboard>

          </Route>
          <Route exact path="/home">

            <Home></Home>

          </Route>
          {/* <Route exact path="/home">

            <Home></Home>

          </Route>

          <Route path="/services">

            <Services></Services>

          </Route>

          <Route path="/add">

            <Add></Add>

          </Route>
          <Route path="/aboutus">

            <AboutUs></AboutUs>
          </Route>
          <Route exact path="/booking/:serviceId">
            <Booking></Booking>
          </Route>
          <Route exact path="/myBooking">
            <MyBooking></MyBooking>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/admin">
            <AdminDashBoard></AdminDashBoard>
          </Route>
          <Route exact path="/*">
            <NotFound></NotFound>
          </Route> */}
        </Switch>
        <FooterPage></FooterPage>
      </Router>




    </div>
  );
}

export default App;
