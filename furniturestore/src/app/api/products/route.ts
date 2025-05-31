// app/api/products/route.ts

import { NextResponse } from "next/server";
import { products } from "./data";

export async function GET() {
  return NextResponse.json(products);
}
