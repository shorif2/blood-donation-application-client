
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";


const image_hosting_key = import.meta.env.VITE_IMAGEBB_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Register2 = () => {
    const {createUser,
        updateUser,} = useAuth()
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        
        console.log(data)
        const email = data.email
        const password = data.password
        const name = data.name
        
        // image upload to imgbb and then get an url
        const imageFile = { image: data.avatar[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            createUser(email,password)
            .then( async() => {
                updateUser(name, res.data.data.display_url)
            
                const menuItem = {
                    name: data.name,
                    email: data.email,
                    bloodGroup : data.bloodGroup,
                    district: data.district,
                    upazila: data.upazila,
                    avatar: res.data.data.display_url,
                    role: "Donar",
                    status: "Active"
                }
    
    
                // 
                const menuRes = await axiosSecure.post('/users', menuItem);
                console.log(menuRes.data)
                if (menuRes.data.insertedId) {
                    // show success popup
                    reset();
                    toast.success('Register Success')
                }




            })
            .catch(error =>{
                toast.error(error.message)
            })
            
            
        }
        
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <div className="flex gap-6">
                {/* category */}
                <div className="form-control w-full my-3">
                    <label className="label">
                        <span className="label-text">Full Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Recipe Name"
                        {...register('name', { required: true })}
                        required
                        className="input input-bordered w-full" />
                </div>

                {/* price */}
                <div className="form-control w-full my-3">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Recipe Name"
                        {...register('email', { required: true })}
                        required
                        className="input input-bordered w-full" />
                </div>

            </div>
            <div className="flex gap-6">
                {/* category */}
                <div className="form-control w-full my-3">
                    <label className="label">
                        <span className="label-text">Password*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Recipe Name"
                        {...register('password', { required: true })}
                        required
                        className="input input-bordered w-full" />
                </div>

                {/* price */}
                <div className="form-control w-full my-3">
                    <label className="label">
                        <span className="label-text">Confirm Password</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Recipe Name"
                        {...register('confirmPassword', { required: true })}
                        required
                        className="input input-bordered w-full" />
                </div>

            </div>
            <div className="form-control w-full my-3">
                <label className="label">
                    <span className="label-text">Blood Group*</span>
                </label>
                <input
                    type="text"
                    placeholder="Recipe Name"
                    {...register('bloodGroup', { required: true })}
                    required
                    className="input input-bordered w-full" />
            </div>
            <div className="flex gap-6">
                {/* category */}
                <div className="form-control w-full my-3">
                    <label className="label">
                        <span className="label-text">District*</span>
                    </label>
                    <select defaultValue="default" {...register('district', { required: true })}
                        className="select select-bordered w-full">
                        <option defaultValue="">Select District</option>
                        <option value="Gazipur">Gazipur</option>
                        <option value="Manikganj">Manikganj</option>
                        <option value="Bagerhat">Bagerhat</option>
                        <option value="Bogra">Bogra</option>
                        <option value="Noakhali">Noakhali</option>
                    </select>
                </div>

                {/* price */}
                <div className="form-control w-full my-3">
                    <label className="label">
                        <span className="label-text">Upazila</span>
                    </label>
                    <select defaultValue="default" {...register('upazila', { required: true })}
                        className="select select-bordered w-full">
                        <option defaultValue="">Select Upazila</option>
                        <option value="Gazipur">Gazipur</option>
                        <option value="Manikganj">Manikganj</option>
                        <option value="Bagerhat">Bagerhat</option>
                        <option value="Bogra">Bogra</option>
                        <option value="Noakhali">Noakhali</option>
                    </select>
                </div>
            </div>

            <div className="form-control w-full my-3">
                <input {...register('avatar', { required: true })} type="file" className="file-input w-full max-w-xs" />
            </div>

            <button className="btn">
                Register
            </button>
        </form>
    );
};

export default Register2;