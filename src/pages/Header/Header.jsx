import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../Context/Context";

const Header = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=Caveat&display=swap";
  document.head.appendChild(link);

  return (
    <div className="navbar mt-2">
      <div className="flex-1">
        <Link
          style={{ fontFamily: "Caveat, cursive" }}
          to="/"
          title="home"
          className=" font-bold text-cyan-500 normal-case text-5xl"
        >
          helloToy.Com
        </Link>
      </div>
      <div className="flex-none">
        <div className="flex gap-6 items-center text-xl font-semibold">
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
            <>
              {" "}
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} title={user?.displayName}/>
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              {" "}
              <Link
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold underline text-xl text-cyan-500"
                    : "font-semibold text-xl"
                }
                to="/login"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
