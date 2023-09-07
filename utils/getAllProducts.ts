export default async function getAllProducts() {
    // const res = await fetch("http://localhost:3000/api/products");
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) throw new Error("Algo deu errado.");
    return res.json();
  }
  