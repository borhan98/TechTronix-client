import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Header = () => {
  const { user, logoutUser } = useContext(AuthContext);

  // Handle logout
  const logout = () => {
    logoutUser()
      .then(() => {
        toast.success("User logged out");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const menuLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/addproduct"}>Add Product</NavLink>
      </li>
      <li>
        <NavLink to={"/cart"}>My Cart</NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-base-200">
      <div className="container mx-auto navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuLinks}
            </ul>
          </div>
          <a className="text-2xl md:text-3xl lg:text-4xl">TechTronix</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuLinks}</ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {user ? (
                  <img src={user?.photoURL} />
                ) : (
                  <img src="https://i.ibb.co/JCVpNzQ/user.jpg" />
                )}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50"
            >
              {user && (
                <li>
                  <a>{user.displayName}</a>
                </li>
              )}
              <li>
                {!user ? (
                  <Link to={"/login"}>Login</Link>
                ) : (
                  <a onClick={logout}>Logout</a>
                )}
                <Link to={"/register"}>Register</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
