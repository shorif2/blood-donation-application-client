import toast from "react-hot-toast";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { useContext } from "react";
// import { NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

import useAxiosPublic from "../../hooks/useAxiosPublic";


const Login = () => {

    const axiosPublic = useAxiosPublic()

    const { login } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";

    const handleSignIn = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        login(email, password)
            .then((result) => {

                const loggedInUser = result.user;
                console.log(loggedInUser);
                const user = {email}
                toast.success('Login Successful !')
                
                axiosPublic.post('/jwt', user, {withCredentials: true})
                .then(res => {
                    console.log(res.data);
                    if (res.data.success){
                        navigate(from, {replace: true});
                    }
                })

            })
            .catch((error) => {
                console.log(error.message);
                toast.error(`${error.message}`)
            })

    }

    // previous code 
    //     e.preventDefault()
    //     const email = e.target.email.value;
    //     const password = e.target.password.value;
    //     login(email, password)
    //         .then(() => {
    //             toast.success('Login Successful !')
    //             navigate(from, {replace: true});
    //         })
    //         .catch((error) => {
    //             console.log(error.message);
    //             toast.error(`${error.message}`)
    //         })

    // }

    return (
        <div>

            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Login Here!!
                            </h1>
                            <form onSubmit={handleSignIn} className="space-y-4 md:space-y-6">
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>

                                <button type="submit" className="w-full bg-red-500 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Login</button>


                            </form>
                            <div className="">
                                <NavLink to='/register' className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already have an account? <span href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Create an account</span>
                                </NavLink>
                            </div>
                            <div>
                                <div className="mt-8 grid">
                                    <button className=" px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                                        <svg className="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
                                            <path d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z" fill="#4285F4" />
                                            <path d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z" fill="#34A853" />
                                            <path d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z" fill="#FBBC05" />
                                            <path d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z" fill="#EB4335" />
                                        </svg>
                                        Sign up with Google
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;