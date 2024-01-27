import React, { useEffect, useState, useCallback } from 'react'
import Card from '../Card/Card'
import Footer from '../Footer/Footer.jsx'
import Sidebar from '../Sidebar/Sidebar'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'
import Swal from 'sweetalert2'

//Images
import CImg1 from '../../Assets/DataScience.png'
import CImg2 from '../../Assets/AI.png'
import CImg3 from '../../Assets/CS.png'
import CImg4 from '../../Assets/CA.png'
import IImg1 from '../../Assets/Ishan.png'
import IImg3 from '../../Assets/Keshi.png'
// import IImg3 from '../../Assets/Thanu.png'


const CourseOverview = () => {
  const params = useParams();

  const [courseName,setCourseName] = useState('');
  const [instructorName,setInstructorName] = useState('');
  const [description,setDescription] = useState('');
  const [courseId,setCourseId] = useState('');
  const [imgUrl,setImgUrl] = useState('');
  const [enrolled,setEnrolled] = useState(false);
  const [isLoading,setisLoading] = useState(false);
  const [user,setUser] = useState([]);
  const [isCompleted,setIsCompleted] = useState(false);



  const userData = [{
    name:"thanu",
    role:""
  }]
  const courseData = [
    {
      'courseId':'1',
      'courseName':"Data Science",
      'instructorName':"Dr.Ishan",
      'description':"Information Technology",
      'imgUrl':CImg1,
      'instructorImgSrc':IImg1
    },
    {
      'courseId': '2',
      'courseName': 'Artificial Inteligence',
      'instructorName': 'Dr.M.Shanaka',
      'description': 'Information Technology',
      'imgUrl': CImg2,
      'instructorImgSrc': 'src/pages/Course/assets/Dr.Ishan.png',
    },
    {
      'courseId': '3',
      'courseName': 'Cyber Security',
      'instructorName': 'Dr.Keshi',
      'description': 'Information Technology',
      'imgUrl': CImg3,
      'instructorImgSrc': IImg3,
    },
    {
      'courseId': '4',
      'courseName': 'Computer Architecture',
      'instructorName': 'Dr.Keshi',
      'description': 'Information Technology',
      'imgUrl': CImg4,
      'instructorImgSrc': 'src/pages/Course/assets/Dr.Ishan.png',
    },
  ]
  // setCourseId(courseData[0].courseId);
  // setCourseName(courseData[0].courseName);
  // setDescription(courseData[0].description);
  // setImgUrl(courseData[0].imgUrl);

  const enrollCourse = (e) =>{
    setEnrolled(true);
  }
  const unenrollCourse = (e) =>{
    setEnrolled(false);
  }




  return (
    <>
      <Loader active={isLoading} />
      <div className="flex min-h-screen" style={{ fontFamily: 'Nunito' }}>
        <div className="w-1/6 bg-white border-r border-gray-300">
          <Sidebar courseId={courseData[params.id-1].courseId} />
        </div>
        {!isLoading ? (
          <div className=" my-20">
            <div
              className="mx-10 h-40 bg-lightCyan shadow-xl rounded-3xl pr-8 flex flex-row items-center justify-between"
              style={{ width: '70vw' }}
            >
              <img
                className="rounded-l-3xl h-full"
                src={`${courseData[params.id-1].imgUrl}`}
                alt="..."
              ></img>
              <div className="font-regular text-2xl">{courseData[params.id-1].courseName}</div>
              {userData[0].role === 'faculty' ? (
                <></>
              ) : (
                <>
                  {!enrolled ? (
                    <button
                      className="bg-cornflowerBlue -hue-rotate-30 drop-shadow-md text-white font-bold py-4 px-8 justify-self-start rounded-lg"
                      onClick={enrollCourse}
                    >
                      Enroll
                    </button>
                  ) : (
                    <button
                      className="bg-red-400 shadow-lg text-white font-bold py-4 px-8 justify-self-start rounded-lg"
                      onClick={unenrollCourse}
                    >
                      Unenroll
                    </button>
                  )}
                </>
              )}
            </div>
            <div className=" mx-8 text-lg font-light text-gray-600 py-10 flex justify-center p-4">
              {courseData[params.id-1].description}
            </div>
            <div>
              <div className="grid sm:grid-cols-1 md:grid-cols-1 ml-36">
                <div style={{ width: '250px' }}>
                  <Card
                  
                    imgUrl={courseData[params.id-1].instructorImgSrc}
                    text={courseData[params.id-1].instructorName}
                    color="#E7EAC4"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <Footer />
    </>
  )
}

export default CourseOverview
