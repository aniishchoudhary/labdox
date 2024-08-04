import React from 'react'
import star from './img/star.png'

const landing1 = () => {
  return (
    <div className='bg-blue-100 flex items-center w-full h-[600px]'>
        <div className='h-full p-12 w-1/2 flex flex-col justify-center'>
            <h1 className='text-6xl font-bold p-3 mt-2 '>Web Development</h1>
            <h2 className='mt-8 text-4xl font-semibold p-4'>JavaScript</h2>
            <p className='w-2/3 py-4'>The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!</p>
            <div className='h-8 flex'>
                <img className='h-full mr-1' src={star}></img>
                <img className='h-full mr-1' src={star}></img>
                <img className='h-full mr-1' src={star}></img>
                <img className='h-full mr-1' src={star}></img>
                <img className='h-full mr-1' src={star}></img>
            </div>
            <h1 className='py-3'>Duration - 8 hours</h1>
            <button className='bg-[#1a1a1a] text-white rounded-lg   text-2xl font-poppins w-40 py-3 hover:bg-white hover:text-black duration-150'>Enroll Now</button>
        </div>
        <div className='flex justify-center items-center h-full'>
            <iframe src="https://www.youtube.com/embed/7LHd95MTS7A" title="Dock with Labdox" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className='w-[600px] h-[340px]'></iframe>
        </div>
    </div>
  )
}

export default landing1
