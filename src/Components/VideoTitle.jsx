import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    
    <div className='px-10 md:px-20 absolute pt-[25%] pb-[100px] md:pb-0 text-white bg-gradient-to-r from-black  w-screen aspect-video'>
        <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-lg w-1/2 '>{overview}</p>
        <div className='my-4 md:0'>
            <button className='bg-white font-bold md:font-semibold py-1 md:py-4 px-4 md:px-12 text-black rounded-md text-xl md:text-2xl hover:bg-opacity-80'>▶ Play</button>
            <button className='hidden md:inline-block rounded-md ml-3 p-4 px-12 bg-gray-500 text-2xl bg-opacity-50 hover:bg-opacity-80 text-white'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle