import React from "react";
import styles from "./cart.module.css";
import { useCart } from "@/context/cartContext";
import Image from "next/image";
import Link from "next/link";

const Cart = ({ open, setOpen }: any) => {
  const {
    cart,
    removeFromCart,
    clearCart,
    cartTotalPrice,
    decrementQuantity,
    incrementQuantity,
  } = useCart();

  const handleRemoveItem = (itemId: any) => {
    removeFromCart(itemId);
  };

  return (
    <div className={styles.cart}>
      <div className={styles.cartHeader}>
        <h1>Carrinho</h1>
        <span onClick={() => setOpen(!open)} className={styles.iconClose}>
          Fechar
        </span>
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
                      <p>Quantidade: {item.quantity}</p>
                      <p>R${item.price}/unidade</p>
                    </div>

                    <Image
                      className={styles.productRemove}
                      onClick={() => handleRemoveItem(item.id)}
                      src="/icon-remove.svg"
                      alt="Imagem do produto"
                      width={20}
                      height={20}
                    />
                    <div className={styles.checkoutProductQuantity}>
                      <span
                        className={styles.quantitySelector}
                        onClick={() => decrementQuantity(item.id)}
                      >
                        -
                      </span>
                      <p>{item.quantity}</p>
                      <span
                        className={styles.quantitySelector}
                        onClick={() => incrementQuantity(item.id)}
                      >
                        +
                      </span>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <div>
            <span>
              <strong>TOTAL: </strong>
            </span>
            <span>{cartTotalPrice}</span>
          </div>
          <Link href="/checkout">
            <button className={styles.btnCheckout}>FINALIZAR A COMPRA</button>
          </Link>

          <button className={styles.btnClearCart} onClick={clearCart}>
            ESVAZAIR O CARRINHO
          </button>
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
