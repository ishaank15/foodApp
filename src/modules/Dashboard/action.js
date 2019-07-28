import { MOCK_API_URL, LOAD_FOOD_ITEMS, ERROR_LOAD_FOOD_ITEMS,FILTER_ITEMS } from '../../shared/constant';
import axios from 'axios';

export const getFoodItems = () => (dispatch, getState, { api }) => {
    axios.get(MOCK_API_URL)
        .then((response) => {
            const items = response.data;
            const payload = items.menu;
            dispatch ({ type: LOAD_FOOD_ITEMS, payload });
            dispatch({ type: FILTER_ITEMS, payload})
        })
        .catch(error => {
            console.error('Err: Dashboard:getFoodItems', error);
            dispatch ({ type: ERROR_LOAD_FOOD_ITEMS });
        });
};
