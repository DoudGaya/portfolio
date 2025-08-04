import Link from 'next/link'
import { Button } from '@/components/ui/button'

const services = [
  {
    id: 'mvp',
    title: 'MVP Development',
    price: '$5,000 - $10,000',
    duration: '4-8 weeks',
    description: 'Get your product to market fast with a robust, scalable foundation that can grow with your business.',
    features: [
      'Complete web application with modern UI',
      'User authentication & authorization',
      'Database design & setup',
      'API development & documentation',
      'Responsive design for all devices',
      'Basic analytics integration',
      'Payment processing setup',
      'Deployment & hosting setup',
      '2 weeks of post-launch support',
      'Source code & documentation'
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
    ideal: 'Startups looking to validate their idea quickly with a professional, market-ready product.'
  },
  {
    id: 'full-platform',
    title: 'Full Platform Build',
    price: '$10,000 - $15,000',
    duration: '8-16 weeks',
    description: 'Complete web application with advanced features, admin dashboard, integrations, and everything needed to scale.',
    features: [
      'Everything in MVP Development',
      'Advanced admin dashboard',
      'Multi-user roles & permissions',
      'Advanced analytics & reporting',
      'Email automation & notifications',
      'Third-party integrations (Stripe, APIs)',
      'Advanced security features',
      'Performance optimization',
      'SEO optimization',
      'Mobile app API preparation',
      '1 month of post-launch support',
      'Team training session'
    ],
    techStack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Redis', 'AWS/Vercel'],
    ideal: 'Growing startups ready to scale with comprehensive features and enterprise-grade architecture.'
  },
  {
    id: 'scale-optimize',
    title: 'Scale & Optimize',
    price: '$3,000/month',
    duration: 'Ongoing',
    description: 'Ongoing optimization, new features, and scaling support to keep your platform performing at its best.',
    features: [
      'Performance monitoring & optimization',
      'Security updates & maintenance',
      'New feature development',
      'Database optimization',
      'Infrastructure scaling',
      'Code reviews & refactoring',
      'Team augmentation',
      'Technical consulting',
      'Monthly progress reports',
      'Priority support'
    ],
    techStack: ['Your existing stack', 'Monitoring tools', 'Performance optimization'],
    ideal: 'Established platforms looking for ongoing development and optimization support.'
  }
]

export default function ServicesPage() {
  return (
    <main className="bg-background min-h-screen">
      <div className="max-w-6xl mx-auto py-12 px-4">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Full-Stack Development Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From idea to scale, I provide comprehensive development solutions for SaaS, fintech, and real estate startups.
          </p>
        </section>

        {/* Services */}
        <section className="space-y-16">
          {services.map((service, index) => (
            <div key={service.id} className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Service Details */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <span className="text-muted-foreground">• {service.duration}</span>
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Perfect for:</h4>
                  <p className="text-muted-foreground">{service.ideal}</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-secondary rounded-md text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Button asChild size="lg" className="px-8">
                  <a href="#contact">Get Started</a>
                </Button>
              </div>

              {/* Features List */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4">What's Included</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <span className="text-primary mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Process Section */}
        <section className="mt-20 py-16 bg-muted/30 rounded-lg">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">My Development Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: 1, title: 'Discovery', description: 'Understanding your business goals and technical requirements' },
                { step: 2, title: 'Planning', description: 'Creating detailed project roadmap and technical architecture' },
                { step: 3, title: 'Development', description: 'Building your platform with regular updates and feedback' },
                { step: 4, title: 'Launch & Support', description: 'Deployment, testing, and ongoing support' }
              ].map((phase) => (
                <div key={phase.step} className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h3 className="font-semibold mb-2">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss your requirements and how I can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="px-8">
              <a href="mailto:doudgaya@gmail.com">Schedule Free Consultation</a>
            </Button>
            <Button variant="outline" asChild size="lg" className="px-8">
              <Link href="/#contact">View Contact Info</Link>
            </Button>
          </div>
        </section>
      </div>
    </main>
  )
}
