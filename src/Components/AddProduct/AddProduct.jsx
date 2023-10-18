import toast from "react-hot-toast";

const AddProduct = () => {
  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const brandName = form.brand.value;
    const price = form.price.value;
    const type = form.type.value;
    const rating = form.rating.value;
    const image = form.image.value;
    const description = form.description.value;
    const newProduct = {
      name,
      brandName,
      price,
      type,
      rating,
      image,
      description,
    };

    // Post new product to database
    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          toast.success("Product addedd successfully");
          form.reset();
        }
      });
  };

  return (
    <div>
      <div className="container mx-auto">
        <div className="bg-base-200 py-16 px-28">
        <h3 className="text-center text-3xl mb-6">Add New Product</h3>
          <form onSubmit={handleAddProduct}>
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
                <label>
                  <input
                    type="text"
                    name="brand"
                    placeholder="Enter brand name"
                    className="input input-bordered w-full "
                  />
                </label>
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
                  <option value="Phone">Phone</option>
                  <option value="Headphone">Headphone</option>
                  <option value="Camera">Camera</option>
                  <option value="Smart Wacth">Smart Wacth</option>
                  <option value="Tablet">Tablet</option>
                  <option value="Drone">Drone</option>
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
                    placeholder="Enter image URL"
                    className="input input-bordered w-full "
                  />
                </label>
              </div>
            </div>
            <div>
              {/* Description */}
              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <label>
                  <input
                    type="text"
                    name="description"
                    placeholder="Enter description"
                    className="input input-bordered w-full "
                  />
                </label>
              </div>
              {/* Add button */}
              <div className="mt-6">
                <label>
                  <input
                    type="submit"
                    value={"Add Product"}
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

export default AddProduct;
