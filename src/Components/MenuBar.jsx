import { IoMdCart } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { useContext } from "react";

export const MenuBar = () => {
    const { showCartHandler, cart } = useContext(ShopContext);
    const navigate = useNavigate();
    const location = useLocation();
    const isActive = (path) => location.pathname === path ? "border-b-1" : "";
    return (
        <div className="w-full h-18 border-b-2 border-gray-200 py-5 px-8 flex justify-between fixed z-50 bg-white">
            <div className="flex">
                <div onClick={() => navigate("/")} className="text-lg font-semibold mr-4 cursor-pointer">Shopi</div>
                <div onClick={() => navigate("/")} className={`mr-4 text-sm font-light mt-1 cursor-pointer ${isActive("/")}`}>All</div>
                <div onClick={() => navigate("/clothes")} className={`mr-4 text-sm font-light mt-1 cursor-pointer ${isActive("/clothes")}`}>Clothes</div>
                <div onClick={() => navigate("/electronics")} className={`mr-4 text-sm font-light mt-1 cursor-pointer ${isActive("/electronics")}`}>Electronics</div>
                <div onClick={() => navigate("/furniture")} className={`mr-4 text-sm font-light mt-1 cursor-pointer ${isActive("/furniture")}`}>Furnitures</div>
                <div onClick={() => navigate("/toys")} className={`mr-4 text-sm font-light mt-1 cursor-pointer ${isActive("/toys")}`}>Toys</div>
            </div>
            <div className="flex">
                <div className="mr-4 text-sm font-light text-gray-500 mt-1">sbatesting@test.com</div>
                <div onClick={() => navigate("/my-orders")} className={`mr-4 text-sm font-light mt-1 cursor-pointer ${isActive("/my-orders")}`}>My Orders</div>
                <div onClick={() => navigate("/my-account")} className={`mr-4 text-sm font-light mt-1 cursor-pointer ${isActive("/my-account")}`}>My Account</div>
                <div className="mr-2 text-sm font-light mt-1 cursor-pointer" onClick={showCartHandler}>
                    <IoMdCart size={23}/>
                </div>
                <div className="mr-4 text-sm font-light mt-1">{cart.length}</div>
            </div>
        </div>
    );
};