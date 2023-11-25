import { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';
import useAxiosPublic from '../../../hooks/useAxiosPublic';


const AddBlog = () => {

    const axiousPublic = useAxiosPublic()

    const editor = useRef(null)
    const [content, setContent] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        const title = e.target.title.value
        const thumbnail = 'https://images.pexels.com/photos/1405674/pexels-photo-1405674.jpeg'
        const description = content;

        const blog ={title, thumbnail, description}

        console.log(blog);

    }


    return (
        <div>

            <form onSubmit={handleSubmit}>

                <div className="sm:col-span-2 mb-6">
                    <label className="block  mb-2 text-2xl font-medium text-gray-900 ">Title of the Blog</label>
                    <input type="text" name="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2" placeholder="Blog Title"/>
                </div>
                
                <JoditEditor
                    ref={editor}
                    value={content}
                    tabIndex={1} // tabIndex of textarea
                    onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                    onChange={newContent => { setContent(newContent) }}
                />
                <fieldset className="w-full my-6 space-y-1 dark:text-gray-100">
                    <label className="block text-xl pb-3 font-medium">Attachments</label>
                    <div className="flex">
                        <input type="file" name="files" className=" px-8 py-6 border-2 border-dashed rounded-md" />
                    </div>
                </fieldset>
                <button type="submit" className="px-6 py-2 font-semibold border rounded border-red-500 bg-white mt-2">Submit</button>
            </form>
        </div>
    );
};

export default AddBlog;