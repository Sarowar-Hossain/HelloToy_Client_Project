import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/Context";
import Swal from "sweetalert2";

const Header = () => {
  const { user, logout } = useContext(UserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=Caveat&display=swap";
  document.head.appendChild(link);

  const handleLogout = () => {
    logout()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Logout Successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
        window.location.reload();
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <nav className="py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center ">
            <Link
              style={{ fontFamily: "Caveat, cursive" }}
              to="/"
              title="home"
              className=" font-bold text-cyan-500 normal-case text-5xl"
            >
              helloToy.Com
            </Link>
          </div>
          <div className="hidden md:flex">
            <div className="ml-10 flex items-center my-4 space-x-4">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold underline text-xl text-cyan-500"
                    : "font-semibold text-xl"
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold underline text-xl text-cyan-500"
                    : "font-semibold text-xl"
                }
                to="/alltoys"
              >
                All Toys
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold underline text-xl text-cyan-500"
                    : "font-semibold text-xl"
                }
                to="/addtoys"
              >
                Add Toys
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold underline text-xl text-cyan-500"
                    : "font-semibold text-xl"
                }
                to="/mytoys"
              >
                My Toys
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold underline text-xl text-cyan-500"
                    : "font-semibold text-xl"
                }
                to="/blog"
              >
                Blog
              </NavLink>
              {user ? (
                <div className="relative inline-block text-left">
                  <button
                    className="nav-link flex text-sm border-2  rounded-full"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                    <img
                      className="h-[50px] w-[50px] rounded-full"
                      src={user?.photoURL}
                      title={user?.displayName}
                    />
                  </button>
                  <div
                    className={`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg ${
                      isMenuOpen ? "block" : "hidden"
                    }`}
                  >
                    <div className="py-1 rounded-md bg-white shadow-xs">
                      <NavLink
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      >
                        Profile
                      </NavLink>
                      <button
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        onClick={handleLogout}
                      >
                        Sign out
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              )}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
            >
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 space-x-4 text-center pb-3 sm:px-3">
          <NavLink exact to="/" className={({ isActive }) =>
                  isActive
                    ? "font-semibold underline text-lg text-cyan-500"
                    : "font-semibold text-base"
                }>
            Home
          </NavLink>
          <NavLink to="/alltoys" className={({ isActive }) =>
                  isActive
                    ? "font-semibold underline text-lg text-cyan-500"
                    : "font-semibold text-base"
                }>
            All Toys
          </NavLink>
          <NavLink to="/addtoys" className={({ isActive }) =>
                  isActive
                    ? "font-semibold underline text-lg text-cyan-500"
                    : "font-semibold text-base"
                }>
            Add Toys
          </NavLink>
          <NavLink to="/mytoys" className={({ isActive }) =>
                  isActive
                    ? "font-semibold underline text-lg text-cyan-500"
                    : "font-semibold text-base"
                }>
            My Toys
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) =>
                  isActive
                    ? "font-semibold underline text-lg text-cyan-500"
                    : "font-semibold text-base"
                }>
            Blog
          </NavLink>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          {user ? (
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src={user?.photoURL}
                  alt={user?.displayName}
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium leading-6 text-gray-800">
                  {user?.displayName}
                </div>
                <div className="text-sm font-medium leading-5 text-gray-500">
                  {user?.email}
                </div>
              </div>
              <button
                onClick={handleLogout}
                type="button"
                className="ml-auto bg-gray-200 rounded-full flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
              >
                <span className="sr-only">Sign out</span>
                <svg
                  className="h-6 w-6 text-gray-600"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l-4 4m0 0l-4-4m4 4V8m0 0a4 4 0 0 1 4-4h1a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4h-1a4 4 0 0 1-4-4z"
                  />
                </svg>
              </button>
            </div>
          ) : (
            <div className="mt-3 px-2">
              <NavLink
                to="/login"
                className="block text-center w-full py-2 px-3 border border-transparent rounded-md text-base font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                Log in
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
