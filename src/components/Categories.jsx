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
    img: "https://images.unsplash.com/photo-1521302080334-4bebac276b64",
  },
  {
    label: "Budget-friendly",
    img: "https://images.unsplash.com/photo-1562967916-eb82221dfb36",
  },
  {
    label: "Gluten-Free",
    img: "https://images.unsplash.com/photo-1584270354949-1f3d8a1ef5af",
  },
  {
    label: "One Pot Meals",
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
  },
  {
    label: "Comfort Food",
    img: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38",
  },
  {
    label: "Meal Prep",
    img: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2",
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
