import EditProfileIcon from './EditProfileIcon.svg'
import ProfilePicture from './profilepicture.jpeg'
import { useState } from 'react'

import './ProfileDetails.css'

const Profile = () => {
  const [user, setUser] = useState({
    name: 'James Cameroon',
    email: 'james@example.com',
    phone: '9786546353',
    _id: '200354K',
  })
  const [edit, setEdit] = useState(false)

  return (
    <div className="topbox">
      <div className="grid grid-flow-row">
        <div className="rounded-lg shadow-lg bg-gray-600 w-full flex flex-row flex-wrap p-3 antialiased style1">
          <div className="md:w-1/5 w-full">
            <img
              className="rounded-lg shadow-lg antialiased"
              src={ProfilePicture}
              alt=""
            />
          </div>
          <div className="md:w-2/5 w-full items-right details">
            <div className="text-4xl text-white leading-tight">{user.name}</div>
            <div className="text-2xl text-gray-300">200345K</div>
          </div>
          <div className="md:w-2/5 w-full px-3 flex flex-row flex-wrap">
            <div className="w-full text-right text-gray-700 font-semibold relative pt-3 md:pt-0">
              <div className="text-2xl text-white leading-tight">User Name</div>
              <div className="text-normal text-gray-300 hover:text-gray-400 cursor-pointer">
                <span className="border-b border-dashed border-gray-500 pb-1">
                  Student
                </span>
              </div>
              <div className="md:absolute pt-3 md:pt-0 bottom-0 right-0">
                <div className="block ml-auto justify-between items-center">
                  <button
                    className="bg-white flex items-center justify-evenly text-blackOlive
              font-semibold py-2 px-4 rounded-2xl drop-shadow-sm"
                    onClick={(e) => {
                      if (edit) {
                        fetch(`${process.env.REACT_APP_API}/user/${user._id}`, {
                          body: JSON.stringify({
                            name: user.name,
                            email: user.email,
                            phone: user.phone,
                          }),
                        }).then(() => {
                          setEdit(!edit)
                        })
                      }
                      setEdit(!edit)
                    }}
                  >
                    <img
                      src={EditProfileIcon}
                      style={{ height: '2rem' }}
                      alt=""
                    />
                    {edit ? 'Done' : 'Edit Profile'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col">
          <div
            className="flex justify-left text-3xl px-8 py-4"
            style={{ fontFamily: 'Nunito' }}
          >
            Personal Details
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 p-8 gap-4">
          <div className="col-span-1">
            <label
              className="text-md text-gray-400 ml-5"
              style={{ fontFamily: 'Nunito' }}
            >
              Full Name
            </label>
            <input
              className="rounded-full appearance-none border w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Full Name"
              value={user.name}
              required
              disabled={!edit}
              onChange={(e) => {
                setUser({ ...user, name: e.target.value })
              }}
            />
          </div>
          <div className="col-span-1">
            <label
              className="text-md text-gray-400 ml-5"
              style={{ fontFamily: 'Nunito' }}
            >
              Email
            </label>
            <input
              className="rounded-full appearance-none border w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email"
              value={user.email}
              required
              disabled={!edit}
              onChange={(e) => {
                setUser({ ...user, email: e.target.value })
              }}
            />
          </div>
          <div className="col-span-1">
            <label
              className="text-md text-gray-400 ml-5"
              style={{ fontFamily: 'Nunito' }}
            >
              Phone
            </label>
            <input
              className="rounded-full appearance-none border w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="tel"
              placeholder="Phone No"
              value={user.phone}
              required
              disabled={!edit}
              onChange={(e) => {
                setUser({ ...user, phone: e.target.value })
              }}
            />
          </div>
          <div className="col-span-1">
            <label
              className="text-md text-gray-400 ml-5"
              style={{ fontFamily: 'Nunito' }}
            >
              Registration Number
            </label>
            <input
              className="rounded-full appearance-none border w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Registration No"
              value={user._id}
              required
              disabled
            />
          </div>
        </div>
      </div>
      <div className='container mx-auto'>
        <div className="flex flex-col">
          <div
            className="flex justify-left text-3xl px-8 py-4"
            style={{ fontFamily: 'Nunito' }}
          >
            Course Details
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Profile
