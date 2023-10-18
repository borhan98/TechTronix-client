import AddProduct from "../Components/AddProduct/AddProduct";
import Details from "../Components/Details/Details";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Products from "../Components/Products/Products";
import Register from "../Components/Register/Register";
import Root from "../Components/Root/Root";


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
            element: <AddProduct />
        },
        {
            path: "/products/:brandName",
            element: <Products />,
            loader: ({params}) => fetch(`http://localhost:5000/products/${params.brandName}`)
        },
        {
            path: "/products/:brandName/:id",
            element: <Details />,
            loader: ({params}) => fetch(`http://localhost:5000/products/${params.brandName}/${params.id}`)
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