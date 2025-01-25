import { OnSale } from "@/app/data/onsale";

export function GET() {
    return new Response(JSON.stringify(OnSale));
}