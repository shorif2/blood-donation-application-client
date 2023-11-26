import { Link, NavLink, Outlet } from "react-router-dom";

import Container from "../components/Shared/Container";


import { HouseLine, HandHeart, FolderSimplePlus, User, CaretDown, Bell, Users, Notepad, HandsPraying } from "@phosphor-icons/react";

const Dashboard = () => {
    return (
        <Container>
            <div className="flex justify-between items-center">
                <div className="flex pl-8">
                    <Link to='/'>
                        <div className="flex justify-center items-center pt-4">
                            <img className="w-12" src="/public/blood.png" alt="" />
                            <h2 className="font-bold">OneBlood</h2>
                        </div>
                    </Link>
                </div>

                {/* profile */}
                <div className="flex space-x-4">
                <Bell className="mt-2" size={28} />
                    <div>
                        <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                    </div>
                    <div>
                        <h4 className="font-bold">Leroy Jenkins</h4>
                        <span className="text-xs dark:text-gray-400">Blood Donar</span>
                    </div>
                    <CaretDown size={24} />
                </div>
            </div>
            <div className="flex">


                {/* Sidebar */}
                <div className="w-1/5 min-h-screen bg-gray-200">

                    {/* Admin Pages */}
                    <div className="flex flex-col gap-6 pt-6 px-8">
                    <div className="flex gap-4">
                    <Users size={28} /> <NavLink to="/dashboard/all-users">All Users</NavLink>
                        </div>
                    <div className="flex gap-4">
                    <Notepad size={28} /> <NavLink to="/dashboard/content-management">Content Management</NavLink>
                        </div>
                        {/* all blood donation request */}
                    <div className="flex gap-4">
                    <HandsPraying size={28} /> <NavLink to="/dashboard/all-blood-donation-request">Donation Request</NavLink>
                        </div>
                    </div>


                    {/* Donar Pages */}
                    <div className="flex flex-col gap-6 pt-6 px-8">
                        <div className="flex gap-4">
                            <HouseLine size={28} /> <NavLink to="/dashboard">Dashboard </NavLink>
                        </div>

                        {/* My Donation Requests */}
                        <div className="flex gap-4">
                            <HandHeart size={28} /><NavLink to="/dashboard/my-donation-requests">My Donation Requests</NavLink>
                        </div>

                        <div className="flex gap-4">
                            <FolderSimplePlus size={28} /><NavLink to="/dashboard/create-donation-request">Create Donation Request</NavLink>
                        </div>
                    </div>

                    <div className="absolute bottom-10 px-8">
                        <div className="flex gap-4">
                            <HouseLine size={28} /><NavLink to="/">Return Home</NavLink>
                        </div>
                        <div className="flex gap-4">
                            <User size={28} /><NavLink to="/">Profile</NavLink>
                        </div>
                    </div>

                </div>


                {/* Outlet */}
                <div className="bg-base-200 w-4/5 p-6">
                    <Outlet></Outlet>
                </div>
            </div>
        </Container>
    );
};

export default Dashboard;