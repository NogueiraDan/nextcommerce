"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

// Definindo o tipo do contexto
type CartItem = {
  id: number;
  title: string;
  price: string;
  description: String;
  category: String;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
  quantity?: number | undefined;
};

type CartContextType = {
  cart: CartItem[];
  cartTotalPrice: any;
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: number) => void;
  incrementQuantity: (itemId: number) => void;
  decrementQuantity: (itemId: number) => void;
  clearCart: () => void;
};

// Definindo o tipo das props
type CartProviderProps = {
  children: React.ReactNode;
};

// Criando o contexto
const CartContext = createContext<CartContextType | undefined>(undefined);

// Hook customizado para utilizar o contexto dentro do Provider
const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart deve ser usado dentro de um CartProvider");
  }
  return context;
};

// Componente provedor do contexto
const CartProvider = ({ children }: CartProviderProps) => {
  useEffect(() => {
    // Carrega os produtos do localStorage quando o componente é montado
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartTotalPrice, setCartTotalPrice] = useState();

  useEffect(() => {
    let itemPrice;
    let totalPrice = 0;
    let totalPriceFloat;
    cart.forEach((item) => {
      itemPrice = parseFloat(item.price) * (item.quantity ?? 0);
      totalPrice = totalPrice + itemPrice;
      totalPriceFloat = totalPrice.toFixed(2) 
    });
    setCartTotalPrice(totalPriceFloat);
  }, [cart]);

  const addToCart = (item: CartItem) => {
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      // Se o item já existe no carrinho, atualize a quantidade
      const updatedCart:any = [...cart];
      updatedCart[existingItemIndex].quantity+= 1;
      setCart(updatedCart);

      // Atualiza o localStorage com o novo carrinho após setCart
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      // Se o item não existe no carrinho, adicione-o com quantidade 1
      const updatedCart = [...cart, { ...item, quantity: 1 }];
      setCart(updatedCart);

      // Atualiza o localStorage com o novo carrinho após setCart
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const removeFromCart = (itemId: number) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const incrementQuantity = (itemId: number) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === itemId);
    const updatedCart:any = [...cart];
    updatedCart[itemIndex].quantity += 1;
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decrementQuantity = (itemId: number) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === itemId);
    const updatedCart:any = [...cart];
    if (updatedCart[itemIndex].quantity == 1) {
      return;
    }
    updatedCart[itemIndex].quantity -= 1;
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };



  // Criando o objeto de contexto
  const cartContextValue: CartContextType = {
    cart,
    cartTotalPrice,
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    clearCart,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider, useCart };
