import { assets } from '@/assets/assets'
import { AppContext } from '@/contexts/AppContext'
import React, { useContext } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

function Dashboard() {

    const navigate = useNavigate()

    const {companyData} = useContext(AppContext)

    const { setCompanyToken, setCompanyData } = useContext(AppContext);

const handleLogout = () => {
  localStorage.removeItem("companyToken");   // remove token
  localStorage.removeItem("companyData");    // optional

  setCompanyToken(null);                     // clear state
  setCompanyData(null);

  navigate("/");                             // redirect
};

  return (
    <div className="min-h-screen bg-gray-50">

  {/* Navbar */}
  <div className="bg-white shadow-sm py-4">
    <div className="flex items-center justify-between container px-4 2xl:px-20 mx-auto">

      {/* Logo */}
      <img
      onClick={e => navigate('/')}
        src={assets.logo}
        alt="logo"
        className="h-11 w-auto object-contain cursor-pointer"
      />

      {/* Right Section */}

      {companyData && (
        <div className="flex items-center gap-4">

        {/* Welcome Text */}
        <p className="text-gray-600 text-sm sm:text-base max-sm-hidden">
          Welcome, <span className="font-semibold text-gray-800">{companyData.name}</span>
        </p>

        {/* Profile + Dropdown */}
        <div className="relative group cursor-pointer">

          {/* Icon */}
          <img
            src={companyData.image}
            alt="company"
            className="w-10 h-10 rounded-full border border-gray-300"
          />

          {/* Dropdown */}
          <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-md 
                          opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                          transition-all duration-200">

            <ul className="text-sm text-gray-600 list-none">
              <li 
              onClick={handleLogout}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Logout
              </li>
            </ul>

          </div>
        </div>

      </div>
      )}
      
    </div>
  </div>

  {/* left and right side */}

  <div className='flex items-start'>

    {/* Left Side with option to add, manage and view application */}
    <div className='inline-block min-h-screen border-r-2'>
        <ul className='flex flex-col items-start pt-5 text-gray-800'>
            <NavLink className={({isActive})=> `flex items-center p-3 sm:px-6 gap-2 w-full  ${isActive ?  'bg-blue-100 border-r-4 border-blue-500' : 'hover:bg-gray-100'}`} to={'/dashboard/add-job'}>
            <img className='min-w-4' src={assets.add_icon} alt="" />
            <p className='max-sm:hidden'>Add Job</p>
            </NavLink>

            <NavLink className={({isActive})=> `flex items-center p-3 sm:px-6 gap-2 w-full  ${isActive ?  'bg-blue-100 border-r-4 border-blue-500' : 'hover:bg-gray-100'}`} to={'/dashboard/manage-jobs'}>
            <img className='min-w-4' src={assets.home_icon} alt="" />
            <p className='max-sm:hidden'>Manage Job</p>
            </NavLink>

            <NavLink className={({isActive})=> `flex items-center p-3 sm:px-6 gap-2 w-full  ${isActive ?  'bg-blue-100 border-r-4 border-blue-500' : 'hover:bg-gray-100'}`} to={'/dashboard/view-applications'}>
            <img className='min-w-4' src={assets.person_tick_icon} alt="" />
            <p className='max-sm:hidden'>View Applications</p>
            </NavLink>
        </ul>
    </div>

    <div>
        <Outlet/>
    </div>

  </div>

</div>
  )
}

export default Dashboard
