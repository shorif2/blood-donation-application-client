
import Welcome from "../../../components/Donar/Welcome";
import DonarDashboard from "../../../components/Donar/DonarDashboard";
import AdminDash from "../../../components/Donar/AdminDash";
import useAdmin from "../../../hooks/useAdmin";
import useAuth from "../../../hooks/useAuth";


const DashHome = () => {
    const [admin] = useAdmin()
    const { user } = useAuth()
    console.log(admin);
    return (
        <div>
            <Welcome name={user.displayName} ></Welcome>

            {/* Donar */}
            {
                admin == true ? <>
                <AdminDash></AdminDash>

                </> :
                    <>
                      <DonarDashboard></DonarDashboard>  
                    </>
            }



        </div>
    );
};

export default DashHome;