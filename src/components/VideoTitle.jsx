import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='pt-[22%] pl-[7%] absolute text-white bg-gradient-to-tr from-black w-screen aspect-video'>
      
        <h1 className='font-bold text-6xl'>{title}</h1>
        <p className='pt-6 text-lg w-1/4'>{overview}</p>
        <div className="mt-3">
          <button className='bg-white text-black px-12 p-4 text-xl hover:bg-opacity-70 rounded-lg '>
            ▶ Play
          </button>
          <button className='bg-gray-400 text-black mx-2 px-12 p-4 text-xl hover:bg-opacity-70 rounded-lg'>
            More Info
          </button>
        </div>
      </div>
  )
}

export default VideoTitle;
