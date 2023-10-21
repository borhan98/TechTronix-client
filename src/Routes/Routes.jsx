import AddProduct from "../Components/AddProduct/AddProduct";
import Details from "../Components/Details/Details";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import MyCart from "../Components/MyCart/MyCart";
import Products from "../Components/Products/Products";
import Register from "../Components/Register/Register";
import Root from "../Components/Root/Root";
import UpdateProduct from "../Components/UpdateProduct/UpdateProduct";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const routes = [
    {
      path: "/",
      errorElement: <ErrorPage /> ,
      element: <Root />,
      children: [
        {
            path: "/",
            element: <Home />,
            loader: () => fetch('https://techtronix-server-n5ha8r90r-borhan-uddins-projects.vercel.app/products')
        },
        {
            path: "/addproduct",
            element: <PrivateRoute><AddProduct /></PrivateRoute>
        },
        {
            path: "/products/:brandName",
            element: <Products />,
            loader: ({params}) => fetch(`https://techtronix-server-n5ha8r90r-borhan-uddins-projects.vercel.app/products/${params.brandName}`)
        },
        {
            path: "/products/:brandName/:id",
            element: <PrivateRoute><Details /></PrivateRoute>,
            loader: ({params}) => fetch(`https://techtronix-server-n5ha8r90r-borhan-uddins-projects.vercel.app/products/${params.brandName}/${params.id}`)
        },
        {
            path: "/updateproduct/:brandName/:id",
            element: <PrivateRoute><UpdateProduct /></PrivateRoute>,
            loader: ({params}) => fetch(`https://techtronix-server-n5ha8r90r-borhan-uddins-projects.vercel.app/products/${params.brandName}/${params.id}`)
        },
        {
            path: "/cart",
            element: <PrivateRoute><MyCart /></PrivateRoute>,
            loader: () => fetch("https://techtronix-server-n5ha8r90r-borhan-uddins-projects.vercel.app/cart")
        },
        {
            path: "/register",
            element: <Register />
        },
        {
            path: "/login",
            element: <Login />
        }
      ]
    },
]

export default routes;