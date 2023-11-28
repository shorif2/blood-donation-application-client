import { Link } from "react-router-dom";
import Container from "../Shared/Container";
import useAuth from "../../hooks/useAuth";


const Navbar = () => {
    const {user, logout} = useAuth()
    return (
        <Container>
            <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm gap-4 dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-52">
                        <li>Home</li>
                        <li>Dashboard</li>
                    </ul>
                </div>
                <div className="flex justify-center items-center">
                    <img className="w-16" src="/public/blood.png" alt="OneBlood Flow logo" />
                    <h2 className="text-2xl font-semibold">One<br />Blood</h2>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-4">
                <Link to='/'>Home</Link>
                <Link to='/search'>Search</Link>
                <Link to='/blood-donation-request'>Blood Requests</Link>
                    
                <Link to='/dashboard'>Dashboard</Link>
                    <Link to='/blog'>Blog</Link>
                    {user?
                    <></>:
                    <><Link to='/register'>Register</Link></>}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?
                    <>
                    <button onClick={()=>logout()}  className="btn btn-outline">Logout</button>
                    <div className="pl-4">
                    <div className="w-12 h-12 rounded-full  border border-red-500" >
                    <p>{user.displayName}</p>
                    </div>
                    </div>
                    </>:
                    <>
                    <Link to='/login' className="btn btn-outline" >Login</Link>
                    </>
                }
            </div>
        </div>
        </Container>
    );
};

export default Navbar;