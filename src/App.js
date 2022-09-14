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
import AreaList from "./components/Admin/AreaList/AreaList";
import Customer from "./components/Admin/Customer/Customer";
import DeliveryOrder from "./components/Admin/DeliveryOrder/DeliveryOrder";
import GarageListAdmin from "./components/Admin/GarageListAdmin/GarageListAdmin";
import ItemList from "./components/Admin/ItemList/ItemList";
import PendingOrder from "./components/Admin/PendingOrder/PendingOrder";
import Checkout from "./components/Checkout/Checkout/Checkout";
import ServiceCheckout from "./components/Checkout/ServiceCheckout/ServiceCheckout";
import Garage from "./components/Garage/Garage/Garage";
import AddGarageService from "./components/GarageUser/AddGarageService/AddGarageService";
import DeliveryRequest from "./components/GarageUser/DeliveryRequest/DeliveryRequest";
import GarageProfileUser from "./components/GarageUser/GarageProfileUser/GarageProfileUser";
import PendingRequest from "./components/GarageUser/PendingRequest/PendingRequest";
import ServiceList from "./components/GarageUser/ServiceList/ServiceList";
import UpdateGarageService from "./components/GarageUser/UpdateGarageService/UpdateGarageService";
// import GarageList from "./components/Home/GarageList/GarageList";
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
          <PrivateRoute path="/admin/delivery">
            <DeliveryOrder></DeliveryOrder>
          </PrivateRoute>
          <PrivateRoute path="/admin/areaList">
            <AreaList></AreaList>
          </PrivateRoute>
          <PrivateRoute path="/admin/addItem">
            <AddItem></AddItem>
          </PrivateRoute>
          <PrivateRoute path="/admin/itemList">
            <ItemList></ItemList>
          </PrivateRoute>
          <Route path="/admin/addArea">
            <AddArea></AddArea>
          </Route>
          <PrivateRoute path="/admin/addGarage">
            <AddGarage></AddGarage>
          </PrivateRoute>
          <PrivateRoute path="/admin/garageList">
            <GarageListAdmin></GarageListAdmin>
          </PrivateRoute>
          <PrivateRoute path="/admin/customer">
            <Customer></Customer>
          </PrivateRoute>
          <PrivateRoute path="/garage/profile">
            <GarageProfileUser></GarageProfileUser>
          </PrivateRoute>
          <PrivateRoute path="/garage/pending">
            <PendingRequest></PendingRequest>
          </PrivateRoute>
          <PrivateRoute path="/garage/delivery">
            <DeliveryRequest></DeliveryRequest>
          </PrivateRoute>
          <PrivateRoute path="/garage/addService">
            <AddGarageService></AddGarageService>
          </PrivateRoute>
          <PrivateRoute path="/garage/updateService/:id">
            <UpdateGarageService></UpdateGarageService>
          </PrivateRoute>
          <PrivateRoute path="/garage/serviceList">
            <ServiceList></ServiceList>
          </PrivateRoute>
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
