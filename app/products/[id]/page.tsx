'use client'
import Image from "next/image";
import styles from "./page.module.css";
import getOneProduct from "@/utils/getOneProduct";
import Link from "next/link";

export default async function ProductDetails({ params }: { params: { id: string } }) {

  const fetchData: Promise<any> = getOneProduct(params.id);
  const product = await fetchData;
  console.log(product.data);

  return (
    <div className={styles.main}>
      <div className={styles.colLeft}>
      <p className={styles.voltar}>
      <Image
          className={styles.iconBack}
          src="/icon-back.svg"
          alt="Next.js Logo"
          width={22}
          height={22}
        />
        <Link href="/products">
          Voltar
        </Link>
      </p>
      <Image
          className={styles.productImage}
          src={product.data.image}
          alt="Next.js Logo"
          width={400}
          height={500}
        />

      </div>
      <div className={styles.colRight}>
        <p className={styles.category}>{product.data.category}</p>
        <h1>{product.data.title}</h1>
        <p className={styles.price}>R$ {product.data.price}</p>
        <p>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>
        <p className={styles.description}>Descrição</p>
        <p className={styles.textDescription}>{product.data.description}</p>
        <button className={styles.btnAddToCart} onClick={()=>alert("Adicionado ao Carrinho")}>Adicionar ao carrinho</button>
      </div>
    </div>
  );
}
