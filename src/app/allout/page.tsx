import { Charttest } from '@/components/charttest/charttest'
import { Button } from '@/components/ui/button'
import { Camera } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <div className=' h-screen w-full flex  justify-around items-center flex-col'>
      {/* <Charttest /> */}
      <h1>W sadasd asdasdasd asdasda asd</h1>
      <Button className=' rounded-full p-5 h-20 w-20 bg-white/50 ' variant={'secondary'}>
      <Camera />
      </Button>
      <div className=' flex  h-2/3 w-[80%] bg-white'>
        <textarea name="" id="" className='w-[80%] h-full'></textarea>
        <div className='bg-black h-full w-[20%]'>tools to fix todays date</div>
      </div>
    </div>
  )
}

export default page
