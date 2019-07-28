import React, { Component } from 'react';
import MenuItem from './MenuItems/MenuItems';

class MenuItemList extends Component {

    addItemToCart = (data) => {
        const {selectedItems} = this.props;
        const updatedSelectedItem = [...selectedItems]
        updatedSelectedItem.push(data);
        this.props.addItemToCart(updatedSelectedItem);
    }

    getMenuItems = (menu = []) => {
        let itemsInMenu = menu.items.map((data) => {
            return (<MenuItem
                data={data}
                key={data.id}
                addToCart={this.addItemToCart}
            />);
        });
        return itemsInMenu;

    }
    getCategoryWiseMenu = () => {
        const {filteredItems =[]} = this.props;
        if(!filteredItems.length) {
            return <div>
                {'Sorry, There are no items as per the selected filter'}
            </div>
        }
        const  menuItems = filteredItems.map((menu, index) => {
            return (
                <div key={index} className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                    <h2 className="category">
                        {menu.categoryName}
                    </h2>
                   { this.getMenuItems(menu)}
                </div>
            );
        });
        return menuItems
    }

    render() {
        const MenuItemListComponent = this.getCategoryWiseMenu()
        return MenuItemListComponent
    }
}

export default MenuItemList;