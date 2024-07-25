import { ReactNode } from 'react';
import Link from 'next/link';
import { Projects } from '@/components/Projects';
import { socials } from '@/lib/utils';
import { TechStack } from '@/components/TechStack';
import design  from '@/public/design.jpg'
import code  from '@/public/code.jpg'


export default function Home() {
  return (
    <main className="">
      <div className=" max-w-2xl mx-auto my-2 space-y-2 border-t py-6 items-start w-full">
        <div className=" flex flex-col space-y-2">
          <div className=" flex flex-col space-y-0.5">
              <h1 className=' md:text-3xl text-2xl font-bold'>Abdulrahman Dauda Gaya</h1>
              <p>Senior Software Engineer</p>
         </div>
         <div className=" flex flex-row">
         <div className=" flex space-x-2 items-center  ">
            {
              socials.map((social: Social) => {
                return (
                  <Link href={social.link} target='_blank' key={social.name} className=' p-2 rounded-md hover:bg-secondary'>
                    {social.icon}
                  </Link>
                )
              })
            }
            <a href='mailto:doudgaya@gmail.com' className=" hover:cursor-pointer  flex items-center justify-center">
              <span className=' bg-gray-300 dark:bg-gray-800 py-0.5 hover:dark:bg-gray-900 transition-colors ease-in-out px-3 rounded-full'>doudgaya@gmail.com</span>
            </a>
          </div>
         </div>
         <TechStack /> 
        <div className=" py-3">
            <p className=' text-justify text-sm '>
              Software and design engineer driven by a passion
              for precision and creativity. Join our  Together, we bring our unique
              skills to the table, crafting digital products that aren't just scalable
              but have the potential to change lives on a global scale. 
              Let's team up and engineer a brighter, game-changing future, starting right now.
            </p>
          </div>   

         <div className=" border-t py-4 space-y-4 w-full flex-col">
          <p className=' font-bold text-2xl'>Technical Courses</p>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href={'/design'} className=" flex flex-col hover:bg-gray-200 dark:bg-gray-700/30 p-3 rounded-xl space-y-3">
                <p className=' text-lg font-bold text-gray-500'>Design Course</p>
                <div className=' w-ful h-[200px] hover:bg-gray-900/70 dark:bg-blend-overlay object-cover object-center rounded-lg' style={{ backgroundImage: `url(${design.src})` }}></div>
            </Link>
            <Link href={'/code'} className=" flex flex-col hover:bg-gray-200 dark:bg-gray-700/30 p-3 rounded-xl space-y-3">
              <p className=' text-lg font-bold text-gray-500'>Programming Course</p>
                <div className=' w-ful h-[200px] hover:bg-gray-900/70 dark:bg-blend-overlay object-cover object-center rounded-lg' style={{ backgroundImage: `url(${code.src})` }}> </div>
            </Link>
          </div>
         </div>
       </div>
       
        <div className=" my-3 flex border-y flex-col space-y-3 ">
          <h3 className=' text-2xl font-semibold py-2'>Creator of</h3>
            <Projects />
        </div>
      </div>
   
    </main>
  )
}
