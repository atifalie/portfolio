"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "MyScribe",
    description:
      "Subscription platform with Stripe payment integration and AI-powered features for enhanced user experience and automated workflows.",
    image: "/portfolio/subscription-platform-dashboard.jpg",
    tech: ["Laravel", "Vue.js", "Stripe", "AI Integration"],
    liveUrl: "https://myscribe.us",
    githubUrl: "#",
  },
  {
    title: "NavPoint Health",
    description:
      "Comprehensive healthcare platform utilizing GraphQL APIs for efficient data management and real-time patient information systems.",
    image: "/portfolio/healthcare-platform-interface.png",
    tech: ["Laravel", "GraphQL", "Lighthouse PHP", "Vue.js"],
    liveUrl: "https://navpointhealth.com",
    githubUrl: "#",
  },
  {
    title: "K&M Business Solutions",
    description:
      "Multi-tenant business platform designed to streamline operations, manage clients, and provide scalable solutions for growing businesses.",
    image: "/portfolio/business-management-platform.jpg",
    tech: ["Laravel", "Vue.js", "MySQL", "Multi-tenant"],
    liveUrl: "https://kmsolve.com",
    githubUrl: "#",
  },
  {
    title: "The Commercial COOP",
    description:
      "Advanced multi-tenant system with real-time features, complex business logic, and robust data management for commercial operations.",
    image: "/portfolio/commercial-platform-dashboard.jpg",
    tech: ["Laravel", "Vue.js", "Redis", "PostgreSQL"],
    liveUrl: "https://thecommercialcoop.com",
    githubUrl: "#",
  },
]

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-20 sm:py-32 lg:px-16" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-center mb-12 text-lg">
            A showcase of my recent work and production applications
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group h-full bg-card/100 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 from-background/80 to-transparent" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 text-pretty">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button size="sm" className="flex-1" variant="default" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
