import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between w-screen h-[1.5cm] bg-gradient-to-r from-blue-900 via-blue-700 to-black pr-[1cm] pl-[1cm]'>
        <h2 className='mt-[7px] text-3xl font-serif'>Blogify</h2>
        <ul className='flex gap-[1.5rem] mt-[13px]'>
          <li><NavLink to="/"><p className='text-white'>Home</p></NavLink></li>
          <li><NavLink to="/addBlog"><p className='text-white'>Add Blog</p></NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
