import DonationRequest from "../../../components/Donar/DonationRequest";
import Welcome from "../../../components/Donar/Welcome";


const DashHome = () => {
    return (
        <div>
            <h2 className="text-2xl font-semibold">
            Dashboard
            </h2>
            <Welcome ></Welcome>
            <DonationRequest></DonationRequest>
        </div>
    );
};

export default DashHome;