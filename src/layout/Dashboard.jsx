import { Link, NavLink, Outlet } from "react-router-dom";

import Container from "../components/Shared/Container";


import { HouseLine, HandHeart, FolderSimplePlus, User, CaretDown, Bell, Users, Notepad, HandsPraying } from "@phosphor-icons/react";
import useAdmin from "../hooks/useAdmin";
import useUserData from "../hooks/useUserData";
// import useVolunteer from "../hooks/useVolunteer";

const Dashboard = () => {
    const [admin] = useAdmin()

    

    const [myBioData] = useUserData()
    
    const { name, avatar,  role
    } = myBioData || '';
 console.log(role);
    return (
        <Container>
            
            <div className="flex">


                {/* Sidebar */}
                <div className="w-1/5 min-h-screen bg-gray-200">

                   <div className="flex px-8 pt-2">
                   <img src="/public/blood.png" className="w-12 h-12" alt="" />
                   </div>

                    {/* Dashboard */}

                <div className="flex flex-col gap-6 pt-6 px-8">
                        <div className="flex gap-4">
                            <HouseLine size={28} /> <NavLink to="/dashboard">Dashboard </NavLink>
                        </div>

                        
                    </div>

                    {/* Admin Pages */}
                    {role === 'Volunteer' || admin === true?
                    <>
                    <div className="flex flex-col gap-6 pt-6 px-8">
                    <div className="flex gap-4">
                    <HandsPraying size={28} /> <NavLink to="/dashboard/all-blood-donation-request">Donation Request</NavLink>
                        </div>
                    <div className="flex gap-4">
                    <Users size={28} /> <NavLink to="/dashboard/all-users">All Users</NavLink>
                        </div>
                    <div className="flex gap-4">
                    <Notepad size={28} /> <NavLink to="/dashboard/content-management">Content Management</NavLink>
                        </div>
                        {/* all blood donation request */}
                    
                    </div>
                    </>:
                    
                    <>
                    <div className="flex flex-col gap-6 pt-6 px-8">
                        {/* My Donation Requests */}
                        <div className="flex gap-4">
                            <HandHeart size={28} /><NavLink to="/dashboard/my-donation-requests">My Donation Requests</NavLink>
                        </div>

                        <div className="flex gap-4">
                            <FolderSimplePlus size={28} /><NavLink to="/dashboard/create-donation-request">Create Donation Request</NavLink>
                        </div>
                    </div>
                    </>
                    }
                    


                    {/* Donar Pages */}
                    

                    <div className="absolute bottom-10 px-8">
                        <div className="flex gap-4">
                            <HouseLine size={28} /><NavLink to="/">Return Home</NavLink>
                        </div>
                        <div className="flex gap-4">
                            <User size={28} /><NavLink to="/dashboard/profile">Profile</NavLink>
                        </div>
                    </div>

                </div>


                {/* Outlet */}
                <div className="bg-base-200 w-4/5 px-6">
                <div className="bg-white flex justify-between items-center mb-6">
                <div className="flex pl-8">
                </div>

                
                {/* profile */}
                <div className=" flex justify-center items-center gap-3 py-2 pr-4">
                <Bell className="mt-2" size={28} />
                    <div>
                        <img src={avatar} alt="" className="object-cover w-10 h-10 rounded-full dark:bg-gray-500" />
                    </div>
                    <div>
                        <h4 className="font-medium">{name}</h4>
                        <span className="text-xs dark:text-gray-400">{role}</span>
                    </div>
                    <CaretDown size={24} />
                </div>
            </div>
                    <div className="bg-base-200">
                    <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Dashboard;