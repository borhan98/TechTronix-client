import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import { useEffect, useState } from "react";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("./brands.json")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);
  return (
    <div>
      <Banner />
      <div className="container mx-auto">
        <div className="text-center mt-20">
          <div className="max-w-2xl mx-auto mb-6">
            <h2 className="text-3xl font-bold">Brand Spotlight</h2>
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
      <div className="my-20">
        <div className="max-w-2xl mx-auto mb-6 text-center">
          <h2 className="text-3xl font-bold">Customer Reviews</h2>
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
