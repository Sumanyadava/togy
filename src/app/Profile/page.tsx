

import React from 'react'

const page = () => {
  return (
    <div className='w-full h-screen'>
      <div className='sm:h-1/3 bg-gray-300 flex sm:flex-row flex-col h-full '>
      <div className='sm:w-1/3 w-full h-full '>
        image
      </div>
      <div className='sm:w-2/3 bg-gray-200  w-full h-full'>
        Edits
      </div>
      </div>
      <div className='sm:h-2/3 bg-gray-500 flex sm:flex-row flex-col h-full'>
      <div className='sm:w-1/3 w-full h-full '>
        image
      </div>
      <div className='sm:w-2/3 bg-gray-200  w-full h-full'>
        Edits
      </div>
      </div>
    </div>
  )
}

export default page
