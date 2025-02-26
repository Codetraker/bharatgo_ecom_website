import { HiPlus } from "react-icons/hi2";
export const DetailBox = ({product, cancelHandler}) => {
    return (
        <div className="bg-white w-90 h-155 rounded-lg border fixed absolute right-0 top-19 z-50">
            <div className="flex justify-between py-4 px-6">
                <div className="text-xl font-semibold">Detail</div>
                <div className="rotate-45 cursor-pointer" onClick={cancelHandler}><HiPlus size={25}/></div>
            </div>
            <div className="h-75 flex justify-center items-center mb-3">
                <div className="bg-slate-300 h-full w-70 rounded-xl">
                    <img src={product.images[0]} alt="Profile" className="w-full h-full object-cover" />
                </div>
            </div>
            <div className="text-2xl font-semibold px-4 py-4 text-center">${product.price}</div>
            <div className="px-4 text-center font-semibold">{product.title}</div>
            <div className="px-4 text-sm font-light">{product.description}</div>
        </div>
    );
};