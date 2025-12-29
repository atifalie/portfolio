"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, GraduationCap } from "lucide-react"

const experiences = [
  {
    type: "work",
    title: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    period: "2022 - Present",
    description:
      "Leading development of enterprise web applications, mentoring junior developers, and architecting scalable solutions.",
    achievements: [
      "Reduced application load time by 60% through optimization",
      "Led team of 5 developers on major product launch",
      "Implemented CI/CD pipeline reducing deployment time by 80%",
    ],
  },
  {
    type: "work",
    title: "Full Stack Developer",
    company: "Startup Innovations",
    period: "2020 - 2022",
    description: "Developed and maintained multiple client projects, from MVPs to production-ready applications.",
    achievements: [
      "Built 15+ production-ready web applications",
      "Improved code quality with automated testing (95% coverage)",
      "Collaborated with design team to create pixel-perfect UIs",
    ],
  },
  {
    type: "education",
    title: "B.S. Computer Science",
    company: "University of Technology",
    period: "2016 - 2020",
    description: "Graduated with honors, specializing in software engineering and web technologies.",
    achievements: ["GPA: 3.8/4.0", "Dean's List all semesters", "Led university coding club"],
  },
]

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

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
                {experiences.map((exp, index) => (
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
                            {exp.type === "work" ? (
                              <Briefcase className="h-5 w-5 text-primary" />
                            ) : (
                              <GraduationCap className="h-5 w-5 text-primary" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h3 className="text-xl font-semibold">{exp.title}</h3>
                                <p className="text-primary font-medium">{exp.company}</p>
                              </div>
                              <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">{exp.period}</span>
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
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
