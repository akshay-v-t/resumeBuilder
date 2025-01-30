import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const ResumePreview = () => {
  const {profileImage, formData} = useContext(AppContext);
  return (
    <div className='border border-gray-300 rounded p-5 mt-4'>
        <h1 className='font-bold text-gray-900 text-xl'>
            Preview
        </h1>
       <img src={profileImage} alt="" className='w-40 mt-2' />
       <h2>Name : {formData.name}</h2>
    </div>
  )
}

export default ResumePreview