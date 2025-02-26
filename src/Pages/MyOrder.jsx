import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MenuBar } from "../Components/MenuBar";
import { BiSolidStore } from "react-icons/bi";
import { ShopContext } from "../Context/ShopContext";

export const MyOrder = () => {
    const { myOrders } = useContext(ShopContext);
    const navigate = useNavigate();

    return (
        <div>
            <MenuBar />
            <div className="pt-18"></div>
            <div className="w-full text-center py-2 text-lg font-semibold">My Orders</div>

            <div className="w-full flex flex-col items-center my-4">
                {myOrders.length === 0 ? (
                    <div className="text-gray-500">No orders placed yet.</div>
                ) : (
                    myOrders.map((order) => (
                        <div
                            key={order.id}
                            className="border h-20 w-100 flex justify-center items-center text-center rounded-lg px-5 mb-4 cursor-pointer"
                            onClick={() => navigate(`/my-orders/${order.id}`)}
                        >
                            <div className="flex items-center gap-2 font-semibold">
                                <BiSolidStore size={20} />
                                <div>${order.total.toFixed(2)}</div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};
