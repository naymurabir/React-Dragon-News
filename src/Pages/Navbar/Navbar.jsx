import { Link, NavLink } from "react-router-dom";
import userImg from '../../assets/user.png'

const Navbar = () => {

    const navLinks = <>

        <NavLink className="text-md font-semibold mr-4" to="/">Home</NavLink>

        <NavLink className="text-md font-semibold mr-4" to="/about">About</NavLink>

        <NavLink className="text-md font-semibold mr-4" to="/career">Career</NavLink>
    </>

    return (

        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">


                <div className="flex items-center gap-2">
                    <label >
                        <div className="w-10 rounded-full">
                            <img src={userImg} />
                        </div>
                    </label>
                    <Link to="/login">
                        <button className="bg-rose-600 text-white px-4 py-1 rounded font-semibold">Login</button>
                    </Link>
                </div>

            </div>
        </div >
    );
};

export default Navbar;