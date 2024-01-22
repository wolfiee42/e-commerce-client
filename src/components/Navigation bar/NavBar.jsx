import { NavLink } from "react-router-dom";
import Container from "../Container/Container";
import useAuth from "../../utilities/useAuth";
import Lottie from "react-lottie"
import userPic from "../../assets/user.json"
import useVerifyAdmin from "../../utilities/useVerifyAdmin";


const NavBar = () => {


    const { user, userLogout } = useAuth();
    const [isAdmin] = useVerifyAdmin(false);
    console.log(isAdmin);


    const navitems = <>
        <li>
            <NavLink style={({ isActive }) => ({
                backgroundColor: isActive ? "#636940" : "",
                borderBottom: isActive ? "#474A2C solid 2px" : '',
                opacity: isActive ? 1 : ""
            })} to="/">Home</NavLink>
        </li>
        <li>
            <NavLink style={({ isActive }) => ({
                backgroundColor: isActive ? "#636940" : "",
                borderBottom: isActive ? "#474A2C solid 2px" : '',
                opacity: isActive ? 1 : ""
            })} to="/products">Products</NavLink>
        </li>
        <li>
            <NavLink style={({ isActive }) => ({
                backgroundColor: isActive ? "#636940" : "",
                borderBottom: isActive ? "#474A2C solid 2px" : '',
                opacity: isActive ? 1 : ""
            })} to="/order?category=Formal">Order</NavLink>
        </li>
        {
            user && isAdmin &&
            <li>
                <NavLink style={({ isActive }) => ({
                    backgroundColor: isActive ? "#636940" : "",
                    borderBottom: isActive ? "#474A2C solid 2px" : '',
                    opacity: isActive ? 1 : ""
                })} to="/dashboard/admin/adminprofile">Dashboard</NavLink>
            </li>
        }
        {
            user && !isAdmin &&
            <li>
                <NavLink style={({ isActive }) => ({
                    backgroundColor: isActive ? "#636940" : "",
                    borderBottom: isActive ? "#474A2C solid 2px" : '',
                    opacity: isActive ? 1 : ""
                })} to="/dashboard/cart">Dashboard</NavLink>
            </li>
        }
        {!user && <li>
            <NavLink style={({ isActive }) => ({
                backgroundColor: isActive ? "#636940" : "",
                borderBottom: isActive ? "#474A2C solid 2px" : '',
                opacity: isActive ? 1 : ""
            })} to="/login">Login</NavLink>
        </li>}
        {!user && <li>
            <NavLink style={({ isActive }) => ({
                backgroundColor: isActive ? "#636940" : "",
                borderBottom: isActive ? "#474A2C solid 2px" : '',
                opacity: isActive ? 1 : ""
            })} to="/registration">Registration</NavLink>
        </li>}
    </>

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: userPic,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const handleLogout = () => {
        userLogout();
    }

    return (
        <Container>
            <div className="navbar px-10 md:py-3 bg-[#6BB379] rounded-b-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navitems}
                        </ul>
                    </div>
                    <a className="font-semibold text-xl hover:cursor-pointer">daisyUI</a>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navitems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        !user ? <div className="avatar">
                            <div className="w-16 rounded-full">
                                <Lottie options={defaultOptions} />
                            </div>
                        </div> : <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button">
                                <div className="avatar hover:ring hover:ring-[#474A2C] hover:ring-offset-base-100 hover:ring-offset-2 hover:rounded-full">
                                    <div className="w-16 rounded-[50%]">
                                        <img src={user?.photoURL} alt="Profile picture" />hi
                                    </div>
                                </div>
                            </div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a className="uppercase">{user && user?.displayName}</a></li>
                                <li><button onClick={handleLogout}>Log Out</button></li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </Container>
    );
};

export default NavBar;