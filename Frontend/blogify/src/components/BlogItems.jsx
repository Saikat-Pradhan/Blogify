import { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Loading from './Loading';

export default function BlogItems() {
  const blogs = useLoaderData();
  const [allBlogs, setAllBlogs] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setAllBlogs(blogs);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);

  }, [blogs]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {allBlogs?.map((item) => (
        <div className='rounded-lg bg-gradient-to-r from-blue-600 via-blue-500 to-black p-[6px] max-w-sm w-full cursor-pointer'>
          <div
            key={item._id}
            className="rounded-lg bg-neutral-900 p-4 max-w-sm w-full cursor-pointer"
            onClick={() => navigate(`/blog/${item._id}`)}
          >
            <div>
              <h2 className="text-2xl text-center font-semibold text-blue-600">{item.title}</h2>
              <p className="mt-2 text-white text-center line-clamp-4">{item.body}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}