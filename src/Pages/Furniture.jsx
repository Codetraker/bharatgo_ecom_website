import { MenuBar } from "../Components/MenuBar";
import { ProdCard } from "../Components/ProdCard";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { DetailBox } from "../Components/DetailBox";

export const Furniture = () => {
    const [showDetail, setshowDetail] = useState(false);
    const [data, setdata] = useState();
    const detailHandler = (product) => {
        console.log("In detailHAndler")
        setshowDetail(!showDetail);
        setdata(product);
    }
    const canceHandler = () =>{
        setshowDetail(false);
        setdata();
    }
    const { products, loading } = useContext(ShopContext);
        
    if (loading) return <div>Loading...</div>;

    const clothesProducts = products.filter(product => product.category.id === 3);

    return (
        <>
            <MenuBar />
            <div className="pt-18"></div>
            <div className="w-full text-center py-2">Furniture</div>
            <div className="w-full h-15 justify-items-center my-2">
                <div className="border-1 h-full w-80 flex text-center rounded-lg px-5">
                    <input placeholder="Search a product" className="w-full outline-none"/>
                </div>
            </div>
            {showDetail && <DetailBox product={data} cancelHandler={canceHandler}/>}
            <div className="mt-4 px-63 grid grid-cols-4 gap-4">
                {clothesProducts.length > 0 ? (
                    clothesProducts.map((product) => (
                        <ProdCard key={product.id} product={product} detailHandler={detailHandler}/>
                    ))
                ) : (
                    <div className="col-span-4 text-center text-gray-500">No products found</div>
                )}
            </div>
        </>
    );
};