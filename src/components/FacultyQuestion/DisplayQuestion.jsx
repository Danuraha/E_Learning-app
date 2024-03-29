import React, { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { IoMdTrash } from 'react-icons/io'
import Swal from 'sweetalert2'

const DisplayQuestion = () => {
  const [assignment, setAssignment] = useState([])
  const [exam, setExam] = useState([])

  let params = useParams()

  

  return (
    <div className="grid grid-cols-2 divide-x divide-gray-400 pb-16">
      <div className="px-10">
        <div className="flex flex-col text-3xl px-8 py-4 font-nunito ">
          Assignment Questions
        </div>
        {assignment && console.log(assignment)}
        <div className="w-full py-5 px-10">
          {assignment &&
            assignment.map((no, key) => (
              <React.Fragment key={no._id}>
                <div className="flex text-gray-900 text-lg py-5 font-nunito items-start justify-between">
                  <div>
                    {key + 1} {no.question}
                  </div>
                  <div
                    className="text-center rounded-full cursor-pointer shadow-inner p-1"
                    
                  >
                    <IoMdTrash className="text-2xl" />
                  </div>
                </div>
                <div className=" text-sm py-2 font-nunito">
                  Ans: {no.answer}
                </div>
                <div className="text-gray-900 text-sm py-2 font-nunito">
                  Options:
                </div>
                <div className="mt-2 flex flex-col">
                  {no.options.map((questionOpt, idx) => (
                    <label
                      className="inline-flex items-center"
                      key={`${questionOpt}-${idx}`}
                    >
                      <span className="text-gray-500 text-sm ml-2 font-nunito">
                        {idx + 1} {questionOpt}
                      </span>
                    </label>
                  ))}
                </div>
              </React.Fragment>
            ))}
        </div>
      </div>
      <div className="px-10">
        <div className="flex justify-left text-3xl px-8 py-4 font-nunito">
          Exam Questions
        </div>
        {exam && console.log(exam)}
        <div className="w-full py-5 px-10">
          {exam &&
            exam.map((no, key) => (
              <React.Fragment key={no._id}>
                <div className="flex text-gray-900 text-lg py-5 font-nunito items-start justify-between">
                  <div>
                    {key + 1} {no.question}
                  </div>
                  <div
                    className="text-center rounded-full cursor-pointer shadow-inner p-1"
                  >
                    <IoMdTrash className="text-2xl" />
                  </div>
                </div>
                <div className=" text-sm py-2 font-nunito">
                  Ans: {no.answer}
                </div>
                <div className="text-gray-900 text-sm py-2 font-nunito">
                  Options:
                </div>
                <div className="mt-2 flex flex-col">
                  {no.options.map((questionOpt, idx) => (
                    <label
                      className="inline-flex items-center"
                      key={`${questionOpt}-${idx}`}
                    >
                      <span className="text-gray-500 text-sm ml-2 font-nunito">
                        {idx + 1} {questionOpt}
                      </span>
                    </label>
                  ))}
                </div>
              </React.Fragment>
            ))}
        </div>
      </div>
    </div>
  )
}

export default DisplayQuestion
