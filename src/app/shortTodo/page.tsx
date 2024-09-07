import ShortTask from '@/components/TodoRelated/ShortTask'
import TaskUi from '@/components/TodoRelated/TaskUi'
import React from 'react'

const page = () => {
  return (
    <div className='h-screen w-full overflow-hidden'>
    
      <h1 className='text-9xl font-bold'>Tittle</h1>
      <p>Descrpition of the task </p>
      <div className='flex justify-around'>
        Searchbar 

        <div>Stateus</div>
        <div>Priority</div>
        <div>View</div>
      </div>
    

    
      <div> table
      <ShortTask />
      <ShortTask />
      <ShortTask />
      </div>
    
    </div>
  )
}

export default page
