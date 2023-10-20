import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Brands = ({ brand }) => {
  const { brand_img, brand_name } = brand;

  return (
    <div className="relative border rounded-lg h-full bg-base-200 cursor-pointer">
        <Link to={`/products/${brand_name.toLowerCase()}`}>
        <figure className="relative w-full h-full flex justify-center items-center p-6">
          <img src={brand_img} alt={brand_name} />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 rounded-lg"></div>
        </figure>
        <span className="absolute bottom-2 left-2 bg-[#FF4A00] text-white opacity-100 py-1 md:py-3 px-3 md:px-5 text-sm md:text-base italic">
          {brand_name}
        </span>
        </Link>
    </div>
  );
};

export default Brands;
Brands.propTypes = {
  brand: PropTypes.object.isRequired,
};
