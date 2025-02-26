import { MenuBar } from "../Components/MenuBar";

export const MyAccount = () => {
    return (
        <div>
        <MenuBar />
        <div className="pt-18"></div>
        <div className="w-full text-center mt-4 py-2">My Account</div>
        <div className="w-full flex justify-center my-2">
        <div className="border h-110 w-190 text-center rounded-lg px-5 flex flex-col items-center">
            <div className="font-semibold mt-10 mb-5">Created By:</div>
            <div className="h-64 w-64 border rounded-full overflow-hidden flex justify-center items-center mb-5">
            <img src="src/assets/image.png" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="font-semibold">Swaraj Bibhuprasad Acharya</div>
        </div>
        </div>
        </div>
    );
}