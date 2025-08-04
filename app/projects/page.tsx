import { projects } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectsPage() {
  return (
    <main className="bg-background min-h-screen">
      <div className="max-w-6xl mx-auto py-12 px-4">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real platforms, real results. Here are some of the successful projects I've built for startups and businesses.
          </p>
        </section>

        {/* Projects Grid */}
        <section className="space-y-16">
          {projects.map((project, index) => (
            <div key={project.id} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Project Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <Link href={project.url} target="_blank" className="block group">
                  <div className="relative h-80 lg:h-96 bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden">
                    <Image 
                      src={project.imgLight} 
                      className='hidden dark:block absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300' 
                      alt={project.name} 
                    />
                    <Image 
                      src={project.imgDark} 
                      className='block dark:hidden absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300' 
                      alt={project.name} 
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                      <span className="bg-white/90 dark:bg-black/90 px-4 py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View Live Site →
                      </span>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Project Details */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{project.name}</h2>
                    <p className="text-xl text-primary font-semibold">{project.description}</p>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.longDescription}
                  </p>

                  {/* Tech Stack */}
                  <div>
                    <h3 className="font-semibold mb-3">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-secondary text-sm rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
                    <h3 className="font-semibold text-primary mb-2">Impact & Results</h3>
                    <p className="text-muted-foreground">{project.impact}</p>
                  </div>

                  {/* CTA */}
                  <div className="flex gap-4">
                    <Link 
                      href={project.url} 
                      target="_blank"
                      className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                    >
                      View Live Site
                    </Link>
                    <Link 
                      href="/#contact"
                      className="inline-flex items-center px-6 py-3 border border-border rounded-md hover:bg-secondary transition-colors"
                    >
                      Discuss Your Project
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Additional Projects */}
        <section className="mt-20 py-16 bg-muted/30 rounded-lg">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">More Projects</h2>
            <p className="text-lg text-muted-foreground mb-8">
              I've worked on 50+ projects across various industries. These featured projects represent the scale and quality of work I deliver.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-background rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">SaaS Platforms</div>
              </div>
              <div className="p-6 bg-background rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Fintech Applications</div>
              </div>
              <div className="p-6 bg-background rounded-lg">
                <div className="text-2xl font-bold text-primary mb-2">8+</div>
                <div className="text-sm text-muted-foreground">Real Estate Platforms</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Platform?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss your project and create something amazing together.
          </p>
          <Link 
            href="/#contact"
            className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-lg"
          >
            Get Started Today
          </Link>
        </section>
      </div>
    </main>
  )
}