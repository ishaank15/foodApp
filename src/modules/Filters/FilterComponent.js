import React, { Component } from 'react';
import FilterOptions from "./filterOptions";
import { calculateDiscount } from '../../common/utils'

class Filters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allItems: [],
            filteredItems: [],
            filterNameText: '',
            filterCategoryText: '',
            filterRatingText: '',
            filterPriceText: ''
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.items && nextProps.items.length > 0) {
            this.setState({
                allItems: JSON.parse(JSON.stringify(nextProps.items)),
                filteredItems: JSON.parse(JSON.stringify(nextProps.filteredItems))
            });
        }
    }

    handleFilteration = (event, selectedFilter) => {
        const filterText = event.target.value;
        let { filterCategoryText, filterRatingText, filterNameText, filterPriceText, allItems } = this.state;
        let array = [...allItems] || [];
        if (selectedFilter === 'category') {
            filterCategoryText = filterText;
        } else if (selectedFilter === 'rating') {
            filterRatingText = filterText;
        } else if (selectedFilter === 'price') {
            filterPriceText = filterText;
        } else {
            filterNameText = filterText;
        }

        array = array.filter((obj) => {
            let ok = true;

            if (filterCategoryText !== '') {
                ok = (obj.categoryName === filterCategoryText);
            }

            return ok;
        });

        array.forEach((obj, idx) => {
            let filteredItems = obj.items.filter((item) => {
                let ok = true;

                if (ok && filterRatingText !== '') {
                    ok = item.rating === Number(filterRatingText);
                }

                if (ok && filterPriceText !== '') {
                    const finalPrice = calculateDiscount(item.price, item.discount);
                    ok = (finalPrice > filterPriceText.split(",")[0] && (filterPriceText.split(",")[1] && finalPrice <= filterPriceText.split(",")[1]));
                }

                if (ok && filterNameText !== '') {
                    ok = (item.name.toLowerCase().search(filterNameText.toLowerCase()) > -1);
                }
                return ok;
            });
            obj.items = filteredItems;
            array[idx] = obj;
        });
        array = array.filter((category) => {
            return (category.categoryName && category.items && category.items.length)
        })        
        this.setState({ filterNameText, filterCategoryText, filterRatingText, filterPriceText, filteredItems: array });
        this.props.filterItems(array);
    }

    render() {
        return (
            <FilterOptions
                filterCategoryText={this.state.filterCategoryText}
                filterRatingText={this.state.filterRatingText}
                filterNameText={this.state.filterNameText}
                filterPriceText={this.state.filterPriceText}
                handleFilteration={this.handleFilteration}
            />
        );
    }
}

export default Filters;