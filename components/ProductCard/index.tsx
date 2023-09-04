import styles from "./productcard.module.css";
import Image from "next/image";
import Link from "next/link";

type ProductProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductProps) {
  
  return (
    <>
      <div className={styles.card}>
        <Link href={`/products/${product.id}`}>
        <Image
          className={styles.logo}
          src={product.image}
          alt="Next.js Logo"
          width={250}
          height={250}
          priority
        />
        {product.title}
        <p className={styles.price}>R$ {product.price}</p>
        </Link>
      </div>
    </>
  );
}
