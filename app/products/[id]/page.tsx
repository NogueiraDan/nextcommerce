"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import getOneProduct from "@/utils/getOneProduct";
import Link from "next/link";
import { useCart } from "@/context/cartContext";

export default function ProductDetails({ params }: { params: { id: string } }) {
  useEffect(() => {
    const fetchData = getOneProduct(params.id);
    fetchData
      .then((product) => {
        setProduct(product.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [product, setProduct] = useState<any>([]);
  const { addToCart, cart, clearCart } = useCart();

  const handleAddToCart = () => {
    // Chama a função addToCart com o produto que você deseja adicionar
    addToCart(product);
    alert("Produto adicionado ao carrinho!")
    console.log("Carrinho atual:", cart);
  };

  
  return (
    <div className={styles.main}>
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
        <Image
          className={styles.productImage}
          src={product.image}
          alt="Product image"
          width={450}
          height={500}
        />
      </div>
      <div className={styles.colRight}>
        <p className={styles.category}>{product.category}</p>
        <h1>{product.title}</h1>
        <p className={styles.price}>R$ {product.price}</p>
        <p>
          *Frete de R$40,00 para todo o Brasil. Grátis para compras acima de
          R$900,00.
        </p>
        <p className={styles.description}>Descrição</p>
        <p className={styles.textDescription}>{product.description}</p>
        <button className={styles.btnAddToCart} onClick={handleAddToCart}>
          {" "}
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}
