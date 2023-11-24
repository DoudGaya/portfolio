import React from 'react'
import Link from 'next/link'

export const Stack = ( {
    stack
}: {
    stack: TechStack
} ) => {
  return (
    <Link href={stack.url} target='_blank' className=' flex relative flex-col'>
            <span className="cursor-pointer p-2  rounded-md hover:bg-secondary" >
              {stack.icon}
      </span>
    </Link>
  )
}
