import { NextResponse } from "next/server";

export async function GET(request: Request) {

  const category = request.url.slice(request.url.lastIndexOf("/") + 1);
  const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
  const data = await res.json();

  return NextResponse.json({ data });
}
