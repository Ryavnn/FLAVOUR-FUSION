import { Menu, X } from "lucide-react";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div className="w-full h-15 shadow-md flex justify-between items-center px-10">
      <h1 className="font-extrabold text-2xl">FlavourFusion</h1>
      <ul className="hidden gap-7 items-center w-1/2 text-black font-semibold md:flex">
        <li className=" hover:text-amber-500 cursor-pointer">Home</li>
        <li className=" hover:text-amber-500 cursor-pointer">Recipe</li>
        <li className=" hover:text-amber-500 cursor-pointer">Meal plan</li>
        <li className=" hover:text-amber-500 cursor-pointer">Community</li>
      </ul>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-700 focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 pb-4 w-50 h-50 flex flex-col  absolute top-16 right-0 bg-white shadow-lg rounded-lg z-10">
          <ul className="flex flex-col space-y-4 text-gray-700 font-medium ">
            <li onClick={toggleMenu}>Home</li>
            <li onClick={toggleMenu}>Recipe</li>
            <li onClick={toggleMenu}>Meal Plan</li>
            <li onClick={toggleMenu}>Community</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
