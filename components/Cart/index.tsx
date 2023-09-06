import React from "react";
import styles from "./cart.module.css";
import { useCart } from "@/context/cartContext";
import Image from "next/image";

const Cart = ({ open, setOpen }: any) => {
  const { cart, removeFromCart, clearCart } = useCart();

  const handleRemoveItem = (itemId: any) => {
    removeFromCart(itemId);
  };

  return (
    <div className={styles.cart}>
      <div className={styles.cartHeader}>
        <h1>Carrinho</h1>
        <span onClick={() => setOpen(!open)} className={styles.iconClose}>Fechar</span>
      </div>
      {cart.length > 0 && (
        <>
          <div className={styles.cartBody}>
            {cart.map((item) => {
              return (
                <>
                  <div className={styles.productWrapper}>
                    <div>
                      <Image
                        className={styles.productImage}
                        src={item.image}
                        alt="Imagem do produto"
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className={styles.productName}>
                      <p>{item.title}</p>
                      <p>{item.quantity} unidades</p>
                    </div>
                    <button onClick={() => handleRemoveItem(item.id)}>
                      Remover
                    </button>
                  </div>
                </>
              );
            })}
          </div>
          <div>
            <span>SUBTOTAL</span>
            <span>$100</span>
          </div>
          <button>PROCEED TO CHECKOUT</button>
          <span style={{cursor: "pointer"}} onClick={clearCart}>Reset Cart</span>
        </>
      )}
      {cart.length === 0 && (
        <>
          <h2>Seu carrinho tá vazio!</h2>
        </>
      )}
    </div>
  );
};

export default Cart;
