import styles from "./page.module.css";
import getAllProducts from "@/utils/getAllProducts";
import ProductCard from "@/components/ProductCard";
import getAllCategories from "@/utils/getAllCategories";

export default async function Products() {
  // Utilizando o utilitário para fazer a ponte e pegar os produtos
  const fetchData: Promise<any> = getAllProducts();
  const products = await fetchData;
  const fetchCategories:Promise<any> =  getAllCategories();
  const categories = await fetchCategories;

  return (
    <main className={styles.main}>
      <div className={styles.categories}>
        <div className={styles.linkCategories}>
          {
            categories.data.map((category:any)=>{
              return(
                <>
                <p>{category}</p>
                </>
              )
            })
          }
          
        </div>

        <div>
          <p>Order by</p>
        </div>
      </div>
      <div className={styles.cardWrapper}>
        {products.data.map((product: Product, index: any) => {
          return (
            <>
              <ProductCard product={product}/>
            </>
          );
        })}
      </div>
    </main>
  );
}
