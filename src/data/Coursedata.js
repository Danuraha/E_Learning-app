import { createContext, useState } from 'react'

export const CourseList = createContext()

export const CourseProvider = ({ children }) => {
  const couserArray = [
    {
      courseId: '1',
      courseName: 'Data Science',
      instructorName: 'Dr.Ishan',
      description: 'Information Technology',
      imgUrl: 'src/components/Courses/assets/DataScience.png',
      instructorImgSrc: 'src/pages/Course/assets/Dr.Ishan.png',
    },
    {
      courseId: '2',
      courseName: 'Artificial Inteligence',
      instructorName: 'Dr.Ishan',
      description: 'Information Technology',
      imgUrl: 'src/pages/Course/assets/DataScience.png',
      instructorImgSrc: 'src/pages/Course/assets/Dr.Ishan.png',
    },
    {
      courseId: '3',
      courseName: 'Cyber Security',
      instructorName: 'Dr.Ishan',
      description: 'Information Technology',
      imgUrl: 'src/pages/Course/assets/DataScience.png',
      instructorImgSrc: 'src/pages/Course/assets/Dr.Ishan.png',
    },
  ]

  return (
    <CourseList.Provider value={{ couserArray }}>
      {children}
    </CourseList.Provider>
  )
}
