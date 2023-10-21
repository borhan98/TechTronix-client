import { useLoaderData } from "react-router-dom";
import Product from "./Product";
import { FaApple } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Products = () => {
  const loadedProducts = useLoaderData();
  return (
    <div className="container mx-auto px-2 md:px-1 lg:px-0 my-6">
      {loadedProducts.length !== 0 && (
        <div className="py-4 shadow-xl">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="grid grid-cols-2 max-h-56 py-6 items-center">
                <div className="flex flex-col md:flex-row md:justify-center items-center">
                  <figure>
                    <img
                      className="w-16 md:w-44 -rotate-12"
                      src="https://static.vecteezy.com/system/resources/previews/016/733/347/non_2x/sale-banner-set-special-offer-tag-collection-weekend-hot-deal-badge-template-this-weekend-only-sale-icon-free-png.png"
                    />
                  </figure>
                  <div className="-rotate-6">
                    <p className="text-xl md:text-4xl">0% EMI</p>
                    <p className="text-base md:text-xl font-medium">
                      Get the Offer Now!
                    </p>
                    <p className="text-xs">With</p>
                    <p className="text-base md:text-xl font-bold">
                      Exclusive Gift
                    </p>
                  </div>
                </div>
                <figure className="w-full h-full">
                  <img
                    className="w-full h-full mx-auto"
                    src="https://www.adslzone.net/app/uploads-adslzone.net/2023/05/Samsung-Galaxy-S23-Ultra-con-Watch-5.jpg"
                  />
                </figure>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid grid-cols-2 md:grid-cols-3 items-center">
                <figure className="hidden md:block">
                  <img
                    className="-rotate-45"
                    src="https://png.pngtree.com/png-vector/20221228/ourmid/pngtree-promotion-banner-of-new-year-sale-special-offer-png-image_6540617.png"
                  />
                </figure>
                <figure className="w-full h-full">
                  <img
                    className="w-full h-full mx-auto"
                    src="https://cdn.wareable.com/assets/images/4-smartwatches-wearable-technology-features-the-best-smartwatches-of-2022-tested-and-rated-options-for-every-budget-image10-xnahy4uaqj.jpg"
                  />
                </figure>
                <div className="md:-rotate-12 flex flex-col justify-center items-center">
                  <p className="text-xl md:text-2xl font-medium">Discount</p>
                  <p className="text-base md:text-3xl my-1">
                    UPTO <span className="text-5xl text-[#FF4A00]">20%</span>
                  </p>
                  <p className="text-2xl">to</p>
                  <p className="text-xl md:text-3xl text-center">
                    All Smart Watches
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="grid grid-cols-3">
                <div className="text-right flex flex-col justify-center md:-rotate-12">
                  <p className="flex justify-center items-center">
                    <span className="text-xl md:text-3xl font-bold">
                      <FaApple />
                    </span>
                    <span className="text-2xl md:text-4xl font-semibol italic">
                      Iphone
                    </span>
                  </p>
                  <span>Series 13</span>
                  <p className="text-xl md:text-2xl font-medium">
                    Available Now
                  </p>
                </div>
                <figure>
                  <img
                    className="w-full mx-auto"
                    src="https://istore.ke/wp-content/uploads/2022/05/iphone-13-pro-max-green-select.png"
                    alt=""
                  />
                </figure>
                <div className="-rotate-12 flex flex-col justify-center">
                  <figure>
                    <img
                      className="w-80"
                      src="https://previews.123rf.com/images/martialred/martialred1708/martialred170800071/84363440-available-now-label-badge-seal-or-burst-flat-vector-icon-for-apps-and-websites.jpg"
                    />
                  </figure>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      )}
      {loadedProducts.length !== 0 && (
        <div className="max-w-2xl mx-auto mb-6 text-center mt-20">
          <h2 className="text-3xl font-bold">Products</h2>
          <p className="text-sm md:text-base mt-2">
            This brief description invites customers to discover the brand&#39;s
            high-quality products and piques their interest.
          </p>
        </div>
      )}
      {loadedProducts.length === 0 ? (
        <p className="max-w-lg mx-auto text-center my-28">
          {
            "Sorry, but there are currently no products available under this brand. Please check back later or explore other brands for your desired products."
          }
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {loadedProducts.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
