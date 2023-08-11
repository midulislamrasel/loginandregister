import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/UserContext";

function Navbar() {
  const { user, logOutPage } = useContext(AuthContext);
  const logOut = (event) => {
    event.preventDefault();
    logOutPage()
      .then(() => {})
      .catch((error) => console.error("Error", error));
  };
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/home" className="btn btn-ghost normal-case text-3xl">
          daisyUI
        </Link>
        <div className="flex p-2">
          <Link to="/home" className="btn btn-ghost normal-case text-xl">
            Home
          </Link>

          <Link to="/login" className="btn btn-ghost normal-case text-xl">
            Login
          </Link>

          <Link to="/register" className="btn btn-ghost normal-case text-xl">
            Register
          </Link>

          <Link to="/logout" className="btn btn-ghost normal-case text-xl">
            LogOut
          </Link>
        </div>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full bg-yellow-100"></div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <div>{user?.email && <p>{user.email}</p>}</div>
            </li>
            <li>
              <button onClick={logOut}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
