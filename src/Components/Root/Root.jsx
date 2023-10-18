import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { Toaster } from "react-hot-toast";
import Footer from "../Footer/Footer";


const Root = () => {
    return (
        <div className="bg-base-200">
            <Toaster />
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;