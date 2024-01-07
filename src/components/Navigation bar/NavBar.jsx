import { NavLink } from "react-router-dom";
import Container from "../Container/Container";

const NavBar = () => {
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
            })} to="/login">Login</NavLink>
        </li>
    </>
    return (
        <div className="bg-[#9BDEAC]">
            <Container>
                <div className="navbar px-10">
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
                        <a className="btn">Button</a>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NavBar;