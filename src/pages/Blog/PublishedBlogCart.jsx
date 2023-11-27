import React from 'react';
import { Link } from 'react-router-dom';

const PublishedBlogCart = ({blog}) => {

    const {_id, title,thumbnail, description } = blog;
    return (
        <div>
             <Link to={`/blog/${_id}`} className="group rounded-xl overflow-hidden dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" >
      <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
        <img className="w-full h-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl" src={thumbnail} alt="Image Description"/>
    
      </div>

      <div className="mt-7">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200">
          {title}
        </h3>
        <p className="mt-3 text-gray-800 dark:text-gray-200">
         {description}Prelineinnovative broadcast studio
        </p>
        <p className="mt-5 inline-flex items-center gap-x-1 text-blue-600 decoration-2 group-hover:underline font-medium">
          Read more
          <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </p>
      </div>
    </Link>
        </div>
    );
};

export default PublishedBlogCart;