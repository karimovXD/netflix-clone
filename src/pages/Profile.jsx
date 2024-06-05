import React from 'react'
import { setMyContext } from '../context/MyContext'
import { Image } from 'antd'

const Profile = () => {
  const { user } = setMyContext();

  return (
    <div className='w-full ss:w-[500px] flex flex-col gap-2 text-white m-auto mt-40 px-4'>
      <div><h1 className='text-4xl font-medium'>Profile</h1></div>
      <div className='border-y-[1px] py-4 border-secondary flex items-center justify-between gap-5 flex-col ss:flex-row'>
        <div className='w-[40%] flex items-center justify-center ss:w-2/12'>
          <Image src='https://i.pinimg.com/474x/85/7e/57/857e57e48f03207ec4fe3ca8730f49fb.jpg' alt='Profile Avatar'>
          </Image>
        </div>
        <div className='w-10/12 flex flex-col items-center ss:items-start justify-start gap-3 text-xs ss:text-base'>
          <h3 className='text-secondary flex items-center justify-start gap-2 flex-col xs:flex-row'>Email: <span className='text-white'>{user?.email}</span></h3>
          <h3 className='text-secondary flex items-center justify-start gap-2 flex-col xs:flex-row'>Account ID: <span className='text-white'>{user?.uid}</span></h3>
          <h3 className='text-secondary flex items-center justify-start gap-2 flex-col xs:flex-row'>Account created: <span className='text-white'>{user?.metadata.creationTime}</span></h3>
        </div>
      </div>
    </div>
  )
}

export default Profile