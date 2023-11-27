import { Plus,  } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import BlogCart from "./blogCart";


const ContentManagement = () => {

  const axiosSecure = useAxiosSecure()

  const [blogs, setBlogs] = useState();

  useEffect(()=>{
    axiosSecure.get('/blogs')
    .then(result =>{
      console.log(result.data);
      setBlogs(result.data)
    })
    .catch(err =>{
      console.log(err);
    })
  }, [axiosSecure])
    return (
        <div>
            
            <div className="flex justify-between">
            <h2 className="text-2xl font-semibold">
            Content Management
            </h2>
            <div className="flex justify-center gap-2 p-2 rounded items-center bg-red-500 text-white font-bold">
            <Plus weight="bold" size={18} /><Link to="/dashboard/content-management/add-blog">Add Blog</Link>
            </div>
            
            </div>
            <div className="bg-red-200 mt-10 flex justify-between items-center px-4">
            <h2 className=" text-xl font-semibold">Total Blog is {blogs?.length} </h2>
            {/*  */}

            <select name="select" className="p-2 bg-gray-50 border my-6 border-gray-300 text-sm rounded block">
                            <option defaultValue="">All</option>
                            <option value="Draft">Draft</option>
                            <option value="Published">Published</option>
                        </select>
            </div>
            <div className="grid grid-cols-3 pt-6 gap-6">
              {
                blogs?.map(blog => <BlogCart key={blog._id} blog={blog}></BlogCart>)
              }
            </div>

        </div>
    );
};

export default ContentManagement;