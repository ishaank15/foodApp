import React, { Component } from 'react';
import Dashboard from './modules/Dashboard';
import OrderHistory from './modules/OrderHistory'
import BottomBar from './modules/BottomBar'
import {Tabs, Tab} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="jumbotron">
          <h1> inFoodö_Ördering App</h1>
          <p>Order your food from the menu.</p>
        </div>
        <Tabs defaultActiveKey="Dashboard" id="uncontrolled-tab-example">
          <Tab eventKey="Dashboard" title="Dashboard">
            <Dashboard />
          </Tab>
          <Tab eventKey="Order History" title="Order History">
            <OrderHistory />
          </Tab>
          <BottomBar/>
        </Tabs>
      </div>
    );
  }
}

export default App;
