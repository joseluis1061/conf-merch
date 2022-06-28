import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = ()=>{
  const [state, setState] = useState(initialState);

  //Funciones para modificar el estado
  const addToCart = payload => {
    //Funciones para modificar el estado
    setState({
      //Modifica la opción cart agrega
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = payload => {
    setState({
      ...state,
      cart: state.cart.filter(items => items.id !== payload.id),
    });
  };

  const addToBuyer = payload => {
    setState({
      ...state,
      buyer: [...state.buyer, payload]
    })
  }

  //Nueva orden de compra
  const addNewOrder = payload =>{
    setState({
      ...state,
      orders: [...state.orders, payload]
    })
  }
  //El customHook retorna nuestras funciones y el estado del carrito
  return {
    addToCart,
    removeFromCart,
    addToBuyer,
    addNewOrder,
    state,
  };
};

export default useInitialState;