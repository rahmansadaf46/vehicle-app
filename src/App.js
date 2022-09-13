import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AddArea from "./components/Admin/AddArea/AddArea";
import AddGarage from "./components/Admin/AddGarage/AddGarage";
import AddItem from "./components/Admin/AddItem/AddItem";
import Customer from "./components/Admin/Customer/Customer";
import DeliveryOrder from "./components/Admin/DeliveryOrder/DeliveryOrder";
import PendingOrder from "./components/Admin/PendingOrder/PendingOrder";
import Checkout from "./components/Checkout/Checkout/Checkout";
import ServiceCheckout from "./components/Checkout/ServiceCheckout/ServiceCheckout";
import Garage from "./components/Garage/Garage/Garage";
import AddGarageService from "./components/GarageUser/AddGarageService/AddGarageService";
import DeliveryRequest from "./components/GarageUser/DeliveryRequest/DeliveryRequest";
import PendingRequest from "./components/GarageUser/PendingRequest/PendingRequest";
import Home from "./components/Home/Home/Home";
import Item from "./components/Item/Item/Item";
import Login from "./components/Login/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import SignUp from "./components/Login/SignUp/SignUp";
import ServiceShipment from "./components/ServiceShipment/ServiceShipment/ServiceShipment";
import Shipment from "./components/Shipment/Shipment/Shipment";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>

          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          <PrivateRoute path="/checkout">
            <Checkout></Checkout>
          </PrivateRoute>
          <PrivateRoute path="/serviceCheckout">
            <ServiceCheckout></ServiceCheckout>
          </PrivateRoute>
          <PrivateRoute path="/item/:id">
            <Item></Item>
          </PrivateRoute>
          
          <PrivateRoute path="/serviceShipment">
            <ServiceShipment></ServiceShipment>
          </PrivateRoute>
          <PrivateRoute path="/shipment">
            <Shipment></Shipment>
          </PrivateRoute>
          <PrivateRoute path="/admin/pending">
            <PendingOrder></PendingOrder>
          </PrivateRoute>
          <Route path="/admin/delivery">
            <DeliveryOrder></DeliveryOrder>
          </Route>
          <PrivateRoute path="/admin/addItem">
            <AddItem></AddItem>
          </PrivateRoute>
          <Route path="/admin/addArea">
            <AddArea></AddArea>
          </Route>
          <PrivateRoute path="/admin/addGarage">
            <AddGarage></AddGarage>
          </PrivateRoute>
          <PrivateRoute path="/admin/customer">
            <Customer></Customer>
          </PrivateRoute>
          <Route path="/garage/pending">
            <PendingRequest></PendingRequest>
          </Route>
          <Route path="/garage/delivery">
            <DeliveryRequest></DeliveryRequest>
          </Route>
          <Route path="/garage/addService">
            <AddGarageService></AddGarageService>
          </Route>
          <PrivateRoute path="/garage/:id">
            <Garage></Garage>
          </PrivateRoute>

          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
