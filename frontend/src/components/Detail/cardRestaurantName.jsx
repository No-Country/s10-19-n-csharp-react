import React from 'react'
import BtnEditProfileRestaurant from '../Buttons/BtnEditProfileRestaurant'
import BtnUploadImgProfileRestaurant from '../Buttons/BtnUploadImgProfileRestaurant'
import { IoLocationSharp } from 'react-icons/io5'
import { BsTelephoneFill } from 'react-icons/bs'
import { BiSolidTimeFive } from 'react-icons/bi'
import { useDispatch } from 'react-redux'

const cardRestaurantName = () => {
  const dispatch = useDispatch()

  return (
    <div className='flex flex-col md:flex-row gap-y-5 gap-x-10'>

      {/* -------------------- Image */}
      <div className='relative mx-auto'>
        <img src='https://res.cloudinary.com/dpiwmbsog/image/upload/v1692745587/fitnessMatket/rest4_qcdlvq.jpg' alt='' className='w-full max-w-sm' />
        <div className='absolute bottom-8 right-8'><BtnUploadImgProfileRestaurant /></div>
      </div>

      {/* -------------------- Information */}
      <div>
        <div className='mb-8'>
          <p className='text-3xl font-bold'>Nombre del restaurant</p>
          <p className='text-xl'>Especialidad</p>
        </div>
        <div className='mt-4 flex flex-col gap-y-3'>
          <p className='flex items-center gap-x-2'><span className='text-greenCustom2 text-lg'><IoLocationSharp /></span>Av. Vegana Springfiels</p>
          <p className='flex items-center gap-x-2'><span className='text-greenCustom2 text-lg'><BsTelephoneFill /></span>9676455432</p>
          <p className='flex items-center gap-x-2'><span className='text-greenCustom2 text-lg'><BiSolidTimeFive /></span>Desde 09:00 - 19:00</p>
          <p className='text-base text-greyCustom'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo, corrupti hic. Aliquid laboriosam perspiciatis accusamus?</p>
        </div>
        <div className='mt-8'>
          <BtnEditProfileRestaurant />
        </div>
      </div>

    </div>
  )
}

export default cardRestaurantName