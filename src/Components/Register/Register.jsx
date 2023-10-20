import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [passError, setPassError] = useState("");
  const { createUser, updateUser, googleSignIn } = useContext(AuthContext);

  // handle register new user
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      return setPassError(
        "Your password should be at least 6 characters long!"
      );
    } else if (!/(?=.*[A-Z])/.test(password)) {
      return setPassError(
        "Password must be contain at least one uppercase character!"
      );
    } else if (!/(?=.*[!@#$%^&*])/.test(password)) {
      return setPassError(
        "Password must be contain at least one special character!"
      );
    }

    // create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("successfully registered");
        setPassError("");
        updateUser(name, photo)
          .then(() => {})
          .catch((err) => {
            console.log(err);
          });
        form.reset();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // Handle google Login
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        toast.success("Successfully logged in");
      })
      .then((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="container mx-auto">
      <div className="py-4 md:py-7 lg:py-10 bg-base-200 px-2 md:px-10 lg:px-20">
        <div className="text-center lg:text-left">
          <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-center mb-6">Register now</h1>
        </div>
        <div className="card max-w-lg mx-auto shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
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
              <div className="relative">
                <input
                  type={showPass ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  className="input input-bordered w-full"
                  required
                />
                <span onClick={() => setShowPass(!showPass)} className="absolute right-1 top-3 text-xl md:text-2xl">
                  {
                    showPass ? <AiFillEyeInvisible /> : <AiFillEye />
                  }
                </span>
              </div>
            </div>
            <small className="text-red-500"> {passError} </small>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-neutral">
                Register
              </button>
            </div>
            <p>
              <small>Already have an account? </small>
              <small className="underline">
                <Link to={"/login"}>Login Now</Link>
              </small>
            </p>
          </form>
          <div className="flex flex-col px-8 pb-8">
            <p className="text-center mb-2">Or Sign In With</p>
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-sm btn-neutral flex items-center"
            >
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

export default Register;
