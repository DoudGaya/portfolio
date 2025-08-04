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
    id: '1',
    name: 'Stablebricks',
    imgLight: stablebricsWhite,
    imgDark: stablebricksBlack,
    url: 'https://stablebricks.com',
    description: 'Real Estate Investment Platform',
    longDescription: 'A comprehensive real estate investment platform enabling fractional property ownership and crowdfunded investments across Nigeria.',
    techStack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe'],
    impact: 'Processed $500K+ in investments, 2000+ active users'
  },
  {
    id: '2',
    name: 'Chemcider Inc',
    url: 'https://chemcider.com',
    imgLight: chemciderLight,
    imgDark: chemciderDark,
    description: 'Medical & Scientific Supply Chain',
    longDescription: 'B2B platform connecting medical institutions with verified suppliers of scientific equipment and pharmaceutical products.',
    techStack: ['React', 'Node.js', 'MongoDB', 'AWS', 'PayPal'],
    impact: 'Streamlined procurement for 50+ hospitals'
  },
  {
    id: '3',
    name: 'Nillar Magazines',
    url: 'https://nillar.com',
    imgLight: nillarLight,
    imgDark: nillarDark,
    description: 'Digital Publishing Platform',
    longDescription: 'Modern digital magazine platform with subscription management, content delivery, and analytics for financial and business publications.',
    techStack: ['Next.js', 'Supabase', 'Stripe', 'Vercel', 'Tailwind'],
    impact: '10K+ monthly readers, 95% uptime'
  },
  {
    id: '4',
    name: 'Plastic Surgeons Network',
    imgLight: plasticLight,
    imgDark: plasticDark,
    url: 'https://plasticsurgeona.com',
    description: 'Medical Professional Network',
    longDescription: 'Platform connecting patients with certified plastic surgeons in Turkey, featuring booking system, reviews, and consultation management.',
    techStack: ['Vue.js', 'Laravel', 'MySQL', 'Cloudinary', 'Stripe'],
    impact: '500+ successful consultations booked'
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
    url: 'https://www.typescriptlang.org/',
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