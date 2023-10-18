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
            element: <Home />,
            loader: () => fetch("./brands.json")
        },
        {
            path: "/addproduct",
            element: <AddProduct />
        }
      ]
    },
]

export default routes;