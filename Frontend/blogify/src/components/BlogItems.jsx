import { useEffect, useState } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'

export default function BlogItems() {
    const blogs = useLoaderData()
    const [allBlogs, setAllBlogs] = useState()
    const navigate = useNavigate()
    console.log(allBlogs)

    useEffect(() => {
        setAllBlogs(blogs)
    }, [blogs]);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
            {allBlogs?.map((item) => (
                <div
                    key={item._id}
                    className="border rounded-lg p-4 max-w-sm w-full hover:shadow-md transition-shadow duration-200 cursor-pointer"
                    onDoubleClick={() => navigate(`/blog/${item._id}`)}
                >
                    <div>
                        <h2 className="text-2xl text-center font-semibold text-blue-400">{item.title}</h2>
                        <p className="mt-2 text-center line-clamp-4">{item.body}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
