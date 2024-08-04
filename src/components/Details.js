import React, { useState } from 'react'

const Details = () => {

    const [style, setStyle] = useState({
        color: 'black',
        backgroundColor: 'white'
      });

  return (
    <div className='flex flex-col w-screen items-center'>
      <h1 className='mr-auto text-4xl font-bold font-poppins p-4 w-full'>Course Description</h1>
      <div className='grid grid-cols-6 gap-0 w-[90%]'>
        <h1 style={style} className='bg-black text-white text-center py-4'>Overview</h1>
        <h1 className='bg-black text-white text-center py-4'>Description</h1>
        <h1 className='bg-black text-white text-center py-4'>Instructor</h1>
        <h1 className='bg-black text-white text-center py-4'>Venue</h1>
        <h1 className='bg-black text-white text-center py-4'>Price</h1>
        <h1 className='bg-black text-white text-center py-4'>Overview</h1>
      </div> 
      <div className='w-[90%] h-[200px] bg-black'>
        <p>Overview Tab</p>
      </div>
    </div>
  )
}

export default Details
