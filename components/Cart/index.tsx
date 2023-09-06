import React from "react";
import styles from "./cart.module.css";
import { useCart } from "@/context/cartContext";

const Cart = ({ open, setOpen }: any) => {
  const { cart, removeFromCart } = useCart();

  const handleRemoveItem = (itemId: any) => {
    removeFromCart(itemId);
  };

  return (
    <div className={styles.cart}>
      <div className={styles.cartHeader}>
        <h1>Carrinho</h1>
        <span onClick={() => setOpen(!open)}>Fechar</span>
      </div>
      {cart.length>0 && (
        <>
          <div className={styles.cartBody}>
            {cart.map((item) => {
              return (
                <>
                  <p>{item.title}</p>
                  <p>{item.quantity} unidades</p>
                  <button onClick={() => handleRemoveItem(item.id)}>
                    Remove
                  </button>
                </>
              );
            })}
          </div>
          <div>
            <span>SUBTOTAL</span>
            <span>$100</span>
          </div>
          <button>PROCEED TO CHECKOUT</button>
          <span>Reset Cart</span>
        </>
      )}
      {
        cart.length===0 && (
          <>
            <h2>Seu carrinho tá vazio!</h2>
          </>
        )
      }
    </div>
  );
};

export default Cart;
