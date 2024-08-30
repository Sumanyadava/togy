import React from 'react'
import { Button } from './ui/button'

const Searchbar = () => {
  return (
    <div className='border rounded-lg flex gap-2 p-2  sm:w-[50%]'>
      <input type="text" name="" id="" className='bg-inherit focus:outline-none w-full'/>
      <Button variant={"outline"}>L</Button>
      <Button>S</Button>
    </div>
  )
}

export default Searchbar
