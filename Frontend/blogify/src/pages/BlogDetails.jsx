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
    <div className='h-screen overflow-scroll flex justify-center pt-[1cm] pb-[1cm] pl-[1cm] lg:pl-[7cm] pr-[1cm] lg:pr-[7cm]'>
      <div className='border p-[1cm] bg-neutral-900 h-fit'>
        <h3 className='text-4xl mt-[0.5cm] font-semibold text-center'>{blog.title}</h3>
        <h3 className='text-[1.5rem] mt-[0.5cm] text-center'>{blog.body}</h3>
        <h3 className='text-[1rem] mt-[0.3cm] text-center font-serif'>Author: {blog.author}</h3>
      </div>
    </div>
  );
}