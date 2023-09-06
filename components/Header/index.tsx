"use client";
import { useState } from "react";
import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/cartContext";
import MiniCart from "../Cart";

export default function Header() {
  const [open,setOpen] = useState(false)
  const {cart} = useCart();

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
          onClick={() => setOpen(!open)}
        >
          <Image
            src="/icon-cart.svg"
            alt="Next.js Logo"
            width={30}
            height={30}
          />
          <p className={styles.cartNotification}>{cart.length}</p>
        </div>
        {open &&  <MiniCart setOpen={setOpen} open={open}/> }
       
      </div>
    </header>
  );
}
