import PropTypes from "prop-types";

const Brands = ({ brand }) => {
  const { brand_img, brand_name } = brand;
  return (
    <div className="relative border rounded-lg h-full bg-base-200 cursor-pointer">
      <figure className="relative w-full h-full flex justify-center items-center">
        <img src={brand_img} alt={brand_name} />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 rounded-lg"></div>
      </figure>
      <span className="absolute bottom-2 left-2 bg-[#2B3440] text-white opacity-100 py-3 px-5">{brand_name}</span>      
    </div>
  );
};

export default Brands;
Brands.propTypes = {
    brand: PropTypes.object.isRequired,
}
