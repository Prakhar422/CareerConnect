import Hero from '@/components/Hero'
import Navbar from '../components/Navbar'
import React from 'react'
import JobListing from '@/components/JobListing'
import Footer from '@/components/Footer'

function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <JobListing/>
      <Footer/>
    </div>
  )
}

export default Home
