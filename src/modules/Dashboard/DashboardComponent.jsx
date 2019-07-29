import React, { Component } from 'react';
import MenuItemList from '../Menu';
import Cart from '../Cart';
import Filters from "../Filters";

class Dashboard extends Component {
    
    render() {
        return (
            <div style={{display: 'inline-block'}}>
                <div className="col col-md-12 col-xs-12 filter-container">
                    <Filters />
                </div>
                <div className="col col-md-9 col-xs-8 menu-container">
                    <MenuItemList />
                </div>
                <div className="col col-md-3 col-xs-4 summary-container cart-box">
                    <Cart />
                </div>
            </div>
        );
    }

    componentDidMount() {
        const { DashboardActions } = this.props;
        DashboardActions.getFoodItems();
    }
}


export default Dashboard;