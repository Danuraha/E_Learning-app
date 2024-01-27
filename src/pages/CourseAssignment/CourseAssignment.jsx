import React, { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'

const CourseAssignment = () => {
  const {id} = useParams();
  const [assignmentLink, setAssignmentLink] = useState('');
  const [file, setFile] = useState(null);
  const [isCompleted,setIsCompleted]= useState(false);


  const handleLinkChange = (event) => {
    setAssignmentLink(event.target.value);
  }

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle submission logic
    console.log(assignmentLink, file);
  }

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 auto',
    width: '80%',
    maxWidth: '600px'
  };

  const labelStyle = {
    margin: '10px 0',
    fontSize: '18px',
    fontWeight: 'bold',
    textAlign: 'left',
    width: '100%'
  };

  const inputStyle = {
    padding: '10px',
    fontSize: '16px',
    border: '2px solid #ccc',
    borderRadius: '5px',
    width: '100%'
  };

  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    margin: '20px 0',
    cursor: 'pointer',
    width: '100%'
  };
   const [assignment, setAssignment] = useState([])
   const [isLoading, setisLoading] = useState(false)

  return (
    <>
      <Loader active={isLoading} />
      <Navbar />
      <div className="grid grid-flow-col grid-cols-5">
        <Sidebar courseId={id} />
        <div className="flex flex-col col-span-4 pt-24 border-l-2 pl-5 education-bg">
          <p className="text-5xl font-nunito font-extralight px-10">Assignment</p>
          {
            !isCompleted?<div className="w-full py-5 px-16">
                <React.Fragment >
                  <form onSubmit={handleSubmit} style={formStyle}>
                    <label style={labelStyle}>
                      Assignment Submission Link:
                      <input type="text" value={assignmentLink} onChange={handleLinkChange} style={inputStyle} />
                    </label>
                    <label style={labelStyle}>
                      File:
                      <input type="file" onChange={handleFileChange} style={inputStyle} />
                    </label>
                  </form>
                </React.Fragment>
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

export default CourseAssignment
