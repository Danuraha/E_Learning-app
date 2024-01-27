import React from 'react'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Banner from '../../components/Banner/Banner.jsx'
import Cards from '../../components/Cards/Cards.jsx'
import Courses from '../../components/Courses/Courses.jsx'
import Footer from '../../components/Footer/Footer.jsx'

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Cards />
      <Courses />
      <Footer />
    </>
  )
}

export default Home
