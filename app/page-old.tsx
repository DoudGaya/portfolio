import { ReactNode } from 'react';
import Link from 'next/link';
import { Projects } from '@/components/Projects';
import { socials } from '@/lib/utils';
import { TechStack } from '@/components/TechStack';
import design  from '@/public/design.jpg'
import code  from '@/public/code.jpg'


export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <div className="max-w-2xl mx-auto py-12 px-4 w-full">
        {/* Hero Section */}
        <section className="flex flex-col items-start gap-6 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-1">Abdulrahman Dauda Gaya</h1>
            <p className="text-muted-foreground text-lg">Senior Software Engineer</p>
          </div>
          <div className="flex items-center gap-3">
            {socials.map((social: Social) => (
              <Link
                href={social.link}
                target="_blank"
                key={social.name}
                aria-label={social.name}
                className="p-2 rounded-full hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {social.icon}
              </Link>
            ))}
            <a
              href="mailto:doudgaya@gmail.com"
              className="ml-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Email Abdulrahman Dauda Gaya"
            >
              Email
            </a>
          </div>
        </section>

        {/* About Section */}
        <section className="mb-10">
          <p className="text-base text-muted-foreground leading-relaxed">
            I build robust, scalable digital products with a focus on precision, creativity, and impact. My experience spans software engineering and design, delivering solutions that empower users and drive business value. Let’s collaborate to create something meaningful.
          </p>
        </section>

        {/* Tech Stack */}
        <section className="mb-10">
          <TechStack />
        </section>

        {/* Courses Section */}
        <section className="mb-12">
          <h2 className="font-semibold text-xl mb-4">Technical Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/design" className="group flex flex-col border border-border hover:border-primary/40 transition rounded-lg overflow-hidden">
              <div className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${design.src})` }} />
              <div className="p-4">
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 group-hover:text-primary">Design Course</p>
                <p className="text-sm text-muted-foreground mt-1">UI/UX, branding, and product design essentials for developers and creators.</p>
              </div>
            </Link>
            <Link href="/code" className="group flex flex-col border border-border hover:border-primary/40 transition rounded-lg overflow-hidden">
              <div className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${code.src})` }} />
              <div className="p-4">
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 group-hover:text-primary">Programming Course</p>
                <p className="text-sm text-muted-foreground mt-1">Modern programming, best practices, and building scalable applications.</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-8 border-t">
          <h2 className="text-2xl font-semibold mb-6">Projects</h2>
          <Projects />
        </section>
      </div>
    </main>
  );
}
