import { useLoaderData } from 'react-router-dom'

export default function BlogDetails() {
    const blog = useLoaderData()
    console.log(blog)
  return (
   <div className='h-screen flex justify-center'>
    <div className='border w-[10cm] p-[1cm] mt-[2cm] bg-neutral-900 h-fit'>
        <h3 className='text-4xl mt-[0.5cm] font-semibold text-center'>{blog.title}</h3>
        <h3 className='text-[1.5rem] mt-[0.5cm] text-center'>{blog.body}</h3>
        <h3 className='text-[1rem] mt-[0.3cm] text-center font-serif'>Author: {blog.author}</h3>
    </div>
   </div>
  )
}
