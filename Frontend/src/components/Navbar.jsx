import { useClerk, useUser, UserButton } from '@clerk/react'
import { assets } from '../assets/assets'
import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '@/contexts/AppContext'
import { useLocation } from 'react-router-dom';

function Navbar() {

    const {openSignIn} = useClerk()
    const {user} = useUser()
    

    const navigate = useNavigate()

    const {showRecruiterLogin, setShowRecruiterLogin} = useContext(AppContext)

    





  return (
    <div className='shadow py-4'>
      <div className='container px-4 2xl:px-20 mx-auto flex justify-between items-center'>
        <img onClick={()=> navigate('/')} className='cursor-pointer' src={assets.logo} alt="logo" className="h-12 w-auto object-contain cursor-pointer" />
        {
            user
            ? <div className='flex items-center  gap-2.5 '>
                <Link to={'/applications'}>Applied Jobs</Link>
                <p> | </p>
                <p className='max-sm:hidden'>Hi, {user.firstName+" "+user.lastName}</p>
                <UserButton/>
                

            </div>
            :<div className='flex gap-4 max-sm:text-xs'>
            <button 
            onClick={e => setShowRecruiterLogin(true)}
            className="text-gray-600 font-medium px-4 py-2 rounded-full 
hover:bg-gray-200 hover:text-blue-600 
active:bg-gray-200 active:scale-95 
transition duration-200 cursor-pointer">
  Recruiter Login
</button>

<button
onClick={e=>openSignIn()}
 className="bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full font-medium shadow-md 
hover:bg-blue-800 hover:shadow-lg active:scale-95 transition duration-200 cursor-pointer">
  Login
</button> </div>
      
        }
        </div>
    </div>
  )
}

export default Navbar
