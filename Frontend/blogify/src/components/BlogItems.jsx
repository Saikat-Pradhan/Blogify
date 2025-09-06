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
    },500);

    return () => clearTimeout(timer);

  }, [blogs]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {allBlogs?.map((item) => (
        <div
          key={item._id}
          className="border rounded-lg p-4 max-w-sm w-full hover:bg-neutral-900 hover:border-[3px] hover:border-blue-300 cursor-pointer"
          onDoubleClick={() => navigate(`/blog/${item._id}`)}
        >
          <div>
            <h2 className="text-2xl text-center font-semibold text-blue-400">{item.title}</h2>
            <p className="mt-2 text-center line-clamp-4">{item.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}