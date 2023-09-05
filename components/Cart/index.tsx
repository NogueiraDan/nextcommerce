import React from "react";
import styles from "./cart.module.css"
import { useCart } from "@/context/cartContext";

const Cart = ({open, setOpen}:any) => {

  const {state} = useCart();
  return (
    <div className={styles.cart}>
      <div className={styles.cartHeader}>
      <h1>Carrinho</h1>
      <span onClick={()=>setOpen(!open)}>Fechar</span>
      </div>
      <div className={styles.cartBody}>
      {state.products.map((product) => (
          <p key={product.id}>{product.name}</p>
        ))}
      </div>
      <div>
        <span>SUBTOTAL</span>
        <span>$100</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span>
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;