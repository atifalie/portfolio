"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 sm:py-32" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">About Me</h2>
          <p className="text-muted-foreground text-center mb-12 text-lg">
            Passionate about creating exceptional digital experiences
          </p>

          <Card className="bg-card/50 backdrop-blur-sm border-border">
            <CardContent className="p-6 sm:p-8">
              <div className="space-y-6 text-lg leading-relaxed">
                <p className="text-pretty">
                  I'm <span className="text-primary font-semibold">Atif Ali</span>, a results-driven{" "}
                  <span className="text-primary font-semibold">Full Stack Web Developer</span> with a passion for
                  building scalable, secure, and user-focused web applications that make a real impact. With strong
                  expertise in Laravel, Vue.js, and API-driven systems including REST and GraphQL, I bring ideas to life
                  with clean, efficient code.
                </p>
                <p className="text-pretty">
                  Over <span className="text-primary font-semibold">3+ years</span> of hands-on experience, I've worked
                  with startups and established companies, delivering solutions that prioritize user experience,
                  performance, and maintainability. Currently working at{" "}
                  <span className="text-primary font-semibold">NodeSol</span>, I've developed healthcare platforms,
                  subscription services, and multi-tenant business solutions.
                </p>
                <p className="text-pretty">
                  I believe in writing code that not only works but is also elegant and sustainable. When I'm not
                  coding, you'll find me exploring new technologies, optimizing database performance, and mentoring
                  junior developers to help them grow in their careers.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
