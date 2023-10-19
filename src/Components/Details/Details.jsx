import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const product = useLoaderData();
  const { name, brandName, price, type, rating, image, description } = product;
  const addProduct = { name, brandName, price, type, rating, image, description };
  const ratingCount = [];
  for (let i = 1; i <= rating; i++) {
    ratingCount.push(1);
  }

  // Handle add to cart
  const handleAddToCart = () => {
    fetch('http://localhost:5000/cart', {
      method: "POST",
      headers: { "content-type": "application/json"},
      body: JSON.stringify(addProduct)
    })
    .then(res => res.json())
    .then(data => {
      if (data.insertedId) {
        toast.success("Successfully added to your cart");
      }
    })
  }


  return (
    <div className="container mx-auto my-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="border p-4 rounded-lg flex flex-col items-center justify-center">
          <figure>
            <img src={image} alt={`${name} Image`} />
          </figure>
          <h3 className="mb-4 text-lg font-semibold"> {name} </h3>
          <button onClick={handleAddToCart} className="btn btn-neutral w-full">Add to Cart</button>
        </div>
        <div className="border p-4 rounded-lg flex flex-col gap-2">
          <h3 className="text-[#FF4A00] text-3xl"> ${parseFloat(price).toFixed(2)} </h3>
          <p>Brand: {brandName} </p>
          <p>Type: {type} </p>
          <div className="rating rating-sm flex gap-1 items-center">
            <span>Rating: ({rating})</span>
            {ratingCount.map((ele, index) => {
              return (
                <input
                  key={index}
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-3xl font-medium mb-2">Details aboout {name}</h3>
        <p> {description} </p>
      </div>
    </div>
  );
};

export default Details;
