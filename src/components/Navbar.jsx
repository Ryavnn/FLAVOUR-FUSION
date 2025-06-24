
const Navbar = () => {
  return (
          <div className='w-full h-15 shadow-md flex justify-between items-center px-10'>
        <h1 className='font-extrabold text-2xl'>FlavourFusion</h1>
        <ul className='flex gap-7 items-center w-1/2 text-black font-semibold'>
          <li className=' hover:text-amber-500 cursor-pointer'>Home</li>
          <li className=' hover:text-amber-500 cursor-pointer'>Recipe</li>
          <li className=' hover:text-amber-500 cursor-pointer'>Meal plan</li>
          <li className=' hover:text-amber-500 cursor-pointer'>Community</li>
        </ul>
          <input type="search" name="search" id="" className='w-50 h-7 outline-none border border-black rounded-md bg-white'/>
      </div>
  )
}

export default Navbar