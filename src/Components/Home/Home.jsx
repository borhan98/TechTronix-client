import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import { useEffect, useState } from "react";
import Testimonial from "../Testimonial/Testimonial";
import { useLoaderData } from "react-router-dom";
import Popular from "../Popular/Popular";

const Home = () => {
  const [brands, setBrands] = useState([]);
  const products = useLoaderData();
  const bestSell = products.filter(product => ((product.price > 700 && product.price < 1200)));

  useEffect(() => {
    fetch("./brands.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  return (
    <div>
      <Banner />
      <div className="container mx-auto px-2 md:px-1 lg:px-0">
        <div className="text-center mt-20">
          <div className="max-w-2xl mx-auto mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Brand Spotlight</h2>
            <p className="text-sm md:text-base mt-2">
              Discover the tech industry&#39;s most influential brands, their
              journeys, innovations, and impact in our Brand Spotlight section
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {brands.map((brand) => (
              <Brands key={brand.id} brand={brand} />
            ))}
          </div>
        </div>
      </div>
      <div className="my-20 container mx-auto px-2 md:px-1 lg:px-0">
        <div className="max-w-2xl mx-auto mb-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Most Popular</h2>
          <p className="text-sm md:text-base mt-2">
          Explore our hottest sellers and customer favorites, handpicked just for you. Shop the products everyone&#39;s talking about and experience what&#39;s trending now.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {
            bestSell.map(product => <Popular key={product._id} product={product} />)
          }
        </div>
      </div>
      <div className="my-20 container mx-auto px-2 md:px-1 lg:px-0">
        <div className="max-w-2xl mx-auto mb-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Customer Reviews</h2>
          <p className="text-sm md:text-base mt-2">
            Discover what our satisfied customers have to say about their experiences with our products and services. Read real feedback and make informed decisions
          </p>
        </div>
        <Testimonial />
      </div>
    </div>
  );
};

export default Home;
