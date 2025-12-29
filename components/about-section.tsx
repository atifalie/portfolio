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
                  I'm Atif Ali a <span className="text-primary font-semibold"> Full Stack Developer </span>with a passion for building scalable, modern web applications that make a
                  real impact. With expertise spanning frontend frameworks like React and Next.js to backend
                  technologies including Node.js and various databases, I bring ideas to life with clean, efficient
                  code.
                </p>
                <p className="text-pretty">
                  Over <span className="text-primary font-semibold">5+ years</span> of experience, I've worked with
                  startups and established companies, delivering solutions that prioritize user experience, performance,
                  and maintainability. I believe in writing code that not only works but is also elegant and
                  sustainable.
                </p>
                <p className="text-pretty">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                  or sharing knowledge with the developer community through blog posts and tutorials.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
