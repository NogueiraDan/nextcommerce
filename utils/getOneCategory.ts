  
export default async function getOneCategory(category:any) {
  const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
  if (!res.ok) throw new Error("Algo deu errado.");
  return res.json();
}
