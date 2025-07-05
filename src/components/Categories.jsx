const categories = [
  {
    label: "Quick & easy",
    img: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
  },
  {
    label: "Healthy eats",
    img: "https://jackcityfitness.com/wp-content/uploads/shutterstock_1351783832-1.jpg",
  },
  {
    label: "Vegan meals",
    img: "https://images.immediate.co.uk/production/volatile/sites/30/2023/01/Ponzu-tofu-poke-bowl-8733c67.jpg?quality=90&resize=440,400",
  },
  {
    label: "Budget-friendly",
    img: "https://hips.hearstapps.com/hmg-prod/images/cheap-dinner-ideas-air-fryer-chicken-thighs-65a01fed3f528.jpeg?crop=1xw:1xh;center,top&resize=980:*",
  },
  {
    label: "Gluten-Free",
    img: "https://www.eatingwell.com/thmb/O0EjBleCjGHHmQpILjUoL7KRCyY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7032137-8a6db525972c4aeabdac3aff103213a0.jpg",
  },
  {
    label: "One Pot Meals",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
  },
  {
    label: "Comfort Food",
    img: "https://www.marthastewart.com/thmb/ho-sH1jsFdmlOrLs_AmPLI5ozm0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/fried-chicken-waffles-102846834_0-e02c36509049467bac6d8ab074c05c5e.jpg",
  },
  {
    label: "Meal Prep",
    img: "https://www.bodystreet.com/api/v1/static/images/artikel/2021/April/iStock-1136168094_large.jpg",
  },
];

const Categories = () => {
  return (
    <div className="w-full py-10 flex justify-center items-center">
      <div className="w-[90%]">
        <h1 className="text-3xl font-bold mb-6">Browse By Categories</h1>

        <div className="flex flex-wrap justify-between">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="w-[23%] mb-6 text-center flex flex-col items-center"
            >
              <img
                className="w-full h-48 object-cover rounded-md"
                src={cat.img}
                alt={cat.label}
              />
              <p className="mt-2 font-semibold">{cat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
