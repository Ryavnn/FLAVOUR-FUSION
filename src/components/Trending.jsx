import React from "react";

const Trending = () => {
  return (
    <>
      <div className="w-full min-h-80  flex justify-center items-center mb-4">
        <div className="w-[90%] h-full">
          <h1 className="text-3xl font-bold">Trending Recipes</h1>
          <div className="w-full flex gap-3 flex-col justify-center items-center mt-5 md:flex-row md:justify-between">
            <div className="w-[80%] min-h-60 bg-white shadow-lg rounded-lg mt-3">
              <img
                className="w-full h-40 object-cover rounded-t-lg"
                src="https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/air_fryer_roast_chicken_27390_16x9.jpg"
                alt=""
                srcset=""
              />
              <p className="text-lg font-medium">Baked Rosemary Chicken</p>
              <p className="text-sm text-gray-600 px-2">
                It is a long established fact that a reader will be distracted
              </p>
            </div>
            <div className="w-[80%] min-h-60 bg-white shadow-lg rounded-lg mt-3">
              <img
                className="w-full h-40 object-cover rounded-t-lg"
                src="https://s.lightorangebean.com/media/20240914160809/Spicy-Penne-Pasta_-done.png"
                alt=""
                srcset=""
              />
              <p className="text-lg font-medium">Spicy Penne Pasta</p>
              <p className="text-sm text-gray-600 px-2">
                It is a long established fact that a reader will be distracted
              </p>
            </div>
            <div className="w-[80%] min-h-60 bg-white shadow-lg rounded-lg mt-3">
              <img
                className="w-full h-40 object-cover rounded-t-lg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSeyNBUBooHqQRxDBAOTzk1BYYG-y-PR7oKA&s"
                alt=""
                srcset=""
              />
              <p className="text-lg font-medium">Express Egg Fried Rice</p>
              <p className="text-sm text-gray-600 px-2">
                It is a long established fact that a reader will be distracted
              </p>
            </div>
            <div className="w-[80%] min-h-60 bg-white shadow-lg rounded-lg mt-3">
              <img
                className="w-full h-40 object-cover rounded-t-lg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtkAUg2rcLmHdAXfSc-s6kG3IZNyNy7y6n_A&s"
                alt=""
                srcset=""
              />
              <p className="text-lg font-medium">Pan-Seared Salmon</p>
              <p className="text-sm text-gray-600 px-2">
                It is a long established fact that a reader will be distracted
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trending;
