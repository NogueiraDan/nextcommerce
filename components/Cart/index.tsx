'use client'
import React from "react";
import styles from "./cart.module.css"

const Cart = ({open, setOpen}:any) => {

  return (
    <div className={styles.cart}>
      <div className={styles.cartHeader}>
      <h1>Carrinho</h1>
      <span onClick={()=>setOpen(!open)}>Fechar</span>
      </div>
      <div className={styles.cartBody}>
        <ul>
          <li>Produto 1</li>
          <li>Produto 2</li>
          <li>Produto 3</li>
        </ul>
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