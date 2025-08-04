import React from 'react'
import { Stack } from '@/app/Stack';
import { techStack } from '@/lib/utils';
export const TechStack = () => {
  return (
    <div className=" py-6 space-y-3 border-b dark:border-gray-700 flex w-full flex-col ">
    <p className=' text-xl font-bold'>Tech Stack</p>
    <div className=" grid grid-cols-5 md:justify-between md:items-start rounded-md py-2 items-center gap-2">
      {
        techStack.map( single => <Stack className=" items-start justify-center flex text-center" key={single.id} stack={single} /> )
      }
    </div>
  </div>
  )
}
