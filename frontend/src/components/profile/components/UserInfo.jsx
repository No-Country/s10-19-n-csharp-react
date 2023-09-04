import React from 'react'

// import { FaLocationDot } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import { FaPhone, FaEdit } from 'react-icons/fa'

export default function UserInfo ({ id, userID, name, address, photo, createdAt, email, phone }) {
  return (
    <article className='flex flex-col w-[90%] md:w-[80%] lg:w-[90%] text-blackCustom text-2xl items-center max-w-screen-lg '>
      <div className='w-full flex flex-wrap justify-center lg:justify-around py-10'>

        <div className='w-full flex flex-col text-left lg:text-left mt-4 relative '>
          <div className='flex flex-col '>
            <h2 className='font-titulo text-4xl sm:text-5xl font-extrabold '>
              {name}
            </h2>
            <p className='text-base'>
              {email}
            </p>
          </div>
          <div className='text-greenCustom absolute left-full '>
            <FaEdit />
          </div>
          <p className='text-sm  text-greyCustom'>
            created at {createdAt}
          </p>
          <div className='flex w-5/6 flex-wrap text-base gap-4 mt-8 [&>*]:items-top'>
            <div className='flex gap-2'>
              <IoLocationSharp className='p-0 m-0 text-2xl text-greenCustom' />
              <p className=''>
                {address}
              </p>
            </div>
            <div className='flex gap-2'>
              <FaPhone className='text-2xl text-greenCustom' />
              <p className=''>{phone}</p>
            </div>

          </div>

        </div>
      </div>

    </article>
  )
}