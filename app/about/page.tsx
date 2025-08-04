import Image from 'next/image'
import Link from 'next/link'
import { TechStack } from '@/components/TechStack'
import { socials } from '@/lib/utils'
import logo from '@/public/download.jpeg'

interface Social {
  name: string;
  link: string;
  icon: React.ReactNode;
}

export default function AboutPage() {
  return (
    <main className="bg-background min-h-screen">
      <div className="max-w-4xl mx-auto py-12 px-4">
        {/* Header */}
        <section className="text-center mb-16">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <Image
              src={logo}
              alt="Abdulrahman Dauda Gaya"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Abdulrahman Dauda Gaya
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Full-stack developer & CTO passionate about building scalable web platforms that drive business growth.
          </p>
        </section>

        {/* Story */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">My Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm a full-stack developer and Chief Technology Officer at Jigawa State ICT, 
                  with over 8 years of experience building web platforms for startups and enterprises 
                  across Nigeria, the UK, and the US.
                </p>
                <p>
                  My journey began with a passion for solving complex problems through code. 
                  Today, I specialize in turning ambitious startup ideas into production-ready 
                  platforms that scale with business growth.
                </p>
                <p>
                  I've had the privilege of working with SaaS founders, fintech startups, and 
                  real estate businesses, helping them raise funding, scale their platforms, 
                  and achieve sustainable growth through technology.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-muted/30 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </div>
                <div className="text-center p-6 bg-muted/30 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">8+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-muted/30 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">$2M+</div>
                  <div className="text-sm text-muted-foreground">Revenue Generated</div>
                </div>
                <div className="text-center p-6 bg-muted/30 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
              </div>

              {/* Social Links */}
              <div className="text-center">
                <h3 className="font-semibold mb-4">Connect With Me</h3>
                <div className="flex justify-center gap-4">
                  {socials.map((social: Social) => (
                    <Link
                      href={social.link}
                      target="_blank"
                      key={social.name}
                      aria-label={social.name}
                      className="p-3 rounded-full hover:bg-secondary transition-colors"
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Professional Experience</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-primary pl-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">Chief Technology Officer</h3>
                <span className="text-muted-foreground">2020 - Present</span>
              </div>
              <p className="text-primary font-medium mb-2">Jigawa State ICT</p>
              <p className="text-muted-foreground">
                Leading digital transformation initiatives and overseeing technology strategy 
                for government digital services. Implemented modern web platforms serving 
                thousands of citizens and businesses.
              </p>
            </div>

            <div className="border-l-4 border-secondary pl-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">Senior Full-Stack Developer</h3>
                <span className="text-muted-foreground">2018 - 2020</span>
              </div>
              <p className="text-primary font-medium mb-2">Freelance Consultant</p>
              <p className="text-muted-foreground">
                Built custom web applications for international clients, specializing in 
                SaaS platforms, e-commerce solutions, and fintech applications.
              </p>
            </div>

            <div className="border-l-4 border-secondary pl-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-semibold">Software Developer</h3>
                <span className="text-muted-foreground">2016 - 2018</span>
              </div>
              <p className="text-primary font-medium mb-2">Various Tech Companies</p>
              <p className="text-muted-foreground">
                Developed web applications using modern frameworks, gained expertise in 
                full-stack development, and learned to work with international teams.
              </p>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Technical Expertise</h2>
          <TechStack />
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              I stay current with the latest technologies and best practices to deliver 
              cutting-edge solutions that stand the test of time.
            </p>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-16 bg-muted/30 rounded-lg">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">My Philosophy</h2>
            <blockquote className="text-xl text-muted-foreground italic leading-relaxed">
              "Great software is not just about clean code—it's about understanding business needs, 
              delivering value to users, and building platforms that can grow and adapt. 
              Every line of code should serve a purpose in advancing your business goals."
            </blockquote>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Ready to turn your ideas into reality? Let's discuss your project.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-lg"
          >
            Get in Touch
          </Link>
        </section>
      </div>
    </main>
  )
}