import { useState } from "react";
import initialState from '../initialState';


const useInitialState = ()=>{
  const [state, setState] = useState(initialState);

  //Funciones para modificar el estado
  const addToCart = payload =>{
    setState({
      ...state,
      //Modifica la opción cart agrega
      cart:[...state.cart, payload]
    });
  };

  const removeToCart = payload =>{
    setState({
      ...state,
      //Modifica la opción cart elimina
      cart:state.cart.filter((item)=>{
        item.id != payload.id
      })
    })
  };

  //El customHook retorna nuestras funciones y el estado del carrito
  return{
    addToCart,
    removeToCart,
    state,
  };

};

export default useInitialState;