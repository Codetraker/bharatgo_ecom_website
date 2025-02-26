import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home";
import { Clothes } from "./Pages/Clothes";
import { Electronics } from "./Pages/Electronics";
import { Furniture } from "./Pages/Furniture";
import { Toys } from "./Pages/Toys";
import { MyOrder } from "./Pages/MyOrder";
import { MyAccount } from "./Pages/MyAccount";
import { ShopProvider, ShopContext } from "./Context/ShopContext";
import { MyOrderBox } from "./Components/MyOrderBox";
import { useContext } from "react";
import { OrderDetail } from "./Components/OrderDetail";

function AppContent() {
    const { showCart } = useContext(ShopContext);

    return (
        <>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/clothes" element={<Clothes />} />
                    <Route path="/electronics" element={<Electronics />} />
                    <Route path="/furniture" element={<Furniture />} />
                    <Route path="/toys" element={<Toys />} />
                    <Route path="/my-orders" element={<MyOrder />} />
                    <Route path="/my-account" element={<MyAccount />} />
                    <Route path="/my-orders/:id" element={<OrderDetail />} />
                </Routes>
            {showCart && <MyOrderBox />}
        </>
    );
}

function App() {
    return (
        <ShopProvider>
            <AppContent />
        </ShopProvider>
    );
}

export default App;
