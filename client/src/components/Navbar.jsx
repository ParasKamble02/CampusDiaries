// import React, { use } from 'react'
// import { assets } from '../assets/assets'
// import { useNavigate } from 'react-router-dom';


// const Navbar = () => {
//   const navigate = useNavigate();
//   return (
//   <div className="flex justify-between items-center py-4 sm:py-3 mx-8 sm:mx-20 xl:mx-32 -mt-2">
  
//     <div className="flex items-center gap-3 -mt-2 sm:-mt-3">
//       <img src={assets.NCD_logo} alt="logo" className="w-32 sm:w-40 h-auto" />
//     </div>

//     <button onClick={() => navigate('/admin')}
//       className="flex items-center gap-2 rounded-full text-sm bg-[#FF7A00] text-white px-10 py-2.5 hover:bg-[#E96E00] transition-all cursor-pointer -mt-1 sm:-mt-2">
//       Login
//     <img src={assets.arrow} className="w-3" alt="arrow" />
//     </button>
//   </div>
//   );
// };

// export default Navbar

import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const Navbar = () => {

  const {navigate, token} = useAppContext()

  return (
    <div className="flex justify-between items-center py-4 sm:py-3 mx-8 sm:mx-20 xl:mx-32">

      {/* LOGO */}
      <div className="flex items-center">
        <img 
          src={assets.NCD_logo} 
          alt="logo" 
          className="w-45 sm:w-50 lg:w-56 h-auto object-contain drop-shadow-md"
        />
      </div>

      {/* LOGIN BUTTON */}
      <button
        onClick={() => navigate('/admin')}
        className="flex items-center gap-2 rounded-full text-sm bg-[#FF7A00] text-white px-10 py-2.5 hover:bg-[#E96E00] transition-all cursor-pointer">
        {token ? 'Dashbord': 'Login'}
        <img src={assets.arrow} className="w-3" alt="arrow" />
      </button>

    </div>
  );
};

export default Navbar;




