import React from 'react'
import { assets } from '../../assets/assets'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from '../../components/admin/Sidebar';
import { useAppContext } from '../../context/AppContext';

const Layout = () => {

  const {axios, setToken, navigate} = useAppContext()

  const logout = () => {
    localStorage.removeItem('token');
    axios.defaults.headers.common['Authorization'] = null;
    setToken(null)
    navigate('/')
  }

  return (
    <>
      <div className="flex items-center justify-between h-[70px] px-4 sm:px-12 border-b border-gray-200">
        <img src={assets.NCD_logo} alt="Logo" className="w-40 sm:w-50 cursor-pointer h-auto"
          onClick={() => navigate('/')}/>

        <button onClick={logout} className="text-sm px-6 py-2 bg-[#FF7A00] text-white rounded-full cursor-pointer">
          Logout </button>
      </div>
      <div className='flex h-[calc(100vh-70px)]'>
        <Sidebar/>
        <Outlet/>
      </div>

      
    </>
  )
}

export default Layout
