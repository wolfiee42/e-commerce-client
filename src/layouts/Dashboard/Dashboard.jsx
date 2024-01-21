import { FaCommentAlt, FaHeart, FaHistory, FaHome, FaShoppingCart, FaUser } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            <ul className="menu w-1/6 bg-[#75D18C] min-h-screen p-5 gap-3">
                <li>
                    <NavLink style={({ isActive }) => ({
                        backgroundColor: isActive ? "#636940" : "",
                        borderBottom: isActive ? "#474A2C solid 2px" : '',
                        opacity: isActive ? 1 : ""
                    })} to="/"> <FaHome className="text-xl" />Home</NavLink>
                </li>
                <li>
                    <NavLink style={({ isActive }) => ({
                        backgroundColor: isActive ? "#636940" : "",
                        borderBottom: isActive ? "#474A2C solid 2px" : '',
                        opacity: isActive ? 1 : ""
                    })} to="/dashboard/user"><FaUser className="text-xl" /> User</NavLink>
                </li>
                <li>
                    <NavLink style={({ isActive }) => ({
                        backgroundColor: isActive ? "#636940" : "",
                        borderBottom: isActive ? "#474A2C solid 2px" : '',
                        opacity: isActive ? 1 : ""
                    })} to="/dashboard/cart"><FaShoppingCart className="text-xl" /> Cart</NavLink>
                </li>
                <li>
                    <NavLink style={({ isActive }) => ({
                        backgroundColor: isActive ? "#636940" : "",
                        borderBottom: isActive ? "#474A2C solid 2px" : '',
                        opacity: isActive ? 1 : ""
                    })} to="/dashboard/wishlist"><FaHeart className="text-xl" /> Wishlist</NavLink>
                </li>
                <li>
                    <NavLink style={({ isActive }) => ({
                        backgroundColor: isActive ? "#636940" : "",
                        borderBottom: isActive ? "#474A2C solid 2px" : '',
                        opacity: isActive ? 1 : ""
                    })} to="/dashboard/review"><FaCommentAlt className="text-xl" /> Review</NavLink>
                </li>
                <li>
                    <NavLink style={({ isActive }) => ({
                        backgroundColor: isActive ? "#636940" : "",
                        borderBottom: isActive ? "#474A2C solid 2px" : '',
                        opacity: isActive ? 1 : ""
                    })} to="/dashboard/history"><FaHistory className="text-xl" /> History</NavLink>
                </li>
            </ul>
            <div className="w-5/6">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;