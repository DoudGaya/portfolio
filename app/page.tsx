import {FaLinkedinIn} from 'react-icons/fa'
import {AiOutlineGithub} from 'react-icons/ai'
import {RiTwitterXFill} from 'react-icons/ri'
import { ReactNode } from 'react';
import Link from 'next/link';
import { Projects } from '@/components/Projects';



interface Social {
  name: string;
  link: string;
  icon: ReactNode
}

const socials = [
  {
    name: "Github",
    link: "https://github.com/doudgaya",
    icon: <AiOutlineGithub />,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/abdulrahman-dauda-b65526137/",
    icon: <FaLinkedinIn />,
  },
  {
    name: "X",
    link: "https://twitter.com/doudgaya",
    icon: <RiTwitterXFill/>,
  }
]

export default function Home() {
  return (
    <main className="">
      <div className=" max-w-2xl mx-auto my-2 space-y-2 border-t py-6 items-start w-full">
        <div className=" flex flex-col space-y-2">
          <h1 className=' text-3xl font-bold'>Abdulrahman Dauda</h1>
          <p>Senior Software Engineer</p>
          <p className='font-semibold text-primary'>Loving husband to Amena</p>
          <div className=" flex space-x-2 pt-3">
            {
              socials.map((social: Social) => {
                return (
                  <Link href={social.link} key={social.name} className=' p-2 rounded-md hover:bg-secondary'>
                    {social.icon}
                  </Link>
                )
              })
            }
          </div>
          <div className=" py-3">
            <p className=' text-justify'>
              A detail-oriented software engineer with a passion for design and creativity.
              I love working with geniuses and teams of diverse skills to build scalable and
              disruptive digital products that'll impact the lives of millions across the globe.
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
