import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import Footer from "../Footer/Footer";

const Home = () => {
  const brands = useLoaderData();
  console.log(brands);
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
      <Footer />
    </div>
  );
};

export default Home;
