import React from 'react';
import { useLoaderData } from 'react-router';
import Accordion from '../../Components/Accordion/Accordion';

const Blogs = () => {

  const blogsData = useLoaderData();

  return (
    <div className='my-20 mx-10'>
      <div className="breadcrumbs text-sm">
        <ul>
          <li className='italic font-medium'><a>Home</a></li>
          <li className='italic font-medium'><a>Blogs</a></li>
          

        </ul>
      </div>
      {
        blogsData.map(blog => <Accordion key={blog.id} blog={blog}></Accordion>)
      }
    </div>
  );
};

export default Blogs;