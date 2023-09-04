import { NextResponse } from "next/server";

export async function GET(request: Request) {

  const id = request.url.slice(request.url.lastIndexOf("/") + 1);
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();

  return NextResponse.json({ data });
}
