import React from 'react'
import { ModeToggle } from '@/components/dark-mode'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/download.jpeg'


export const Navbar = () => {
  return (
      <div className=" max-w-2xl flex justify-between items-center mx-auto w-full py-2  rounded-lg">
        <div className=" flex-none space-x-8 max-w-max">
            <Link className=' hover:bg-gray-300/30 dark:hover:bg-gray-700/30 items-center px-2 py-1 flex space-x-2 rounded-xl' href={'/'}>
          
                    <Image src={logo} height={300} className=' h-10 rounded-full w-10' width={300} alt='' />
                      <p className=' font-semibold text-lg'>DoudGaya</p>
            </Link>
        </div>
        <div className="">
          <div className="">
            <ModeToggle />
          </div>
        </div>
      </div>
  )
}
