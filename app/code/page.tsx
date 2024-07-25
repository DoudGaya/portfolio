import { ReactNode } from 'react';
import Link from 'next/link';
import { Projects } from '@/components/Projects';

import { techStack } from '@/lib/utils';
import { socials } from '@/lib/utils';
import { TechStack } from '@/components/TechStack';
import Image from 'next/image';
import design  from '@/public/design.jpg'
import code  from '@/public/code.jpg'


export default function Design() {
  return (
    <main className="">
      <div className=" max-w-2xl mx-auto my-2 space-y-2 border-t py-6 items-start w-full">
        <div className=" flex flex-col space-y-2">
          <div className=" flex flex-col text-center">
              <h1 className=' text-3xl font-bold'>Visit this page for your Programming materials and references</h1>
         </div>
       </div>
      </div>
    </main>
  )
}
