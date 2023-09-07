"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import getAllProducts from "@/utils/getAllProducts";
import ProductCard from "@/components/ProductCard";
import getAllCategories from "@/utils/getAllCategories";
import getOneCategory from "@/utils/getOneCategory";


export default function Products() {
  useEffect(() => {
    const fetchData = getAllProducts();
    fetchData
      .then((product) => {
        setProducts(product);
      })
      .catch((error) => {
        console.log(error);
      });

    const fetchCategories = getAllCategories();
    fetchCategories
      .then((category) => {
        setCategories(category);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [products, setProducts] = useState<any>([]);
  const [categories, setCategories] = useState<any>([]);

  const handleShuffleCategory = (category:any) => {
    const fetchData = getOneCategory(category);
    fetchData
      .then((category) => {
        console.log(category)
        setProducts(category)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Utilizando o utilitário para fazer a ponte e pegar os produtos
  // const fetchData: Promise<any> = getAllProducts();
  // const products = await fetchData;
  // const fetchCategories:Promise<any> =  getAllCategories();
  // const categories = await fetchCategories;

  return (
    <main className={styles.main}>
      <div className={styles.categories}>
        <div className={styles.linkCategories}>
          {categories.map((category: any) => {
            return (
              <>
                <p onClick={() => handleShuffleCategory(category)}>
                  {category}
                </p>
              </>
            );
          })}
        </div>

        <div>
          <p>Order by</p>
        </div>
      </div>
      <div className={styles.cardWrapper}>
        {products?.map((product: Product, index: any) => {
          return (
            <>
              <ProductCard product={product} />
            </>
          );
        })}
      </div>
    </main>
  );
}
