
import Welcome from "../../../components/Donar/Welcome";
import DonarDashboard from "../../../components/Donar/DonarDashboard";
import AdminDash from "../../../components/Donar/AdminDash";
import useAdmin from "../../../hooks/useAdmin";
import useAuth from "../../../hooks/useAuth";
import useUserData from "../../../hooks/useUserData";


const DashHome = () => {
    const [admin] = useAdmin()
    const { user } = useAuth()

    const [myBioData] = useUserData() 
    return (
        <div>
            <Welcome name={user.displayName} ></Welcome>

            {/* Donar */}
            {
             myBioData?.role ==='Volunteer' || admin == true ? <>
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