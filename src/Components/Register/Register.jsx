import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container mx-auto">
      <div className="py-10 bg-base-200 px-20">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-center mb-6">Register now</h1>
        </div>
        <div className="card max-w-lg mx-auto shadow-2xl bg-base-100">
          <form className="card-body">
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
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-neutral">Register</button>
            </div>
            <p>
            <small>Already have an account? </small>
            <small className="underline"><Link to={"/login"}>Login Now</Link></small>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
