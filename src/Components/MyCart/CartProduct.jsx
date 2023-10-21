import PropTypes from "prop-types";
import Swal from "sweetalert2";

const CartProduct = ({ product, myProducts, setMyProducts }) => {
  const { _id, name, brandName, price, type, rating, image } = product;
  const ratingCount = [];
  for (let i = 1; i <= rating; i++) {
    ratingCount.push(1);
  }

  // Handle delete form cart
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your product has been deleted.", "success");
        fetch(`https://techtronix-server-n5ha8r90r-borhan-uddins-projects.vercel.app/cart/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remainingProducts = myProducts.filter(
                (product) => product._id !== id
              );
              setMyProducts(remainingProducts);
            }
          });
      }
    });
  };

  return (
    <div className="rounded-md p-4 grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 bg-white">
      <figure className="w-full">
        <img className="max-w-[200px] mx-auto md:w-full" src={image} alt={name} />
      </figure>
      <div className="col-span-2 space-y-1">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p>Type: {type}</p>
        <p>Brand: {brandName}</p>
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
        <p>
          Price:{" "}
          <span className="text-[#FF4A00]">
            ${parseFloat(price).toFixed(2)}
          </span>
        </p>
        <p className="pt-4">
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-neutral btn-sm"
          >
            remove
          </button>
        </p>
      </div>
    </div>
  );
};

export default CartProduct;
CartProduct.propTypes = {
  product: PropTypes.object.isRequired,
  setMyProducts: PropTypes.func.isRequired,
  myProducts: PropTypes.array.isRequired,
};
