import './App.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import HomePage from './pages/Home'
import MainNavigation from './components/MainNavigation'
import axios from 'axios'
import BlogDetails from './pages/BlogDetails'
import AddBlog from './pages/AddBlog'


const getAllBlogs = async () => {
  const res = await axios.get("http://localhost:3000");
  return res.data;
};

const getBlog = async ({ params }) => {
  const res = await axios.get(`http://localhost:3000/${params.id}`);
  return res.data;
};

const router=createBrowserRouter([
  {path:"/",element:<MainNavigation/>,children:[
    {path:"/",element:<HomePage/>,loader:getAllBlogs},
    {path:"/addBlog",element:<AddBlog/>},
    {path:"/blog/:id",element:<BlogDetails/>,loader:getBlog}
  ]}
 
])

export default function App() {
  return (
   <>
    <RouterProvider router={router}></RouterProvider>
   </>
  )
}
