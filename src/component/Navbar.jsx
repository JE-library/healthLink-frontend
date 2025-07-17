import { Link } from "react-router"

const Navbar = () => {
  return (
    <nav className='flex justify-between align-center py-5 bg-black text-white'>
      <span>
        <strong>HEALTHLINK</strong>
      </span>
      <ul className="flex space-x-5">
        <li>
          {" "}
          <Link to="./">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/about">About</Link>
        </li>
        <li>
          {" "}
          <Link to="./blog">Blogs</Link>
        </li>
        <li>
          {" "}
          <Link to="./contact">Contacts</Link>
        </li>
       
      </ul>
      <button className="bg-gray-700py-4 px-10 rounded-2xl">
        <Link to="log-in" className="bg-gray-700 py-4 px-10 rounded-2xl">
          {" "}
          Sign-in
        </Link>
      </button>
    </nav>
  )
}

export default Navbar