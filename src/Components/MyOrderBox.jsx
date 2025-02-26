import { HiPlus } from "react-icons/hi2";
import { MyOrderBoxCard } from "./MyOrderBoxCard";
import { ShopContext } from "../Context/ShopContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom"; 

export const MyOrderBox = () => {
    const { cart, totalPrice, closeCartHandler, placeOrder } = useContext(ShopContext);
    const navigate = useNavigate();
    const handleCheckout = () => {
        placeOrder();
        closeCartHandler();
        navigate("/my-orders");
    };

    return (
        <div className="bg-white w-90 h-155 rounded-lg border fixed right-0 top-19 z-50 shadow-lg">
            {/* Header Section */}
            <div className="flex justify-between py-6 px-6 border-b border-gray-300">
                <div className="text-xl font-semibold">My Order</div>
                {/* Close Button */}
                <button onClick={closeCartHandler} className="rotate-45 cursor-pointer">
                    <HiPlus size={25} />
                </button>
            </div>

            {/* Cart Items Section */}
            <div className="h-115 px-3 overflow-auto">
                {cart.length > 0 ? (
                    cart.map((item) => <MyOrderBoxCard key={item.id} product={item} />)
                ) : (
                    <div className="text-center text-gray-500 py-10">Your cart is empty</div>
                )}
            </div>

            {/* Total Price Section */}
            <div className="mx-3 border-t border-gray-400 pt-3 flex justify-between">
                <div className="font-semibold">Total:</div>
                <div className="text-lg font-bold">${(totalPrice || 0).toFixed(2)}</div>
            </div>

            {/* Checkout Button */}
            <div className="flex justify-center items-center mt-2">
                <button className="bg-black text-white w-[85%] font-semibold rounded-md h-7" onClick={handleCheckout}>Checkout</button>
            </div>
        </div>
    );
};
