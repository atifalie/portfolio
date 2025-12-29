"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, GraduationCap, Award } from "lucide-react"

const experiences = [
  {
    type: "work",
    title: "Full Stack Developer",
    company: "NodeSol",
    period: "July 2022 - Present",
    location: "Pakistan",
    description: "Developing and maintaining scalable web applications using Laravel, Vue.js, and modern technologies.",
    achievements: [
      "Developed and maintained web applications using Laravel, Vue.js, and MySQL",
      "Designed and implemented RESTful and GraphQL APIs for multiple projects",
      "Optimized database performance and improved query response times",
      "Mentored junior developers and conducted code reviews",
    ],
  },
  {
    type: "education",
    title: "Bachelor of Science in Computer Science",
    company: "Virtual University of Pakistan",
    period: "",
    location: "Pakistan",
    description: "Comprehensive computer science education focusing on software development and web technologies.",
    achievements: [
      "Completed comprehensive coursework in software engineering",
      "Specialized in web development and database management",
      "Gained strong foundation in algorithms and data structures",
    ],
  },
  {
    type: "certification",
    title: "Backend Development",
    company: "NodeSol Edu",
    period: "2022",
    location: "Pakistan",
    description: "Professional certification in backend development focusing on modern web application architecture.",
    achievements: [
      "Mastered Laravel framework and PHP best practices",
      "Advanced API development with REST and GraphQL",
      "Database optimization and security implementation",
    ],
  },
  {
    type: "certification",
    title: "Website Designing",
    company: "POF Modern Languages",
    period: "2021",
    location: "Pakistan",
    description: "Comprehensive training in modern web design principles and frontend technologies.",
    achievements: [
      "Frontend development with HTML5, CSS3, and JavaScript",
      "Responsive design and mobile-first approach",
      "UI/UX principles and best practices",
    ],
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const getIcon = (type: string) => {
    switch (type) {
      case "work":
        return Briefcase
      case "education":
        return GraduationCap
      case "certification":
        return Award
      default:
        return Briefcase
    }
  }

  return (
    <section id="experience" className="py-20 sm:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
            Experience & Education
          </h2>
          <p className="text-muted-foreground text-center mb-12 text-lg">
            My professional journey and academic background
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border transform -translate-x-1/2" />

              <div className="space-y-12">
                {experiences.map((exp, index) => {
                  const Icon = getIcon(exp.type)
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      className={`relative ${index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"}`}
                    >
                      <Card className="bg-card/50 backdrop-blur-sm border-border">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="mt-1 p-2 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                              <Icon className="h-5 w-5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                                <div>
                                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                                  <p className="text-primary font-medium">{exp.company}</p>
                                  {exp.location && <p className="text-sm text-muted-foreground">{exp.location}</p>}
                                </div>
                                <span className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</span>
                              </div>
                              <p className="text-muted-foreground mb-3 text-pretty">{exp.description}</p>
                              <ul className="space-y-2">
                                {exp.achievements.map((achievement, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm">
                                    <span className="text-primary mt-1">▹</span>
                                    <span className="text-pretty">{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Timeline dot */}
                      <div className="hidden md:block absolute top-8 left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 border-4 border-background" />
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
