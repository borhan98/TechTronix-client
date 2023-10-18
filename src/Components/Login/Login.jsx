import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="container mx-auto">
      <div className="py-10 bg-base-200 px-20">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-center mb-6">Login now</h1>
        </div>
        <div className="card max-w-lg mx-auto shadow-2xl bg-base-100">
          <form className="card-body">
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
              <button className="btn btn-neutral">Login</button>
            </div>
            <p>
            <small>Don&#39;t have any account? </small>
            <small className="underline"><Link to={"/register"}>Register Now</Link></small>
            </p>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Login;