import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Context/Context";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { userSignUp,logout } = useContext(UserContext);
  const navigate = useNavigate();


  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;

    userSignUp(email, password)
    .then((result) => {
      const user = result.user;
      console.log(user);
      // navigator("/signin");
      updateProfile(user, {
        displayName: name,
        photoURL: photo,
      })
        .then(() => {
          logout();
          navigate('/login')
          e.target.reset();
          console.log('successful')
        })
        .catch((error) => {
          console.log(error.message);
        });
    })
    .catch((error) => {
      console.log(error.message);
    });
  };

  return (
    <div className="flex h-screen max-w-screen max-h-screen justify-center items-center">
      <div className="w-[500px] h-[600px]">
        <h1 className="text-center font-semibold text-4xl mb-4">Register</h1>
        <form
          onSubmit={handleRegister}
          className="bg-white shadow-md rounded py-10 px-8 pt-14 mb-4"
        >
          <div className="mb-2">
            <label
              className="block text-cyan-500 text-xl font-semibold mb-2"
              for="username"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border border-cyan-500 rounded w-full py-2 px-3 text-gray-700 mb-3"
              name="name"
              required
              type="text"
              placeholder="Your name"
            />
          </div>
          <div className="mb-2">
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
              placeholder="Your email"
            />
          </div>
          <div className="mb-2">
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
          </div>
          <div className="mb-2">
            <label
              className="block text-cyan-500 text-xl font-semibold mb-2"
              for="username"
            >
              Photo URL
            </label>
            <input
              className="shadow appearance-none border border-cyan-500 rounded w-full py-2 px-3 text-gray-700 mb-3"
              name="photo"
              required
              type="text"
              placeholder="Your Photo URL"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-cyan-500 hover:bg-cyan-700 w-full text-white text-xl font-bold py-3 px-6 rounded"
              type="submit"
            >
              Register
            </button>
          </div>
          <p className="text-center mt-8 text-lg">
            Already have an account?{" "}
            <Link to="/login" className="text-cyan-500">
              Login
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
