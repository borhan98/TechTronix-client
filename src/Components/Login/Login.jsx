import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { loginUser, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  // handle login user
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // Login user
    loginUser(email, password)
      .then(() => {
        toast.success("Successfully logged in");
        navigate(location.state);
      })
      .catch(() => {
        toast.error("Wrong Email or Password!");
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
    .then(() => {
      toast.success("Successfully logged in");
    })
    .then(err => {
      console.log(err.message);
    })
  }

  return (
    <div className="container mx-auto">
      <div className="py-10 bg-base-200 px-20">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-center mb-6">Login now</h1>
        </div>
        <div className="card max-w-lg mx-auto shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-neutral">
                Login
              </button>
            </div>
            <p>
              <small>Don&#39;t have any account? </small>
              <small className="underline">
                <Link to={"/register"}>Register Now</Link>
              </small>
            </p>
          </form>
            <div className="flex flex-col px-8 pb-8">
              <p className="text-center mb-2">Or Sign In With</p>
              <button onClick={handleGoogleSignIn} className="btn btn-sm btn-neutral flex items-center">
                <span>
                  <FcGoogle />
                </span>
                <span>Google</span>
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
