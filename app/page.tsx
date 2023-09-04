import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Bem vindo à DevStore</h1>
      <h2>Comece agora a explorar!</h2>
      <Link href="/products" className={styles.linkPLP}>
        Explorar produtos
      </Link>
    </main>
  );
}
