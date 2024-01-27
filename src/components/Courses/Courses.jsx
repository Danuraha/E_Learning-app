import CoursesCard from '../CoursesCard/CoursesCard'
import Title from '../Title/Title'
import Loader from '../Loader/Loader'
import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa'

//Images
import CImg1 from '../../Assets/DataScience.png'
import CImg2 from '../../Assets/AI.png'
import CImg3 from '../../Assets/CS.png'
import CImg4 from '../../Assets/CA.png'
 
const Courses = () => {
  const [courses, setCourses] = useState([
    {
      "imgUrl":CImg1,
      "name":'Data Science',
      "category":'IT',
      "_id":'1',
    },
    {
      "imgUrl":CImg2,
      "name":'Artificial Inteligence',
      "category":'IT',
      "_id":'2',
    },
    {
      "imgUrl":CImg3,
      "name":'Cyber Security',
      "category":'IT',
      "_id":'3',
    },
    {
      "imgUrl":CImg4,
      "name":'Computer Architecture',
      "category":'IT',
      "_id":'4',
    }
  ])
  const [loading, setLoading] = useState(false)

  return (
    <>
      <Loader active={loading} />
      <div
        id="Courses"
        className="flex justify-center items-center mx-auto my-4 flex-col sm:p-10 p-5"
      >
        <Title
          title="Explore Courses"
          desc1="Build career-relevant skills"
          desc2="with courses from top industry experts"
        />
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8">
          {courses.map(({ imgUrl, name, category, _id }, index) => (
            <CoursesCard
              key={`${name}${index}`}
              imgUrl={imgUrl}
              courseName={name}
              courseDetail={category}
              courseId={_id}
            />
          ))}
        </div>
        <Link
          to="/allcourses"
          className="flex flex-row items-center justify-center mt-4 border-2 rounded bg-[#E5E7EB] cursor-pointer "
        >
          <div
            to="/allcourses"
            className="text-xl text-primary underline pl-5 pr-3 py-3"
            style={{ fontFamily: 'Nunito' }}
          >
            View All
          </div>
          <div>
            <FaAngleRight size="1.5rem" className="mr-2" />
          </div>
        </Link>
      </div>
    </>
  )
}

export default Courses
