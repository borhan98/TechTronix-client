import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
  const loadedToUpdate = useLoaderData();
  const { _id, name, price, rating, image } = loadedToUpdate;

  const handleUpdateProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const brandName = form.brand.value.toLowerCase();
    const price = form.price.value;
    const type = form.type.value;
    const rating = form.rating.value;
    const image = form.image.value;
    const updatedProduct = {
      name,
      brandName,
      price,
      type,
      rating,
      image,
    };

    // Post new product to database
    fetch(`https://techtronix-server-6eijdzc4i-borhan-uddins-projects.vercel.app/products/${brandName}/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Product Updated successfully");
          form.reset();
        }
      });
  };

  return (
    <div>
      <div className="container mx-auto px-2 md:px-1 lg:px-0">
        <div className="bg-base-200py-4 md:py-8 lg:py-16 px-2 md:px-10 lg:px-28">
          <h3 className="text-center text-xl md:text-3xl mb-6">Update Product: <span className="font-semibold">{name}</span></h3>
          <form onSubmit={handleUpdateProduct}>
            <div className="grid md:grid-cols-2 gap-4">
              {/* Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={name}
                    placeholder="Enter name"
                    className="input input-bordered w-full "
                  />
                </label>
              </div>
              {/* Brand Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Brand Name</span>
                </label>
                <select name="brand" className="input input-bordered w-full">
                  <option value="Samsung">Samsung</option>
                  <option value="Apple">Apple</option>
                  <option value="Asus">Asus</option>
                  <option value="OnePlus">OnePlus</option>
                  <option value="HP">HP</option>
                  <option value="Xiaomi">Xiaomi</option>
                </select>
              </div>
              {/* price */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <label>
                  <input
                    type="number"
                    name="price"
                    defaultValue={price}
                    placeholder="Enter price"
                    className="input input-bordered w-full "
                  />
                </label>
              </div>
              {/* Select type */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Type</span>
                </label>
                <select name="type" className="input input-bordered w-full">
                  <option value="Laptop">Laptop</option>
                  <option value="SmartPhone">Smartphone</option>
                  <option value="Headphone">Headphone</option>
                  <option value="Camera">Camera</option>
                  <option value="Smart Wacth">Smart Wacth</option>
                  <option value="Tablet">Tablet</option>
                  <option value="Drone">Drone</option>
                  <option value="Earbuds">Earbuds</option>
                  <option value="Monitor">Monitor</option>
                </select>
              </div>
              {/* Rating */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <label>
                  <input
                    type="number"
                    name="rating"
                    defaultValue={rating}
                    placeholder="Enter rating"
                    className="input input-bordered w-full "
                    max={5}
                    min={1}
                  />
                </label>
              </div>
              {/* Image */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <label>
                  <input
                    type="text"
                    name="image"
                    defaultValue={image}
                    placeholder="Enter image URL"
                    className="input input-bordered w-full "
                  />
                </label>
              </div>
            </div>
            <div>
              {/* Submit button */}
              <div className="mt-6">
                <label>
                  <input
                    type="submit"
                    value={"Submit"}
                    className="input input-bordered w-full bg-[#2B3440] text-white border border-black btn hover:border hover:border-black hover:text-black"
                  />
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
