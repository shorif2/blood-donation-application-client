import { CurrencyCircleDollar, HandsPraying, UsersThree } from "@phosphor-icons/react";
import DonationRequest from "../../../components/Donar/DonationRequest";
import Welcome from "../../../components/Donar/Welcome";


const DashHome = () => {
    return (
        <div>
            <h2 className="text-2xl font-semibold">
            Dashboard
            </h2>
            <Welcome ></Welcome>

            {/* Donar */}
            <DonationRequest></DonationRequest>
            <div className="w-full grid grid-cols-3 gap-6 ">
                <div className="flex justify-center flex-col items-center p-10 bg-green-300 space-y-2">
                <UsersThree  size={50} />
                <div className="text-center">
                <p className="text-5xl font-bold">28.7k</p>
                <p className="text-xl font-medium pt-2">Total User</p>
                </div>
                </div>
                <div className="flex justify-center flex-col items-center p-10 bg-green-400 space-y-2">
                <CurrencyCircleDollar size={50} />
                <div className="text-center">
                <p className="text-5xl font-bold">28.7k</p>
                <p className="text-xl font-medium pt-2">Total funding</p>
                </div>
                </div>
                <div className="flex justify-center flex-col items-center p-10 bg-green-500 space-y-2">
                <HandsPraying size={50} />
                <div className="text-center">
                <p className="text-5xl font-bold">28.7k</p>
                <p className="text-xl font-medium pt-2">Donation request</p>
                </div>
                </div>
            </div>

        </div>
    );
};

export default DashHome;