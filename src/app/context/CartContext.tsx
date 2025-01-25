"use client"
import { createContext , useState , useContext , ReactNode} from "react";
import { IProduct } from "@/app/types/types";

interface CartItems extends IProduct {
    quantity:number;
}
interface CartContextType {
    cartItems : IProduct[],
    totalPrice:number,
    addToCart: (product:IProduct) => void,
    removeFromCart: (slug:string) => void,
    increaseQuantity: (slug:string) => void,
    decreaseQuantity: (slug:string) => void,

 }
 const cartContext = createContext<CartContextType | undefined>(undefined);


 export const CartProvider = ({ children } : {children:ReactNode}) => {
    const [cartItems, setCartItems] = useState<CartItems[]>([]);
    const addToCart = (product:IProduct) => {
        setCartItems(prevCartItems => {
            const exixtingItem  = prevCartItems.find((item) => item.slug === product.slug);
            if (exixtingItem) {
                return prevCartItems.map(item => item.slug === product.slug ? {...item, quantity:item.quantity + 1} : item);
            }
            return [...prevCartItems, {...product, quantity: 1 }];
        });

    };

    const increaseQuantity = (slug:string) => {
        setCartItems(prevCartItems => prevCartItems.map(item => item.slug === slug ? {...item, quantity:item.quantity + 1} : item));
    };
    const decreaseQuantity = (slug:string) => {
        setCartItems(prevCartItems => prevCartItems.map(item => item.slug === slug && item.quantity > 1 ? {...item, quantity:item.quantity - 1} : item).filter(item => item.quantity>0));
    };
    const removeFromCart = (slug:string) => {
        setCartItems(prevCartItems => prevCartItems.filter(item => item.slug!== slug));
    };
    const totalPrice = cartItems.reduce((total , item) => total + item.price , 0)
    return (
        <cartContext.Provider value={{ cartItems, totalPrice, addToCart, removeFromCart , increaseQuantity , decreaseQuantity }}>
            {children}
        </cartContext.Provider>
    );
 }


 export const useCart = ():CartContextType => {
    const context = useContext(cartContext)
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
 }

