import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import PublishedBlogCart from "./PublishedBlogCart";


const Blog = () => {

    const axiosSecure = useAxiosSecure()
    const [publishedBlog, setPublishedBlog] = useState();
    const status = 'Published'

    useEffect(()=>{
        axiosSecure.get(`/blogs-published/${status}`)
        .then(result =>{
          console.log(result.data);
          setPublishedBlog(result.data)
        })
        .catch(err =>{
          console.log(err);
        })
      }, [axiosSecure])


    return (
        <div>
            <div>
           
<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
 
  <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Insights</h2>
    <p className="mt-1 text-gray-600 dark:text-gray-400">Stay in the know with insights from industry experts.</p>
  </div>



  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    
   {publishedBlog?.map(blog => <PublishedBlogCart key={blog._id} blog={blog}></PublishedBlogCart>)}
  

    
  
  </div>

</div>

            </div>
        </div>
    );
};

export default Blog;