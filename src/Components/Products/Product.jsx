import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, name, brandName, price, type, rating, image } = product;
  const ratingCount = [];
  for (let i = 1; i <= rating; i++) {
    ratingCount.push(1);
  }
  return (
    <div className="drop-shadow-md shadow-md p-4 rounded-lg flex flex-col justify-between">
      <figure className="p-4">
        <img className="w-full h-64 object-cover" src={image} alt="" />
      </figure>
      <h3 className="text-center text-lg font-medium">
        {brandName.toUpperCase()}
      </h3>
      <h3 className="text-center text-xl font-bold">
        {name} ({type})
      </h3>
      <div className="rating rating-sm flex gap-1 items-center justify-center">
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
      <p className="text-center">Price: {parseFloat(price).toFixed(2)}$</p>
      <div className="grid grid-cols-2 gap-2 mt-2">
        <Link to={`/updateproduct/${brandName.toLowerCase()}/${_id}`} className="btn btn-neutral btn-sm">
          <button>Update</button>
        </Link>
        <Link
          to={`/products/${brandName.toLowerCase()}/${_id}`}
          className="btn btn-neutral btn-sm"
        >
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
Product.propTypes = {
  product: PropTypes.object.isRequired,
};
