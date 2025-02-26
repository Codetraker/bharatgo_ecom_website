import { useContext, useState } from "react";
import { HiPlus } from "react-icons/hi2";
import { RiCheckFill } from "react-icons/ri";
import { ShopContext } from "../Context/ShopContext";

export const ProdCard = ({ product, detailHandler }) => {
    const { addToCart, cart } = useContext(ShopContext);
    const isSelected = cart.some(item => item.id === product.id);
    const handleAddToCart = () => {
        addToCart(product);
        setSelected(true);
    };
    return (
        <div className="w-60 h-59 px-2 relative">
            {!isSelected && <div className="bg-white rounded-full absolute right-4 top-2 cursor-pointer" onClick={handleAddToCart}><HiPlus size={23}/></div>}
            {isSelected && <div className="bg-black text-white rounded-full absolute right-4 top-2 "><RiCheckFill size={23}/></div>}
            <div className="cursor-pointer" onClick={()=> detailHandler(product)}>
                <div className="bg-gray-100/65 text-sm font-light absolute px-2 rounded-lg top-41 left-3">
                    {product.category.name}
                </div>
                <div className="bg-gray-500 h-47 rounded-lg">
                    <img src={product.images[0]} alt="Profile" className="w-full h-full object-cover" />
                </div>
                <div className="h-10 flex items-center justify-between">
                    <div className="text-sm font-light">{product.title}</div>
                    <div className="text-lg font-semibold ml-2">{product.price}$</div>
                </div>
            </div>
        </div>
    );
};