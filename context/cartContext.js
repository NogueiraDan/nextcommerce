"use client"
import { createContext, useContext, useReducer } from "react";

// Defina o estado inicial
const initialState = {
  products: [],
};

// Crie o contexto
const CartContext = createContext();

// Defina um provedor que usará useReducer para gerenciar o estado
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Crie as funções de ação (action creators) correspondentes
export const addToCart = (dispatch, payload) => {
  dispatch({ type: "ADD_TO_CART", payload });
};

export const removeItem = (dispatch, payload) => {
  dispatch({ type: "REMOVE_ITEM", payload });
};

export const resetCart = (dispatch) => {
  dispatch({ type: "RESET_CART" });
};

// Crie um hook personalizado para acessar o contexto
export const useCart = () => {
  return useContext(CartContext);
};

// Defina o redutor (reducer)
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
      return { ...state };
    case "REMOVE_ITEM":
      return {
        ...state,
        products: state.products.filter((item) => item.id !== action.payload),
      };
    case "RESET_CART":
      return { ...state, products: [] };
    default:
      return state;
  }
};
