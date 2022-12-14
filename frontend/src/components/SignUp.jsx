import React from 'react'

import shareVideo from '../assets/share.mp4'
import logo from '../assets/whitelogo.png'
import {useNavigate,Link} from 'react-router-dom'
import {FcGoogle} from 'react-icons/fc'
import {TextInput,Label} from 'flowbite-react'
import {HiMail} from 'react-icons/hi'
export default function SignUp() {
  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video 
        src={shareVideo}
        type="video/mp4"
        loop
        controls={false}
        muted
        autoPlay
        className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
        <div className="">
        <div className="p-5">
          <img src={logo} width="130px" alt="logo" />
        </div>

        <div className='pb-5 flex flex-col justify-center items-start'>
            {/* username */}
        <div className="mb-2  text-white ">
            <Label
              htmlFor="email4"
              value="Your username"
            />
          </div>
            {/* phone number */}
          <TextInput
            id="username"
            type="text"
            placeholder="Username"
            required={true}
            // icon={HiMail}
            className="my-2"
          />
          <div className="mb-2  text-white ">
            <Label
              htmlFor="phone"
              value="Your phone"
            />
          </div>
          <TextInput
            id="phone"
            type="number"
            placeholder="Phone"
            required={true}
            // icon={HiMail}
            className="my-2"
          />
            {/* email */}
          <div className="mb-2  text-white ">
            <Label
              htmlFor="email4"
              value="Your email"
            />
          </div>
          <TextInput
            id="email4"
            type="email"
            placeholder="Email"
            required={true}
            // icon={HiMail}
            className="my-2"
          />
            {/* password */}
          <div className="mb-2  text-white">
            <Label
              htmlFor="password"
              value="Your password"
            />
          </div>
          <TextInput
            id="password"
            type="password"
            placeholder="Password"
            required={true}
            className="my-2"
          />
            {/* confirm password */}
          <div className="mb-2  text-white">
            <Label
              htmlFor="confirm password"
              value="confirm password"
            />
          </div>
          <TextInput
            id="confirm-password"
            type="password"
            placeholder="Confirm Password"
            required={true}
            className="my-2"
          />

                <button
                  onClick={(e) => {
                    console.log("yes");
                  }}
                  type="button"
                  className="bg-red-500 hover:bg-red-600 text-white font-bold px-5 py-1 text-base rounded-3xl hover:shadow-md outline-none"
                >
                  Create account
                </button>
          </div>
      <Link to="/login" className='text-white hover:cursor-pointer'>Already have an account !</Link>
        </div>

      </div>



    </div>
  )
}
