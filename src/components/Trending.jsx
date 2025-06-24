import React from "react";

const Trending = () => {
  return (
    <>
      <div className="w-full h-80  flex justify-center items-center">
        <div className="w-[90%] h-full">
          <h1 className="text-3xl font-bold">Trending Recipes</h1>
          <div className="w-full flex gap-3 flex-col ">
            <div className="w-1/4 h-60 bg-white shadow-lg rounded-lg mt-3">
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
            <div className="w-1/4 h-60 bg-white shadow-lg rounded-lg mt-3">
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
            <div className="w-1/4 h-60 bg-white shadow-lg rounded-lg mt-3">
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
            <div className="w-1/4 h-60 bg-white shadow-lg rounded-lg mt-3">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Trending;
