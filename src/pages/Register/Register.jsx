// import toast from "react-hot-toast";
// import { NavLink, useNavigate } from "react-router-dom";

import { useContext } from "react";
import Container from "../../components/Shared/Container";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";
import Register2 from "./Register2";


// import { NavLink } from "react-router-dom";


const Register = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const axiosPublic = useAxiosPublic()

    const navigate = useNavigate();

    const {createUser, updateUser} = useContext(AuthContext)

    const handleSignUp =(e) =>{

        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // const confirmPassword = e.target.confirmPassword.value;
        const bloodGroup = e.target.bloodGroup.value;
        const district = e.target.district.value;
        const upazila = e.target.upazila.value;
        const url = 'https://as2.ftcdn.net/v2/jpg/00/51/19/87/1000_F_51198797_gSMOe1hNvokAOvwWeJlON2GVVaAilmEI.jpg'
        


        // img

        const form = new FormData(e.target)
        const avatar = form.get("avatar")
        
        const data = new FormData()
        data.append('avatar', avatar)

        fetch("https://api.imgbb.com/1/upload?key=e054ffbffeb28fc199b69e426ab8669e", {
            method: "POST",
            body: data
        })
        .then(response =>response.json())
        .then(data => console.log(data))
        

        createUser(email, password)
        .then(result => {
            
            updateUser(result.user,name, url)
            // create user info in the database
            const userInfo = {
                name: name,
                email: email,
                avatar: url,
                bloodGroup: bloodGroup,
                district: district,
                upazila: upazila,
                status: "Active",
                role: "Donar"
            }
            axiosPublic.post('/users', userInfo)
                .then(res =>{
                    if(res.data.insertedId){
                        console.log(userInfo);
                        toast.success('Account register successfully!')
                        navigate('/')
                    }
                })
                
           
        })
        .catch((error) => {
            toast.error(`${error.message}`)
        })
       

        // const userInfo = {name, email, password, confirmPassword,avatar, bloodGroup, district, upazila}

        // console.log(userInfo);

        // createUser(email, password)
        // .then(userCredential=>{
        //    const user = userCredential.user
        //    updateUser(user, name, image)
        //    toast.success('Account Created Successfully!')
        //    navigate('/');  
        //         })
        // .catch((error) => {
        //     toast.error(`${error.message}`)
        // })
    
    }

    return (
        <div className="h-screen">
            <Container>
                <form onSubmit={handleSignUp}  encType="multipart/form-data">
                <div className="grid gap-4 mb-4 sm:grid-cols-2">
                    {/* name */}
                    {/* <div>
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                        <input type="text" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your name" required/>
                    </div> */}
                    {/* email */}
                    {/* <div>
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                        <input type="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type your email" required/>
                    </div> */}
                    {/* Password */}
                    {/* <div>
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password"className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="••••••••" required/>
                    </div> */}
                    {/* Confirm Password */}
                    {/* <div>
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                        <input type="password" name="confirmPassword"className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="••••••••" required/>
                    </div> */}
                    {/* Avatar */}
                    {/* <div>
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Avatar</label>
                        <input type="file" name="avatar"className="file-input file-input-bordered bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" placeholder="Note" required/>
                    </div> */}
                    {/* Blood Group */}
                    {/* <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blood Group</label>
                        <select name="bloodGroup" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option defaultValue="">Select Group</option>
                            <option value="A+">A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                        </select>
                    </div> */}
                    {/* District */}
                    {/* <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">District</label>
                        <select name="district" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option defaultValue="">Select District</option>
                            <option value="Gazipur">Gazipur</option>
                            <option value="Manikganj">Manikganj</option>
                            <option value="Bagerhat">Bagerhat</option>
                            <option value="Bogra">Bogra</option>
                            <option value="Noakhali">Noakhali</option>
                        </select>
                    </div> */}
                    {/* Category */}
                    {/* <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upazila</label>
                        <select name="upazila" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option defaultValue="">Select Upazila</option>
                            <option value="Gazipur">Gazipur</option>
                            <option value="Manikganj">Manikganj</option>
                            <option value="Bagerhat">Bagerhat</option>
                            <option value="Bogra">Bogra</option>
                            <option value="Noakhali">Noakhali</option>
                        </select>
                    </div> */}
                </div>
                {/* <button type="submit" className="bg-red-500 text-white  inline-flex items-center  font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">
                    
                    Register
                </button> */}
            </form>

            <div className="w-2/4 mx-auto border shadow-md p-6">
                <h2 className="text-2xl font-medium">Register Here</h2>
                <Register2></Register2>
            </div>
            </Container>
            
            
        </div>
    );
};

export default Register;