import ShortTask from '@/components/TodoRelated/ShortTask'
import TaskUi from '@/components/TodoRelated/TaskUi'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen w-full overflow-hidden'>
    <div className=' h-[20vh] flex justify-around items-center'>
      <h1 className='text-9xl font-bold'>Tittle</h1>
      <div className='bg-white  '>View</div>
    </div>

    <div className='bg-gray-500 h-[80vh] flex flex-col gap-5 p-5 '>
      
      <ShortTask />
      <ShortTask />
      <ShortTask />
      
    </div>
    </div>
  )
}

export default page
