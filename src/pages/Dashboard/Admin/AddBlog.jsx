import { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure';


const image_hosting_key = import.meta.env.VITE_IMAGEBB_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddBlog = () => {

    const axiosSecure = useAxiosSecure();

    const { register, handleSubmit, reset } = useForm();

    const axiosPublic = useAxiosPublic()

    const editor = useRef(null)
    const [content, setContent] = useState('')

    // const handleSubmitBlog = async (data) => {
    //     // image upload to imgbb and then get an url
    //     const imageFile = { thumbnail: data.thumbnail[0] }
    //     const res = await axiosPublic.post(image_hosting_api, imageFile, {
    //         headers: {
    //             'content-type': 'multipart/form-data'
    //         }
    //     });
    //     console.log(imageFile);
    //     if (res.data.success) {

    //         const blog = {
    //             title: data.title,
    //             description: content,
    //             thumbnail: res.data.data.display_url,

    //         }


    //         // 
    //         const blogsRes = await axiosSecure.post('/blogs', blog);
    //         console.log(blogsRes.data)
    //         if (blogsRes.data.insertedId) {
    //             // show success popup
    //             reset();
    //             toast.success('Register Success')
    //             reset()
    //         }

    //     }

    // }

    const handleSubmitBlog = async (data) => {
        const title = data.title

        // image upload to imgbb and then get an url
        const imageFile = { image: data.thumbnail[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {

            const menuItem = {
                title: title,
                description: content,
                thumbnail: res.data.data.display_url,
                status: "Draft"

            }
            // 
            const blogRes = await axiosSecure.post('/blogs', menuItem);
            if (blogRes.data.insertedId) {
                // show success popup
                reset();
                toast.success('Blog Added Successfully')
            }

        }

    };

    return (
        <div>

            <form onSubmit={handleSubmit(handleSubmitBlog)}>
                <div className="form-control w-full my-3">
                    <label className="label">
                        <span className="label-text text-2xl"> Blog Title</span>
                    </label>
                    <input {...register('title', { required: true })} type="text" className="file-input w-full px-4" />
                </div>
                <label className="label">
                        <span className="label-text text-2xl"> Blog Description</span>
                    </label>
                <JoditEditor
                    ref={editor}
                    value={content}
                    tabIndex={1} // tabIndex of textarea
                    onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                    onChange={newContent => { setContent(newContent) }}
                />
                <div className="form-control w-full my-3">
                    <input {...register('thumbnail', { required: true })} type="file" className="file-input w-full max-w-xs" />
                </div>

                <button className="btn">
                    Add Blog
                </button>
            </form>
        </div>
    );
};

export default AddBlog;

{/* <JoditEditor
    ref={editor}
    value={content}
    tabIndex={1} // tabIndex of textarea
    onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
    onChange={newContent => { setContent(newContent) }}
/> */}