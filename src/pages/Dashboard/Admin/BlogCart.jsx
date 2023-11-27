import { Eye, Pencil, Trash } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";


const BlogCart = ({blog}) => {

    const axiosSecure = useAxiosSecure()
    const {_id, title, thumbnail , description, status } = blog;

    const handleDelete = (id) => {

    axiosSecure.delete(`/blogs/${id}`)
    .then(result => {
        if(result.data.deletedCount > 0){
            toast.success('Deleted Success')
        }
    })
    .catch(err =>{
        console.log(err);
    })
    
    }
    const handlePublish = (id) => {

        if(status === 'Draft'){
            const updateStatus = {
                status : "Published"
            }

            axiosSecure.put(`/blogs/${id}`, updateStatus)
        .then(result => {
            console.log(result);
        })
        .catch(err =>{
            console.log(err);
        })

        }
        else{
                const updateStatus = {
                    status : "Draft"
                }
    
                axiosSecure.put(`/blogs/${id}`, updateStatus)
            .then(result => {
                console.log(result);
            })
            .catch(err =>{
                console.log(err);
            })
       

        }

    }

    console.log(thumbnail);
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
  <figure className="px-4 pt-4">
    <img src={thumbnail} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <p className="text-lg font-medium">Status: {status? status:''}</p>
    <div className="flex justify-center items-center gap-4">
                            <Link to={`/dashboard/update-donation-request/${_id}`} 
                            className="hover:text-green-500">
                                <Pencil size={24}/>
                            </Link>


                            <button onClick={()=>handleDelete(_id)} className="hover:text-red-500">
                                <Trash size={24} />
                            </button>

                            <Link to={`/blood-donation-details/${_id}`}className="hover:text-red-500"><Eye size={24} /></Link>
                        </div>
                        <button onClick={()=>handlePublish(_id)} className="btn btn-sm btn-outline" >{status === 'Draft'? 'Published': 'Unpublished This Blog'}</button>
  </div>
</div>
        </div>
    );
};

export default BlogCart;