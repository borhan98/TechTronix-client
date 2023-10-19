import { useLoaderData } from "react-router-dom";
import CartProduct from "./CartProduct";
import { useState } from "react";

const MyCart = () => {
  const loadedProducts = useLoaderData();
  const [myProducts, setMyProducts] = useState(loadedProducts);
  let totalPrice = 0;
  const delivery = 150;
  for (const product of myProducts) {
    const productPrice = parseFloat(product.price);
    totalPrice += productPrice;
  }
  return (
    <div className="container mx-auto my-10">
      <h3 className="text-2xl font-semibold mb-6">
        Your products: {myProducts.length}
      </h3>
      <div>
        {!myProducts.length > 0 ? (
          <div>{'"There is no product in your cart"'}</div>
        ) : (
          <div className="flex flex-col-reverse md:flex-row gap-4">
            <div className="w-full md:w-2/3">
              {myProducts.map((product) => (
                <CartProduct
                  key={product._id}
                  product={product}
                  myProducts={myProducts}
                  setMyProducts={setMyProducts}
                />
              ))}
            </div>
            {/* Grand Total calculation */}
            <div className="w-full md:w-1/3 p-4 bg-white rounded-md h-fit">
              <h3 className="font-bold mb-4">Grand Total</h3>
              <hr />
              <ul className="my-4 space-y-2">
                {myProducts.map((product, index) => (
                  <li key={product._id} className="grid grid-cols-10">
                    <span className="col-span-1">{index + 1}. </span>{" "}
                    <span className="col-span-6">{product.name}</span>{" "}
                    <span className="col-span-3 text-right">{parseFloat(product.price).toFixed(2)}$</span>
                  </li>
                ))}
              </ul>
              <hr />
              <div className="flex justify-between mt-4">
                <span>Sub-Total:</span>
                <span>{totalPrice.toFixed(2)}$</span>
              </div>
              <div className="flex justify-between mt-4">
                <span>Delivery:</span>
                <span>{delivery.toFixed(2)}$</span>
              </div>
              <hr />
              <div className="flex justify-between mt-4">
                <span>Grand Total:</span>
                <span>{(totalPrice - delivery).toFixed(2)}$</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCart;
