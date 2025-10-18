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
      <div className='h-screen flex justify-center'>
        <form className='border h-fit p-4 mt-[2cm]' onSubmit={onHandleSubmit}>
          <div className='text-2xl'>
            <label>Title: </label>
            <input type="text" className='bg-yellow-200 rounded-[8px] text-black w-[8cm]' name="title" onChange={onHandleChange}></input>
          </div>
          <div className='text-2xl  mt-[7px]'>
            <h3>Body: </h3>
            <textarea type="text" className='bg-yellow-200 rounded-[8px] text-black w-full' name="body" onChange={onHandleChange}></textarea>
          </div>
          <div className='text-2xl mt-[7px]'>
            <label>Author: </label>
            <input type="text" className='bg-yellow-200 rounded-[8px] text-black' name="author" onChange={onHandleChange}></input>
          </div>
          <div className='flex justify-center mt-[0.5cm]'>
            <button type="submit" disabled={loading}>
              {loading ? "Creating..." : "Create"}
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddBlog;
