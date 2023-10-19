import AddProduct from "../Components/AddProduct/AddProduct";
import Details from "../Components/Details/Details";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import MyCart from "../Components/MyCart/MyCart";
import Products from "../Components/Products/Products";
import Register from "../Components/Register/Register";
import Root from "../Components/Root/Root";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const routes = [
    {
      path: "/",
      element: <Root />,
      children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/addproduct",
            element: <PrivateRoute><AddProduct /></PrivateRoute>
        },
        {
            path: "/products/:brandName",
            element: <Products />,
            loader: ({params}) => fetch(`http://localhost:5000/products/${params.brandName}`)
        },
        {
            path: "/products/:brandName/:id",
            element: <PrivateRoute><Details /></PrivateRoute>,
            loader: ({params}) => fetch(`http://localhost:5000/products/${params.brandName}/${params.id}`)
        },
        {
            path: "/cart",
            element: <PrivateRoute><MyCart /></PrivateRoute>,
            loader: () => fetch("http://localhost:5000/cart")
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