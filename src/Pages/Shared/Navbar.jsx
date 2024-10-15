import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Navbar = () => {
    const [isHovered, setIsHovered] = useState(false);
    const { user, logOut } = useContext(AuthContext)
    // console.log(user);

    const handleLogout = () => {
        logOut()
    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/updateProfile">Update Profile</NavLink></li>
      
    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className=" menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to="/"><button className="btn btn-ghost text-xl">MYHOME</button></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="space-x-4 menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <div>
                                <div className="avatar relative mt-2">
                                    <div className="w-14 rounded-full">
                                        <img onMouseEnter={() => setIsHovered(true)}
                                            onMouseLeave={() => setIsHovered(false)} src={user?.photoURL} />
                                    </div>
                                </div>
                                <p className={`${isHovered ? '' : 'hidden'} absolute top-[70px] z-10`}>{user.displayName}</p>
                            </div>
                            <button onClick={handleLogout} className="btn ml-3">Logout</button>
                        </> : <Link to="/login"><button className="btn">Login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};
 
export default Navbar;
