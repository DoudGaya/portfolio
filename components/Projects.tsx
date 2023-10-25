import React from 'react'
import { projects } from '@/lib/utils'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface Project {
    id: string
    name: string
    url: string
    imgLight: StaticImageData
    imgDark: StaticImageData
    description: string
}

export const Projects = () => {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 gap-6'>
      {
        projects.map((project: Project) => {
          return (
            <div className=" flex space-x-4" key={project.id}>
              <Image src={project.imgLight} className=' hidden dark:block rounded-md h-[100px] w-[100px] object-cover object-center' alt={project.name} />
              <Image src={project.imgDark} className=' rounded-md h-20 w-20 block dark:hidden object-cover object-center' alt={project.name} />
              <div className=" flex flex-col w-full h-full justify-end pb-2" >
                <Link target='_blank' href={ project.url}><p className=' text-xl hover:text-foreground hover:underline transition-all font-semibold'>{project.name}</p></Link>
                <p className=' text-sm'> {project.description} </p>

              </div>
          </div>
        )
      })
      }
    </div>
  )
}
