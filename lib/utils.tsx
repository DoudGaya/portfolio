import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import chemciderDark from '@/public/chemcider_dark.png'
import chemciderLight from '@/public/chemcider_light.png'
import nillarDark from '@/public/nillar_dark.png'
import nillarLight from '@/public/nillar_light.png'
import plasticDark from '@/public/plastic_dark.png'
import plasticLight from '@/public/plastic_light.png'

import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiVercel } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaAws } from "react-icons/fa6";
import { GrNode } from "react-icons/gr";
import { FaPython } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiFastapi } from "react-icons/si";

import {FaLinkedinIn} from 'react-icons/fa'
import {AiOutlineGithub} from 'react-icons/ai'
import { RiTwitterXFill } from 'react-icons/ri'



 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const socials = [
  {
    name: "Github",
    link: "https://github.com/doudgaya",
    icon: <AiOutlineGithub className="" />,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/abdulrahman-dauda-b65526137/",
    icon: <FaLinkedinIn className="" />,
  },
  {
    name: "X",
    link: "https://twitter.com/doudgaya",
    icon: <RiTwitterXFill className="" />,
  }
]

export const projects = [
  {
    id: '1',
    name: 'Chemcider Inc',
    url: 'https://chemcider.com',
    imgLight: chemciderLight,
    imgDark: chemciderDark,
    description: `Learning resource for scientists and engineers`,
  },
  {
    id: '2',
    name: 'NIllar Magazines',
    url: 'https://nillar.com',
    imgLight: nillarLight,
    imgDark: nillarDark,
    description: `Financial and Business Magazines`,
  },
  {
    id: '4',
    name: 'Plastic Surgeona',
    imgLight: plasticLight,
    imgDark: plasticDark,
    url: 'https://plasticsurgeona.com',
    description: `Turkey Based Plastic Surgeons connections`,
  }
]



export const techStack = [
  {
    id: 1,
    title: 'Node JS',
    url: 'https://nodejs.org',
    icon: <GrNode className="" />
  },
  {
    id: 2,
    title: 'Python',
    url: 'https://python.org',
    icon: <FaPython className="" />
  },
  {
    id: 3,
    title: 'TypeScript',
    url: 'https://typescript.org',
    icon: <SiTypescript className="" />
  },
  {
    id: 4,
    title: 'React',
    url: 'https://react.dev',
    icon: <FaReact className="" />
  },
  {
    id: 5,
    title: 'Next JS',
    url: 'https://nextjs.org',
    icon: <TbBrandNextjs className="" />
  },
  {
    id: 6,
    title: 'TailwindCSS',
    url:' https://tailwindcss.com',
    icon: <SiTailwindcss className="" />
  },
  {
    id: 7,
    title: 'FastAPI',
    url: 'https://fastapi.tiangolo.com/',
    icon: <SiFastapi className="" />
  },
  {
    id: 8,
    title: 'AWS',
    url: 'http://aws.amazon.com/',
    icon: <FaAws className="" />
  },
  {
    id: 9,
    title: 'Vercel',
    url: 'http://aws.amazon.com/',
    icon: <SiVercel className="" />
  },
  
]