import { Button } from '@/components/ui/button'
import { Github } from 'lucide-react'
import { Linkedin } from 'lucide-react'
import { X } from 'lucide-react'
import { ReactNode } from 'react';
import Link from 'next/link';



interface Social {
  name: string;
  link: string;
  icon: ReactNode
}

const socials = [
  {
    name: "Github",
    link: "https://github.com/doudgaya",
    icon: <Github />,
  },
  {
    name: "LinkedIn",
    link: "https://github.com/doudgaya",
    icon: <Linkedin />,
  },
  {
    name: "X",
    link: "https://github.com/doudgaya",
    icon: <X/>,
  }
]

export default function Home() {
  return (
    <main className="">
      <div className=" max-w-2xl mx-auto my-2 space-y-2 border-t py-6 items-start w-full">
        <div className=" flex flex-col space-y-2">
          <h1 className=' text-3xl font-bold'>Abdulrahman Dauda</h1>
          <p className=' font-semibold text-purple-400'>Husband to Amina Shuaibu</p>
          <p>Super Senior Software Engineer</p>
          <div className=" flex space-x-6 pt-3">
            {
              socials.map((social: Social) => {
                return (
                  <Link href={social.link} className=' p-2 rounded-md hover:bg-secondary'>
                    {social.icon}
                  </Link>
                )
              })
            }
          </div>
          <div className=" py-3">
            <p>
              A detail-oriented software engineer with a passion for design and creativity.
              I love working with geniuses and teams of diverse skills to build scalable and
              disruptive digital products that'll impact the lives of millions across the globe.
            </p>
          </div>
       </div>
        <div className=" my-3 flex flex-col space-y-3">
          <h3 className=' text-2xl font-semibold border-b py-2'>Projects</h3>
          <div className=" grid grid-cols-2 gap-4">

          </div>
          {/* <Button>Learn More</Button> */}
        </div>
        {/* <iframe src="https://chemcider.com" className=' w-full scale-75' frameborder="0"></iframe> */}
      </div>
   
    </main>
  )
}
