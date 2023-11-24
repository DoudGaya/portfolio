import { ReactNode } from 'react';
import Link from 'next/link';
import { Projects } from '@/components/Projects';
import { Stack } from './Stack';
import { techStack } from '@/lib/utils';
import { socials } from '@/lib/utils';


export default function Home() {
  return (
    <main className="">
      <div className=" max-w-2xl mx-auto my-2 space-y-2 border-t py-6 items-start w-full">
        <div className=" flex flex-col space-y-2">
          <div className=" flex flex-col">
             <h1 className=' text-3xl font-bold'>Abdulrahman Dauda</h1>
          <p>Senior Software Engineer</p>
         </div>
           <div className=" flex space-x-2 ">
            {
              socials.map((social: Social) => {
                return (
                  <Link href={social.link} target='_blank' key={social.name} className=' p-2 rounded-md hover:bg-secondary'>
                    {social.icon}
                  </Link>
                )
              })
            }
          </div>
          {/* <p className='font-semibold text-primary'>Loving husband to Amena</p> */}
          <div className=" py-6 space-y-3 border-y flex flex-col ">
            <p>Tech Stack</p>
            <div className="flex flex-wrap md:items-start items-center gap-4">
              {
                techStack.map( single => <Stack key={single.id} stack={single} /> )
              }
            </div>

          </div>
          <div className=" grid grid-cols-4">

          </div>
        
          <div className=" py-3">
            <p className=' text-justify'>
              An innovative software and design engineer driven by a passion
              for precision and creativity. I thrive on collaborating with brilliant minds and
              diverse teams, channeling our collective skills to craft transformative, scalable digital products poised to revolutionize
              the lives of millions worldwide.
            </p>
          </div>
       </div>
        <div className=" my-3 flex flex-col space-y-3 ">
          <h3 className=' text-2xl font-semibold border-b py-2'>Projects</h3>
            <Projects />
        </div>
      </div>
   
    </main>
  )
}
