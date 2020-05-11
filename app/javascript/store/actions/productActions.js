import {FETCH_PRODUCTS} from "./actionTypes";

export const fetchProducts = () => async (dispatch) => {
    await fetch('http://localhost:5000/api/v1/products')
        .then((response) => {
            return response.json()
        }).then(data =>{
            return dispatch({
                type: FETCH_PRODUCTS,
                payload: data
            })
        });
}

