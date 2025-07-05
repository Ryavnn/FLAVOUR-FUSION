const Header = () => {
  return (
    <div className="w-full h-140  flex justify-center items-center  ">
      <div
        className="w-[90%] h-[80%] rounded-2xl shadow-lg bg-no-repeat bg-center bg-cover  flex flex-col justify-center items-center
        bg-[url(https://cdn-ijnhp.nitrocdn.com/pywIAllcUPgoWDXtkiXtBgvTOSromKIg/assets/images/optimized/rev-5794eaa/www.jaypeehotels.com/blog/wp-content/uploads/2024/07/Blog-3-scaled.jpg)] filter brightness-75"
      >
        <h1 className="text-6xl text-white font-extrabold text-center space-y-2 mt-5">
          Discover your next cullinary<br></br> adventure
        </h1>
        <p className="text-center text-white mt-5">
          Explore thousands of recipes, personalized just for you. From quick
          weeknight dinners to gourmet<br></br> weekend feasts, find your
          perfect dish
        </p>
        <div className="relative w-[70%] h-12 mt-5">
          <input
            type="search"
            className="h-full w-full bg-white  outline-none p-2 pr-24 rounded-xl"
            placeholder="Search..."
          />
          <button className="w-20 h-10 bg-amber-500  text-white absolute top-1/2 transform -translate-y-1/2 right-2 rounded-xl">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
