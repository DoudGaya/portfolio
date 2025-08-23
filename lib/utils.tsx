import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import chemciderDark from '@/public/chemcider_dark.png'
import chemciderLight from '@/public/chemcider_light.png'
import nillarDark from '@/public/nillar_dark.png'
import nillarLight from '@/public/nillar_light.png'
import plasticDark from '@/public/plastic_dark.png'
import plasticLight from '@/public/plastic_light.png'
import ccsa from '@/public/ccsa.png'
import { FaLaravel } from "react-icons/fa";
import metrohust from '@/public/metrohuts.png'
import jictde from '@/public/jictde.png'
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
import stb from '@/public/stb.png'
import npm from '@/public/npm.png'

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
    imgLight: stb,
    imgDark: stb,
    url: 'https://stablebricks.com',
    description: 'Real Estate Investment Platform',
    longDescription: 'A comprehensive real estate investment platform enabling fractional property ownership and crowdfunded investments across Nigeria.',
    techStack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe'],
    impact: 'Processed $500K+ in investments, 2000+ active users'
  },
  {
    id: '2',
    name: 'MetroHuts',
    imgLight: metrohust, // You can replace with actual MetroHuts logo when available
    imgDark: metrohust,
    url: 'https://metrohuts.com',
    description: 'Real Estate Property Listings Platform',
    longDescription: 'Your trusted partner in finding the perfect home. With years of experience and a passion for real estate, we make your property dreams a reality through comprehensive property listings and seamless user experience.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Supabase'],
    impact: 'Connecting property seekers with dream homes across Nigeria'
  },
  {
    id: '3',
    name: 'Jigawa State ICT & Digital Economy',
    imgLight: jictde, // You can replace with actual government logo when available
    imgDark: jictde,
    url: 'https://ict.jg.gov.ng/',
    description: 'Government Digital Transformation Portal',
    longDescription: 'Official ICT and Digital Economy service portal for Jigawa State Government. Mission: To transform Jigawa into a leading digital economy in Nigeria by 2025, fostering innovation, creating job opportunities, and positioning the state at the forefront of technological advancement.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Government APIs', 'PostgreSQL'],
    impact: 'Serving 5.8M+ citizens, advancing digital governance across Jigawa State'
  },
  {
    id: '4',
    name: 'CCSA Cosmopolitan',
    url: 'https://ccsa.cosmopolitan.edu.ng',
    imgLight: ccsa,
    imgDark: ccsa,
    description: 'Agricultural Research Center',
    longDescription: 'Driving innovation in agricultural research and development.',
    techStack: ['React', 'NextJS', 'TypeScript', 'Vercel', 'GraphQL'],
    impact: 'Advancing agricultural research and innovation'
  },
  {
    id: '5',
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
    id: '6',
    name: 'NPM-Packager AI',
    imgLight: npm, // You can replace with actual NPM-Packager logo when available
    imgDark: npm,
    url: 'https://npm.doudgaya.xyz',
    description: 'AI-Powered NPM Package Creation Platform',
    longDescription: 'Create and deploy NPM packages with AI in minutes. NPM-Packager helps you build, document, and publish NPM packages using AI. Features AI package generation, one-click publishing to NPM and GitHub, and comprehensive package management with analytics.',
    techStack: ['Next.js', 'TypeScript', 'AI/ML', 'NPM API', 'GitHub API'],
    impact: 'Streamlining NPM package development and deployment for developers worldwide'
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