import { assets } from '@/assets/assets'
import React from 'react'

function Footer() {
  return (
    <div className="flex flex-col items-center text-center py-8">

  {/* Logo */}
  <img width={160} src={assets.logo} alt="logo" className="mb-4" />

  {/* Social Icons */}
  <div className="flex gap-4 mb-4">
    <img width={32} src={assets.facebook_icon} alt="facebook" className="cursor-pointer hover:scale-110 transition" />
    <img width={32} src={assets.twitter_icon} alt="twitter" className="cursor-pointer hover:scale-110 transition" />
    <img width={32} src={assets.instagram_icon} alt="instagram" className="cursor-pointer hover:scale-110 transition" />
  </div>

  {/* Copyright */}
  <p className="text-gray-500 text-sm">
    © {new Date().getFullYear()} CareerConnect. All rights reserved.
  </p>

</div>
  )
}

export default Footer
