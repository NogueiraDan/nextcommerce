export default async function getOneProduct(id:any) {
    const res = await fetch(`http://localhost:3000/api/products/${id}`);
    if (!res.ok) throw new Error("Algo deu errado.");
    return res.json();
  }
  