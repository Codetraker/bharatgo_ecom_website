import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { MenuBar } from "../Components/MenuBar";
import { BiArrowBack } from "react-icons/bi";

export const OrderDetail = () => {
    const { myOrders } = useContext(ShopContext);
    const { id } = useParams();
    const navigate = useNavigate();

    const order = myOrders.find(order => order.id === parseInt(id));
    
    if (!order) {
        return <div className="text-center mt-10 text-red-500">Order Not Found</div>;
    }

    return (
        <div>
            <MenuBar />
            <div className="pt-18"></div>
            
            <div className="flex items-center justify-between px-5 py-3">
                <div className="text-lg font-semibold w-full text-center">Order Details</div>
                <div></div>
            </div>

            <div className="max-w-xl mx-auto border rounded-lg p-5 my-5 shadow-md">
                <div className="flex justify-between">
                    <div className="text-lg font-semibold mb-4">Total: ${order.total.toFixed(2)}</div>
                    <button 
                        className="flex items-center text-gray-600 hover:text-black" 
                        onClick={() => navigate("/my-orders")}
                    >
                        <BiArrowBack size={18} className="mr-1" />
                    </button>
                </div>
               
                <div className="space-y-4">
                    {order.items.map(item => (
                        <div key={item.id} className="p-3 rounded-lg flex items-center gap-4">
                            <img 
                                src={item.images?.[0] || "/default-image.jpg"} 
                                alt={item.title} 
                                className="w-16 h-16 object-cover rounded-md"
                            />
                            
                            <div>
                                <div className="font-semibold">{item.title}</div>
                                <div>Quantity: {item.quantity}</div>
                                <div>Price: ${item.price.toFixed(2)}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
