import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import chemciderDark from '@/public/chemcider_dark.png'
import chemciderLight from '@/public/chemcider_light.png'
import nillarDark from '@/public/nillar_dark.png'
import nillarLight from '@/public/nillar_light.png'
import plasticDark from '@/public/plastic_dark.png'
import plasticLight from '@/public/plastic_light.png'
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


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