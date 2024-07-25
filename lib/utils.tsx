import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import chemciderDark from '@/public/chemcider_dark.png'
import chemciderLight from '@/public/chemcider_light.png'
import nillarDark from '@/public/nillar_dark.png'
import nillarLight from '@/public/nillar_light.png'
import plasticDark from '@/public/plastic_dark.png'
import plasticLight from '@/public/plastic_light.png'
import { FaLaravel } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiVercel } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaAws } from "react-icons/fa6";
import { GrNode } from "react-icons/gr";
import { FaPython } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { SiPrisma } from "react-icons/si";

import {FaLinkedinIn} from 'react-icons/fa'
import {AiOutlineGithub} from 'react-icons/ai'
import { RiTwitterXFill } from 'react-icons/ri'

import stablebricsWhite from '@/public/stablebricks-white.png'
import stablebricksBlack from '@/public/stablebrics-black.png'



 
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
    id: '4',
    name: 'Stablebricks',
    imgLight: stablebricsWhite,
    imgDark: stablebricksBlack,
    url: 'https://stablebricks.com',
    description: `Nigerian Realestate Investment App`,
  },
  {
    id: '1',
    name: 'Chemcider Inc',
    url: 'https://chemcider.com',
    imgLight: chemciderLight,
    imgDark: chemciderDark,
    description: `Scientific and Medical Resurce Suppliers`,
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
  },
  
]



export const techStack = [
  {
    id: 1,
    title: 'Node JS',
    url: 'https://nodejs.org',
    icon: <GrNode className=""size={18} />
  },
  {
    id: 2,
    title: 'Python',
    url: 'https://python.org',
    icon: <FaPython className=""size={18} />
  },
  {
    id: 3,
    title: 'TypeScript',
    url: 'https://typescript.org',
    icon: <SiTypescript className=""size={18} />
  },
  {
    id: 4,
    title: 'React',
    url: 'https://react.dev',
    icon: <FaReact className=""size={18} />
  },
  {
    id: 5,
    title: 'Next JS',
    url: 'https://nextjs.org',
    icon: <TbBrandNextjs className=""size={18} />
  },
  {
    id: 6,
    title: 'TailwindCSS',
    url:' https://tailwindcss.com',
    icon: <SiTailwindcss className=""size={18} />
  },
  {
    id: 7,
    title: 'FastAPI',
    url: 'https://fastapi.tiangolo.com/',
    icon: <SiFastapi className=""size={18} />
  },
  // {
  //   id: 8,
  //   title: 'AWS',
  //   url: 'http://aws.amazon.com/',
  //   icon: <FaAws className=""size={18} />
  // },
  {
    id: 9,
    title: 'Vercel',
    url: 'http://aws.amazon.com/',
    icon: <SiVercel className=""size={18} />
  },
  {
    id: 10,
    title: 'Laravel',
    url: 'https://laravel.com',
    icon: <FaLaravel size={18} />
  },
  {
    id: 11,
    title: 'Prisma',
    url: 'https://www.prisma.io/',
    icon: <SiPrisma size={18} />
  }
  
]