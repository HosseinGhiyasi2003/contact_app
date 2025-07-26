import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";


function Sidebar() {
  return (
    <div className="bg-[#605fb8] h-full w-[250px]  px-4 py-5">
      <h1 className="text-white text-3xl font-semibold">Contacts</h1>
      <div className="flex flex-col gap-y-5 mt-5">
        <NavLink to="/" className='flex items-center p-2.5 rounded-2xl hover:bg-[#787ac3]'>
          <FaUser className="text-white text-xl"  />
          <span className="text-white text-lg ml-4">Contacts</span>
        </NavLink>
        <NavLink to="/add-contact" className='flex items-center p-2.5 rounded-2xl hover:bg-[#787ac3]'>
        <CiCirclePlus className="text-white text-xl"  />        
        <span className="text-white text-lg ml-4">Add Contact</span></NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
