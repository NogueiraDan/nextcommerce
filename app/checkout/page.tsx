"use client";
import React from "react";
import styles from "./checkout.module.css";
import { useCart } from "@/context/cartContext";
import Image from "next/image";
import Link from "next/link";

const Checkout = () => {
  const { cart, removeFromCart, clearCart, incrementQuantity, decrementQuantity } = useCart();
  const total = cart.length;

  return (
    <div className={styles.checkoutWrapper}>
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
        <p className={styles.checkoutSubTitle}>Total ({total} produtos) - R$161,00</p>

        {cart.map((item) => {
          return (
            <>
              <div className={styles.checkoutProduct}>
                <div className={styles.checkoutProductImage}>
                <img src={item.image} alt="Imagem" className={styles.productImage}/>
                </div>
                <div className={styles.checkoutProductName}>
                  
                  <p className={styles.productName}>{item.title}</p>

                  <p className={styles.productDescription}> {item.description} </p>

                  <div className={styles.checkoutProductQuantity}>
                    <span className={styles.quantitySelector} onClick={()=>decrementQuantity(item.id)}>-</span>
                    <p>{item.quantity}</p>
                    <span className={styles.quantitySelector} onClick={()=>incrementQuantity(item.id)}>+</span>
                  </div>
                </div>
                <div className={styles.checkoutProductActions}>
                  <Image
                    className={styles.iconRemove}
                    onClick={() => alert("Removeu")}
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
                <p className={styles.summaryPrice}>R$ 161,00</p> 
            </div>

            <div className={styles.summaryPriceWrapper}>
                <p className={styles.summaryPrice}>Entrega</p>
                <p className={styles.summaryPrice}>R$ 40,00</p> 
            </div>
            <div className={styles.summaryTotalWrapper}>
                <p className={styles.summaryTotal}>Total</p>
                <p className={styles.summaryTotal}>R$ 201,00</p>
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
    </div>
  );
};

export default Checkout;
