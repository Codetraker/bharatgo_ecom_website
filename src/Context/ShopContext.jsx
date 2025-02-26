import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showCart, setShowCart] = useState(false);
    const [cart, setCart] = useState([]);
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://api.escuelajs.co/api/v1/products");
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);
            
            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) =>
            prevCart
                .map((item) =>
                    item.id === productId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0)
        );
    };


    const removeItemCompletely = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    const deleteFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    const showCartHandler = () => {
        console.log("Cart toggled! Current state:", !showCart);
        setShowCart((prev) => !prev);
    };

    const closeCartHandler = () => setShowCart(false);

    const placeOrder = () => {
        if (cart.length === 0) return;
        const newOrder = {
            id: new Date().getTime(),
            items: cart,
            total: totalPrice,
            date: new Date().toLocaleString(),
        };
        setMyOrders((prevOrders) => [...prevOrders, newOrder]);
        setCart([]);
    };

    return (
        <ShopContext.Provider
            value={{
                products,
                loading,
                cart,
                addToCart,
                removeFromCart,
                deleteFromCart,
                totalPrice, 
                showCart,
                showCartHandler,
                closeCartHandler,
                removeItemCompletely,
                placeOrder,
                myOrders
            }}
        >
            {children}
        </ShopContext.Provider>
    );
};
