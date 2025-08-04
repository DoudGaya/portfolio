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
    longDescription: string
    techStack: string[]
    impact: string
}

export const Projects = () => {
  return (
    <div className='grid lg:grid-cols-2 grid-cols-1 gap-8'>
      {
        projects.map((project: Project) => {
          return (
            <Link href={project.url} target='_blank' className="group flex flex-col border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300" key={project.id}>
              <div className="relative h-48 bg-gray-100 dark:bg-gray-800">
                <Image 
                  src={project.imgLight} 
                  className='hidden dark:block absolute inset-0 w-full h-full object-cover object-center' 
                  alt={project.name} 
                />
                <Image 
                  src={project.imgDark} 
                  className='block dark:hidden absolute inset-0 w-full h-full object-cover object-center' 
                  alt={project.name} 
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex-1">
                  <h3 className='text-xl font-semibold mb-2 group-hover:text-primary transition-colors'>{project.name}</h3>
                  <p className='text-sm text-muted-foreground mb-3'>{project.longDescription}</p>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1 mb-2">
                      {project.techStack.slice(0, 4).map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-secondary text-xs rounded-md">
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="px-2 py-1 bg-secondary text-xs rounded-md">
                          +{project.techStack.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="pt-3 border-t">
                  <p className="text-sm font-medium text-primary">{project.impact}</p>
                </div>
              </div>
            </Link>
          )
        })
      }
    </div>
  )
}
