import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { useEffect, useState } from "react";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("./testimonial.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);
  return (
    <div className="container mx-auto shadow-xl drop-shadow-xl mt-10">
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
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="p-4">
              <figure className="mx-auto w-40 h-40 border-4 rounded-full mb-6">
                <img
                  className="w-full h-full rounded-full"
                  src={testimonial.img}
                />
              </figure>
              <h3 className="text-center text-xl font-bold">{testimonial.name}</h3>
              <div className="flex justify-center gap-4 my-2">
                <span className="p-2 cursor-pointer border-[#FF4A00] text-[#FF4A00] border rounded-full shadow-md text-xl">
                  <FaFacebookF />
                </span>
                <span className="p-2 cursor-pointer border-[#FF4A00] text-[#FF4A00] border rounded-full shadow-md text-xl">
                  <FaInstagram />
                </span>
                <span className="p-2 cursor-pointer border-[#FF4A00] text-[#FF4A00] border rounded-full shadow-md text-xl">
                  <FaTwitter />
                </span>
              </div>
              <div className="max-w-xl mx-auto text-center mb-6">
                {testimonial.opinion}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
