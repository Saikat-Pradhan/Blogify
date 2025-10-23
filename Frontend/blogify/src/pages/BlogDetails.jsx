import { useLoaderData } from 'react-router-dom';
import Loading from '../components/Loading';
import { useState, useEffect } from 'react';
import { speaker } from "../services/blogService";

export default function BlogDetails() {
  const loaderBlog = useLoaderData();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBlog(loaderBlog);
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [loaderBlog]);

  useEffect(() => {
    if (!blog) return;

    const welcomeMessage = `Welcome to the blog ${blog.title}`;
    speaker(welcomeMessage);
  }, [blog]);

  if (loading || !blog) {
    return <Loading />;
  }

  return (
    <div className='h-screen overflow-scroll bg-amber-200 dark:bg-neutral-800 flex justify-center pt-[1cm] pb-[1cm] pl-[10px] lg:pl-[7cm] pr-[10px] lg:pr-[7cm]'>
      <div className='bg-gradient-to-r from-blue-600 via-blue-500 to-black p-[6px] rounded-xl h-fit'>
        <div className='p-[1cm] bg-green-200 text-black dark:bg-neutral-900 dark:text-white rounded-xl'>
          <h3 className='text-4xl text-blue-500 mt-[0.5cm] font-semibold text-center'>{blog.title}</h3>
          <h3 className='text-[1.5rem] mt-[0.9cm] text-center'>{blog.body}</h3>
          <h3 className='text-[1.3rem] mt-[0.5cm] text-center font-serif'>Author: {blog.author}</h3>
        </div>
      </div>
    </div>
  );
}