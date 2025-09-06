import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between w-screen h-[1.5cm] bg-neutral-700 pr-[1cm] pl-[1cm]'>
        <h2 className='mt-[7px] text-3xl font-serif'>Blogify</h2>
        <ul className='flex gap-[1.5rem] mt-[13px]'>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/addBlog">Add Blog</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
