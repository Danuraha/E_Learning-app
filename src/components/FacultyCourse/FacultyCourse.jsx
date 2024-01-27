import React from 'react'
import CoursesCard from '../../components/CoursesCard/CoursesCard'
import Title from '../Title/Title'
import Loader from '../Loader/Loader'
import { useState, useEffect,useContext } from 'react'

//Images
import CImg1 from '../../Assets/DataScience.png'
import CImg2 from '../../Assets/AI.png'
import CImg3 from '../../Assets/CS.png'
import CImg4 from '../../Assets/CA.png'

const FacultyCourse = () => {
  const [course, setCourse] = useState([
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
  ]);

  return (
    <>
      <Loader  />
      <div id="editcourses">
        <Title
          title="Uploaded Courses"
          desc1="Browse the courses you have uploaded"
          desc2="the courses can be edited anytime"
        />
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10 grid-flow-row px-8 py-10 place-items-center">
          {course.map(({ imgUrl, name, category, _id }, index) => (
            <CoursesCard
              key={`${name}${index}`}
              imgUrl={imgUrl}
              courseName={name}
              courseDetail={category}
              courseId={_id}
              edit={true}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default FacultyCourse
