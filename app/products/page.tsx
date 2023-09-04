import styles from "./page.module.css";
import getAllProducts from "@/utils/getAllProducts";

export default async function Products() {
  
  // Utilizando o utilitário para fazer a ponte e pegar os produtos
  const fetchData: Promise<any> = getAllProducts();
  const products = await fetchData;
  console.log(products.data);

  return (
    <main className={styles.main}>
      <div className={styles.categories}>
        <div className={styles.linkCategories}>
          <p>Categories</p>
          <p>Categories</p>
          <p>Categories</p>
        </div>

        <div>
          <p>Order by</p>
        </div>
      </div>
      {products.data.map((product:Product, index:any) => {
          return (
            <>
              <p key={index}>
                {product.title}
              </p>
              <br />
            </>
          );
        })}
    </main>
  );
}
