import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { createNewBlog, speaker } from '../services/blogService'

const AddBlog = () => {

  const [blogData, setBlogData] = useState({})
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const welcomeMessage = "Add a new blog";
    speaker(welcomeMessage);
  }, []);

  const onHandleChange = (e) => {
    let val = e.target.value;
    setBlogData(pre => ({ ...pre, [e.target.name]: val }))
  }
  const onHandleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await createNewBlog(blogData).then(() => navigate("/"))
    } catch (error) {
      console.log("Failed to create new blog")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className='h-screen bg-amber-200 dark:bg-neutral-800 flex justify-center px-4'>
        <div className='bg-gradient-to-r from-blue-600 via-blue-500 to-black h-fit mt-[2cm] p-[6px] rounded-xl'>
          <form className='bg-green-200 text-black dark:bg-neutral-900 dark:text-white h-fit p-4 rounded-xl' onSubmit={onHandleSubmit}>
            <div className='text-[1.4rem]'>
              <label>Title</label>
              <input type="text" className='bg-white mt-1 rounded-[8px] text-black text-xl placeholder:text-xl w-full pl-4' name="title" onChange={onHandleChange} placeholder='Enter title' required></input>
            </div>
            <div className='text-[1.4rem]  mt-[7px]'>
              <h3>Body</h3>
              <textarea type="text" className='bg-white mt-1 rounded-[8px] text-black text-xl placeholder:text-xl w-full pl-4' name="body" onChange={onHandleChange} placeholder='Write your blog content here...' required></textarea>
            </div>
            <div className='text-[1.4rem] mt-[7px]'>
              <label>Author</label>
              <input type="text" className='bg-white mt-1 rounded-[8px] text-black text-xl placeholder:text-xl w-full pl-4' name="author" onChange={onHandleChange} placeholder='Enter author name' required></input>
            </div>
            <div className='flex justify-center mt-[0.5cm] text-white'>
              <button style={{ backgroundColor: 'blue' }} type="submit" disabled={loading}>
                {loading ? "Creating..." : "Create"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddBlog;
