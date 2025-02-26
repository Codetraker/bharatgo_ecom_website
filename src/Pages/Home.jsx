import { useContext, useEffect, useState } from "react";
import { DetailBox } from "../Components/DetailBox";
import { MenuBar } from "../Components/MenuBar";
import { ProdCard } from "../Components/ProdCard";
import { ShopContext } from "../Context/ShopContext";

export const Home = () => {
    const [showDetail, setshowDetail] = useState(false);
    const [data, setdata] = useState(null);

    const detailHandler = (product) => {
        console.log("In detailHAndler")
        setshowDetail(!showDetail);
        setdata(product);
    }
    const canceHandler = () =>{
        setshowDetail(false);
        setdata(null);
    }
    const { products, loading } = useContext(ShopContext);
    console.log(products)
    if (loading) return <div>Loading...</div>;
    return (
        <>
            <MenuBar />
            <div className="pt-18"></div>
            <div className="w-full text-center py-2">Home</div>
            <div className="w-full h-15 justify-items-center my-2">
                <div className="border-1 h-full w-80 flex text-center rounded-lg px-5">
                    <input placeholder="Search a product" className="w-full outline-none"/>
                </div>
            </div>
            {showDetail && <DetailBox product={data} cancelHandler={canceHandler}/>}
            <div className="mt-4 px-63 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {products.map((product) => (
                    <ProdCard key={product.id} product={product} detailHandler={detailHandler} />
                ))}
            </div>
        </>
    );
};