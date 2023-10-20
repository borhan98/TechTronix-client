const Banner = () => {
  return (
    <div className="container mx-auto px-2 md:px-1 lg:px-0">
      <div className="bg-no-repeat bg-[url('https://i.ibb.co/9Nj0PF8/banner4.jpg')] bg-center bg-cover h-80 md:h-[500px] lg:h-[600px] w-full flex justify-center items-center text-white">
        <div className="bg-black opacity-75 w-[280px] md:w-2/3 p-2 md:p-5 lg:p-10 rounded-lg">
          <h1 className="text-2xl md:text-3xl lg:text-5xl text-center leading-loose">
          Stay with TechTronix & Wired to the Future Technologies
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
