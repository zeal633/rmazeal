
import Axios from "axios";
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constansts/cartConstants";

export const addToCart = (productID,qty) => async(dispatch,getState)=>{
    const {data} = await Axios.get(`/api/products/${productID}`);
    dispatch({
        type: CART_ADD_ITEM,
        payload:{
            name:data.name,
            image:data.image,
            price: data.price,
            countInStock: data.countInStock,
            product: data._id,
            qty,
        }
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}

export const removeFromCart = (productID) => (dispatch,getsate) =>{
    dispatch({type:CART_REMOVE_ITEM, payload: productID});
    localStorage.setItem('cartItems', JSON.stringify(getsate().cart.cartItems));
}