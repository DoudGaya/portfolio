import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from "@vercel/analytics/next"
import { Navbar } from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://doudgaya.xyz'),
  title: 'Hire Full Stack Developer | Abdulrahman Dauda Gaya - Next.js SaaS Expert',
  description: 'Nigerian software developer & CTO specializing in full-stack web development for startups. Build fast, scalable SaaS, fintech & real estate platforms. $5K-$30K projects.',
  keywords: 'hire full stack developer, Next.js SaaS expert, Nigerian software developer for startups, full stack web developer, React Node.js developer, startup CTO, SaaS development',
  authors: [{ name: 'Abdulrahman Dauda Gaya' }],
  creator: 'Abdulrahman Dauda Gaya',
  openGraph: {
    title: 'Hire Full Stack Developer | Abdulrahman Dauda Gaya',
    description: 'Full-stack developer & CTO with 8+ years building SaaS, fintech, and real estate platforms. Turn your ideas into production-ready applications.',
    url: 'https://doudgaya.xyz',
    siteName: 'Abdulrahman Dauda Gaya - Full Stack Developer',
    images: [
      {
        url: '/og?title=Hire Full Stack Developer | Abdulrahman Dauda Gaya&description=Full-stack developer & CTO specializing in SaaS, fintech, and real estate platforms',
        width: 1200,
        height: 630,
        alt: 'Abdulrahman Dauda Gaya - Full Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire Full Stack Developer | Abdulrahman Dauda Gaya',
    description: 'Full-stack developer & CTO specializing in scalable web platforms for startups.',
    images: ['/og?title=Hire Full Stack Developer | Abdulrahman Dauda Gaya&description=Full-stack developer & CTO specializing in SaaS, fintech, and real estate platforms'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col py-4 px-6 ">
          <Navbar />
          <Analytics />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
