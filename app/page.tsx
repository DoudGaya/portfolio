import { ModeToggle } from '@/components/dark-mode'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-16">

      <div className=" max-w-2xl flex justify-between items-center mx-auto w-full py-2 px-2 rounded-lg">
        <div className=" flex space-x-8">
            <Link className=' ' href={''}>
              <span className='hover:font-semibold'>
                About Me
              </span>
              </Link>
              <Link className=' ' href={''}>
              <span className='hover:font-semibold'>
                Projects
              </span>
              </Link>
              <Link className=' ' href={''}>
              <span className='hover:font-semibold'>
                Contact
              </span>
            </Link>
        </div>
        <div className="">
          <div className="">
            <ModeToggle />
          </div>
        </div>
      </div>

      <div className=" max-w-2xl mx-auto my-2 space-y-2 border-t py-6 items-start w-full">
        <div className=" flex flex-col space-y-2">
           <h1 className=' text-3xl font-bold'>Abdulrahman Dauda</h1>
          <p>Super Senior Software Engineer</p>
       </div>
         <div className="">
          <Button> Learn More</Button>
        </div>
      </div>
   
    </main>
  )
}
