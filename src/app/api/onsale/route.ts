import { OnSale } from "@/app/data/onsale";




export async function GET() {
  // Function implementation here
  return new Response(JSON.stringify(OnSale));
}