"use client";

import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.colLeft}>
        <Link href="/">
          <Image
            className={styles.logo}
            src="/devstore.png"
            alt="Next.js Logo"
            width={180}
            height={37}
          />
        </Link>
      </div>
      <div className={styles.colRight}>
        <div className={styles.searchWrapper}>
          <input
            type="text"
            placeholder="Procurando por algo específico?"
            className={styles.search}
          />
          <Image
            className={styles.iconSearch}
            src="/icon-search.svg"
            alt="Next.js Logo"
            width={30}
            height={30}
            onClick={() => alert("Buscou!")}
          />
        </div>
        <div
          className={styles.cartWrapper}
          onClick={() => alert("Abriu o cart!")}
        >
          <Image
            src="/icon-cart.svg"
            alt="Next.js Logo"
            width={30}
            height={30}
          />
          <p className={styles.cartNotification}>0</p>
        </div>
      </div>
    </header>
  );
}
