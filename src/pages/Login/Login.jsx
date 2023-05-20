import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { UserContext } from "../../Context/Context";

const Login = () => {
  const [passCheck, setPassCheck] = useState(true);
  const [loginOk, setLoginOk] = useState(false);
  const location = useLocation();
  const redirect = location.state?.from?.pathname || "/";
  const { googleSignIn, loginUserWithEmailPass, passReset, setUser } =
    useContext(UserContext);
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
        setLoginOk(true);
        navigate(redirect, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (password.length < 6) {
      return setPassCheck(false);
    } else if (password.length > 6) {
      return setPassCheck(true);
    }
    loginUserWithEmailPass(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
        e.target.reset();
        navigate(redirect, { replace: true });
      })
      .catch((error) => console.log(error.message));
  };



  return (
    <div className="flex h-screen max-w-screen max-h-screen justify-center items-center">
      <div className="w-[500px] h-[600px]">
        <h1 className="text-center font-semibold text-4xl mb-4">LogIn</h1>
        <form
          onSubmit={handleLogin}
          className="bg-white shadow-md rounded py-10 px-8 pt-14 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-cyan-500 text-xl font-semibold mb-2"
              for="username"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border border-cyan-500 rounded w-full py-2 px-3 text-gray-700 mb-3"
              name="email"
              required
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-cyan-500 text-xl font-semibold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-cyan-500 rounded w-full py-2 px-3 text-gray-700 mb-3"
              name="password"
              required
              type="password"
              placeholder="******************"
            />
            {loginOk ? (
              <>
                {" "}
                <p className="show-error text-cyan-500-500 text-base italic">
                  Login Successful!
                </p>
              </>
            ) : (
              <></>
            )}
            {passCheck ? (
              <></>
            ) : (
              <>
                {" "}
                <p className="show-error text-red-500 text-base italic">
                  Password should be more then 6 character
                </p>
              </>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-cyan-500 hover:bg-cyan-700 w-full text-white text-xl font-bold py-3 px-6 rounded "
              type="submit"
            >
              Login
            </button>
          </div>

          <p className="text-center mt-8 text-lg">
            Don't have an account?{" "}
            <Link to="/register" className="text-cyan-500">
              Register
            </Link>{" "}
          </p>
          <p className="text-center my-4 text-lg">OR</p>
          <div className="flex items-center text-center gap-4">
            <button
              onClick={handleGoogleSignIn}
              className="border-cyan-500 hover:bg-cyan-500 border-2 text-cyan-500 hover:text-white rounded-3xl text-center w-1/2 gap-4 px-4  py-3  text-xl font-bold"
              type="button"
            >
              Google
            </button>
            <button
              // onClick={handlePassReset}
              className="inline-block w-1/2 align-baseline text-cyan-500 text-xl font-semibold"
              href="#"
            >
              Forgot Password?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
