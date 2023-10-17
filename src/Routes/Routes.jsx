import AddProduct from "../Components/AddProduct/AddProduct";
import Home from "../Components/Home/Home";
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
            element: <AddProduct />,
            loader: () => fetch("http://localhost:5000/brands")
        }
      ]
    },
]

export default routes;