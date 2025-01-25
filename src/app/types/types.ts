export interface IProduct {
    slug: string;
    name: string;
    price: number;
    image: string;
    category?: string;
    description: string;
    rating: number;
    numReviews: number;
    countInStock: number;
    discount?: number;
    originalPrice?: number;
    quantity?:number ;
    }