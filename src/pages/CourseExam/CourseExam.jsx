import React, { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import Home from '../Home/Home'

const CourseExam = () => {
  const {id} = useParams();
  const [isCompleted,setIsCompleted]= useState(false);

  const Ques = [
    {
      '_id': 'Q01',
      'question':'Question01',
      'options': ['op01','op02','op03','op04'],
      'answer': 'op01'
    },
    {
      '_id': 'Q02',
      'question':'Question02',
      'options': ['op01','op02','op03','op04'],
      'answer': 'op04'
    },
    {
      '_id': 'Q03',
      'question':'Question03',
      'options': ['op01','op02','op03','op04'],
      'answer': 'op02'
    },

  ]

 
  return (
    <>
      <Navbar />
      <div className="grid grid-flow-col grid-cols-5">
        <Sidebar courseId={id} />
        <div className="flex flex-col col-span-4 pt-24 border-l-2 pl-5 education-bg">
          <p className="text-5xl font-nunito font-extralight px-10">Exam</p>
          {
            !isCompleted?<div className="w-full py-5 px-16">
            {Ques.map((no, key) => (
                <div key={key}>
                  <div className="text-gray-900 text-xl py-5 font-nunito">
                    {key + 1} {no.question}
                    {console.log(no)}
                  </div>
                  <div className="mt-2 flex flex-col">
                    {no.options.map((questionOpt, idx) => (
                      <label
                        className="inline-flex items-center"
                        key={`${questionOpt}-${idx}`}
                      >
                      {console.log(idx)}
                        <input
                          type="radio"
                          className="form-radio"
                          name={no.question}
                          value={questionOpt}
                          // onChange={() =>
                          //   no.answer === questionOpt ? score++ : null
                          // }
                        />
                        <span className="text-gray-500 ml-2 font-nunito">
                          {questionOpt}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
          </div>:<div>Success</div>
          }
          <button
            className="flex justify-center text-center py-2 m-10 rounded-xl hover:bg-green-900  text-xl w-36 h-10 bg-green-700 text-white font-nunito"
            onClick={()=>{setIsCompleted(true)}}
          >
            {isCompleted?"Submitted":"Submit"}
          </button>
        </div>
      </div>
    </>
  )
}

export default CourseExam
