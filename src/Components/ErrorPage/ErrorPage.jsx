import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const ErrorPage = () => {
  return (
    <div className="">
      <Header />
      <div className="px-2 lg:px-0">
        <div className="container mx-auto grid md:grid-cols-2 items-center bg-white py-6 mt-16 rounded-lg">
          <div className="p-4">
            <figure>
              <img src="https://i.ibb.co/d2KNkP5/404.jpg" alt="" />
            </figure>
          </div>
          <div className="p-4">
            <h2 className="text-[#F9631F] text-3xl font-bold mb-4">
              Page Not Found
            </h2>
            <p className="text-sm md:text-base">
              We&#39;re sorry, but the page you&#39;re looking for cannot be
              found. It may have been moved, deleted, or it never existed in the
              first place. Please check the URL for errors or try navigating
              back to the homepage.
            </p>
            <Link to={"/"}>
              <button className="bg-[#EBC20A] py-2 px-4 mt-4 rounded-md text-xl font-medium">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
