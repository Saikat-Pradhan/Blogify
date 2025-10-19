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
      <div className='h-screen flex justify-center px-4'>
        <div className='bg-gradient-to-r from-blue-600 via-blue-500 to-black h-fit mt-[2cm] p-[6px] rounded-xl'>
          <form className='bg-neutral-900 h-fit p-4 rounded-xl' onSubmit={onHandleSubmit}>
            <div className='text-2xl'>
              <label>Title: </label>
              <input type="text" className='bg-black rounded-[8px] text-white w-full pl-4' name="title" onChange={onHandleChange} required></input>
            </div>
            <div className='text-2xl  mt-[7px]'>
              <h3>Body: </h3>
              <textarea type="text" className='bg-black rounded-[8px] text-white w-full pl-4' name="body" onChange={onHandleChange} required></textarea>
            </div>
            <div className='text-2xl mt-[7px]'>
              <label>Author: </label>
              <input type="text" className='bg-black rounded-[8px] text-white w-full pl-4' name="author" onChange={onHandleChange} required></input>
            </div>
            <div className='flex justify-center mt-[0.5cm]'>
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
