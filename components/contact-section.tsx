"use client"

import type React from "react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com/atifalie", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/atifalie", label: "LinkedIn" },
    { icon: Mail, href: "mailto:aatif.alii173@google.com", label: "Email" },
  ]

  return (
    <section id="contact" className="py-20 sm:py-32" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground text-center mb-12 text-lg">
            Open to remote opportunities and relocation to Germany
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={6}
                        className="bg-background/50"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-gradient-to-r from-primary to-accent">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="bg-card/50 backdrop-blur-sm border-border">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold mb-4">Get in touch</h3>
                    <p className="text-muted-foreground mb-6 text-pretty">
                      I'm always interested in hearing about new projects and opportunities. Whether you have a question
                      or just want to say hi, feel free to reach out!
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Email</p>
                          <a href="mailto:aatif.alii173@google.com" className="text-primary hover:underline break-all">
                            aatif.alii173@google.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Phone</p>
                          <a href="tel:+923220591646" className="hover:text-primary transition-colors">
                            +92 322 059 1646
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">Location</p>
                          <p>Pakistan</p>
                          <p className="text-sm text-muted-foreground mt-1">Open to relocation</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm border-border">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
                    <div className="flex gap-4">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-lg bg-muted/50 hover:bg-primary/20 border border-border hover:border-primary/50 transition-all"
                          aria-label={social.label}
                        >
                          <social.icon className="h-5 w-5" />
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm border-border">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Languages</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="font-medium">English</p>
                        <p className="text-sm text-muted-foreground">Professional Working Proficiency</p>
                      </div>
                      <div>
                        <p className="font-medium">German</p>
                        <p className="text-sm text-muted-foreground">Basic (A1 - Learning)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
