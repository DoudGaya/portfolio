import React from 'react'
import { ModeToggle } from '@/components/dark-mode'
import Image from 'next/image'
import Link from 'next/link'


export const Navbar = () => {
  return (
      <div className=" max-w-2xl flex justify-between items-center mx-auto w-full py-2 px-2 rounded-lg">
        <div className=" flex space-x-8">
            <Link className=' ' href={''}>
                <span className='hover:font-semibold'>
                    About Me
                </span>
              </Link>
              {/* <Link className=' ' href={''}>
                <span className='hover:font-semibold'>
                    Resume
                </span>
              </Link> */}
              {/* <Link className=' ' href={''}>
              <span className='hover:font-semibold'>
                Contact
              </span>
            </Link> */}
        </div>
        <div className="">
          <div className="">
            <ModeToggle />
          </div>
        </div>
      </div>
  )
}
