import { OnSale } from "@/app/data/onsale";
import { NextResponse } from "next/server";




export async function GET() {
  // Function implementation hre
  return  NextResponse.json(OnSale);
}