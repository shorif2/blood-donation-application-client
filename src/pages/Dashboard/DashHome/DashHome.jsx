

import Welcome from "../../../components/Donar/Welcome";
import DonarDashboard from "../../../components/Donar/DonarDashboard";
import AdminDash from "../../../components/Donar/AdminDash";


const DashHome = () => {
    return (
        <div>
            <h2 className="text-2xl font-semibold">
            Dashboard
            </h2>
            <Welcome ></Welcome>

            {/* Donar */}
            <DonarDashboard></DonarDashboard>
            <AdminDash></AdminDash>

        </div>
    );
};

export default DashHome;