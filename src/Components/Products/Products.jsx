import { useLoaderData } from "react-router-dom";
import Product from "./Product";


const Products = () => {
    const loadedProducts = useLoaderData();
    return (
        <div className="container mx-auto my-6">
            {
                loadedProducts.length === 0 ? <p className="max-w-lg mx-auto text-center my-28">{"Sorry, but there are currently no products available under this brand. Please check back later or explore other brands for your desired products."}</p> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        loadedProducts.map((product, index) => <Product key={index} product={product} />)
                    }
                </div>
            }
        </div>
    );
};

export default Products;