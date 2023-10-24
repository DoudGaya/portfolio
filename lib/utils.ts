import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const projects = [
  {
    id: Date.now(),
    name: 'Chemcider Inc',
    url: 'https://chemcider.com',
    img: '',
    description: `Nigerian Commercial Research Center for scientists and engineers`,
  },
  {
    id: Date.now(),
    name: 'NIllar Magazines',
    url: 'https://nillar.com',
    img: '',
    description: `Financial and Business Magazines`,
  },
  {
    id: Date.now(),
    name: 'Medrack',
    url: 'https://medrack.com',
    img: '',
    description: `NIgerian Pharmaceutical and Medical Disctibutors`,
  },
  {
    id: Date.now(),
    name: 'Plastic Surgeona',
    img: '',
    url: 'https://plasticsurgeona.com',
    description: `Turkey Based Plastic Surgeons connections`,
  }
]