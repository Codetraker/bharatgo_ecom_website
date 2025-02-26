import { HiPlus, HiMinus } from "react-icons/hi2";
import { ShopContext } from "../Context/ShopContext";
import { useContext } from "react";

export const MyOrderBoxCard = ({ product }) => {
    const { addToCart, removeFromCart, removeItemCompletely } = useContext(ShopContext);

    return (
        <div className="flex pb-3 pt-3 border-b-1 border-gray-300">
            {/* Product Image */}
            <div className="bg-gray-500 w-22 h-20 rounded-lg">
                <img src={product.images[0]} alt={product.title} className="w-full h-full object-cover rounded-lg" />
            </div>

            {/* Product Details */}
            <div className="pl-2">
                <div className="font-thin text-sm">{product.title}</div>
                <div className="text-lg">${(product.price * product.quantity).toFixed(2)}</div>

                {/* Quantity Buttons */}
                <div className="flex">
                    <button onClick={() => removeFromCart(product.id)} className="bg-pink-200 rounded-lg mr-3 p-1">
                        <HiMinus size={22} />
                    </button>
                    <div className="bg-gray-200 rounded-lg mr-3 px-3 flex items-center justify-center">
                        {product.quantity}
                    </div>
                    <button onClick={() => addToCart(product)} className="bg-green-200 rounded-lg mr-3 p-1">
                        <HiPlus size={22} />
                    </button>
                </div>
            </div>

            {/* Remove Item Button */}
            <div className="flex items-center justify-center w-8">
                <button onClick={() => removeItemCompletely(product.id)} className="rotate-45">
                    <HiPlus size={25} />
                </button>
            </div>
        </div>
    );
};
