import React from 'react'
import { ModeToggle } from '@/components/dark-mode'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/download.jpeg'

export const Navbar = () => {
  return (
    <nav className="max-w-4xl flex justify-between items-center mx-auto w-full py-4 px-4">
      <Link className='hover:opacity-80 transition-opacity items-center flex space-x-3' href={'/'}>
        <Image src={logo} height={40} className='h-10 rounded-full w-10' width={40} alt='Abdulrahman Dauda Gaya' />
        <div className="flex flex-col">
          <p className='font-bold text-lg'>Abdulrahman Gaya</p>
          <p className='text-xs text-muted-foreground'>Full Stack Developer</p>
        </div>
      </Link>
      
      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-6">
          <a href="/about" className="text-sm hover:text-primary transition-colors">About</a>
          <a href="/services" className="text-sm hover:text-primary transition-colors">Services</a>
          <a href="/projects" className="text-sm hover:text-primary transition-colors">Projects</a>
          <a href="/blog" className="text-sm hover:text-primary transition-colors">Blog</a>
          <a href="/contact" className="text-sm hover:text-primary transition-colors">Contact</a>
        </div>
        <ModeToggle />
      </div>
    </nav>
  )
}
