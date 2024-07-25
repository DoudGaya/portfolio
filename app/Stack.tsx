import React from 'react'
import Link from 'next/link'

export const Stack = ( {
    stack,
    className
}: {
    stack: TechStack
    className: string
} ) => {
  return (
    <Link href={stack.url} target='_blank' className={`${className} `}>
            <span className="cursor-pointer p-2 rounded-md hover:bg-secondary" >
              {stack.icon}
      </span>
    </Link>
  )
}
