"use client";
import React, { useEffect } from "react";
import styles from "./checkout.module.css";
import { useCart } from "@/context/cartContext";
import Image from "next/image";
import Link from "next/link";

const Checkout = () => {
  const {
    cart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    cartTotalPrice,
  } = useCart();
  const total = cart.length;
  const shipping = 40;
  const subtotal = parseFloat(cartTotalPrice) + shipping;

  return (
    <div className={styles.checkoutWrapper}>
      {cart.length > 0 && (
        <>
          <div className={styles.colLeft}>
            <p className={styles.voltar}>
              <Image
                className={styles.iconBack}
                src="/icon-back.svg"
                alt="Imagem do produto"
                width={22}
                height={22}
              />
              <Link href="/products">Voltar</Link>
            </p>
            <h1 className={styles.checkoutTitle}>SEU CARRINHO</h1>
            <p className={styles.checkoutSubTitle}>
              Total ({total} produtos) - R$ {cartTotalPrice}
            </p>

            {cart.map((item) => {
              return (
                <>
                  <div className={styles.checkoutProduct}>
                    <div className={styles.checkoutProductImage}>
                      <img
                        src={item.image}
                        alt="Imagem"
                        className={styles.productImage}
                      />
                    </div>
                    <div className={styles.checkoutProductName}>
                      <p className={styles.productName}>{item.title}</p>

                      <p className={styles.productDescription}>
                        {" "}
                        {item.description}{" "}
                      </p>

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
                    <div className={styles.checkoutProductActions}>
                      <Image
                        className={styles.iconRemove}
                        onClick={() => removeFromCart(item.id)}
                        src="/icon-remove.svg"
                        alt="Imagem do produto"
                        width={20}
                        height={20}
                      />
                      <p className={styles.productPrice}>R${item.price}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>

          <div className={styles.colRight}>
            <div className={styles.orderSummary}>
              <p className={styles.summaryTitle}> Resumo do Pedido</p>

              <div className={styles.summaryPriceWrapper}>
                <p className={styles.summaryPrice}>Subtotal de Produtos</p>
                <p className={styles.summaryPrice}>R$ {cartTotalPrice}</p>
              </div>

              <div className={styles.summaryPriceWrapper}>
                <p className={styles.summaryPrice}>Entrega</p>
                <p className={styles.summaryPrice}>R$ {shipping}</p>
              </div>
              <div className={styles.summaryTotalWrapper}>
                <p className={styles.summaryTotal}>Total</p>
                <p className={styles.summaryTotal}>R$ {subtotal}</p>
              </div>

              <button className={styles.finishOrder}>FINALIZAR A COMPRA</button>
              <div className={styles.helpLinksWrapper}>
                <p className={styles.helpLinks}>Ajuda</p>
                <p className={styles.helpLinks}>Reembolsos</p>
                <p className={styles.helpLinks}>Entrega e Frete</p>
                <p className={styles.helpLinks}>Trocas e devoluções</p>
              </div>
            </div>
          </div>
        </>
      )}

      {cart.length <= 0 && (
        <div className={styles.checkoutEmpty}>
          <h1>Infelizmente seu carrinho está vazio 😢</h1>
          <Link href="/products" className={styles.checkoutEmptyLink}>Escolher produtos</Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
