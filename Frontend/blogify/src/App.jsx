import './App.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import HomePage from './pages/Home'
import MainNavigation from './components/MainNavigation'
import BlogDetails from './pages/BlogDetails'
import AddBlog from './pages/AddBlog'
import { getAllBlogs, getBlog } from './services/blogService';

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
