export default async function getAllCategories() {
    // const res = await fetch("http://localhost:3000/api/categories");
    const res = await fetch("https://fakestoreapi.com/products/categories");
    if (!res.ok) throw new Error("Algo deu errado.");
    return res.json();
  }
  