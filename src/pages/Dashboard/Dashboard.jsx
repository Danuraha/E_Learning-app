import Courses from '../../components/Courses/Courses.jsx'
import Navbar from '../../components/Navbar/Navbar.jsx'
import WelcomeBanner from '../../components/WelcomeBanner/WelcomeBanner.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import { useEffect, useState } from 'react'
import FacultyCourse from '../../components/FacultyCourse/FacultyCourse.jsx'
import {CourseProvider } from '../../data/Coursedata.js'



const Dashboard = () => {
  const user = [{
    id:"U01",
    role:'faculty'
  }]
  const [userData, setUser] = useState(user)
  return (
    <div>
      <Navbar />
      <WelcomeBanner />
      { userData[0].role === 'faculty' ? <FacultyCourse /> : <Courses />}
      <Footer />
    </div>
  )
}

export default Dashboard
