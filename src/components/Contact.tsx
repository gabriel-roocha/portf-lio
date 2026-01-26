'use client'

import Link from "next/link";
import Image from "next/image";
import { Instagram, Github, LinkedinIcon, Phone, MapPin } from "lucide-react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const contactInfo = [
  {
    title: "Email",
    description: "gabrielrochasarnoteles@gmail.com",
    icon: EnvelopeIcon,
  },
  {
    title: "Localização",
    description: "Remoto / Mundial",
    icon: MapPin,
  },
]

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/gabriel__telle/", label: "Instagram" },
  { icon: Github, href: "https://github.com/Gabriel-Div", label: "Github" },
  { icon: LinkedinIcon, href: "https://www.linkedin.com/in/gabriel-rocha-46b8b3365/", label: "Linkedin" },
  {
    icon: Phone, href: "https://wa.me/5562995712980?text=Olá%20Gabriel,%20vi%20seu%20portfólio",
    target: "_blank",
    label: "Telefone"
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  } as const;

  return (
    <section ref={ref} className='py-24 text-white'>
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 items-start">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-10"
          >
            <motion.div variants={itemVariants} className="mb-16">
              <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-red-400">
                <motion.span
                  initial={{ width: 0 }}
                  animate={isInView ? { width: 32 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-px bg-red-400"
                />
                Entre em Contato
              </p>
              <h2 className="font-heading text-4xl font-bold md:text-5xl">
                Vamos trabalhar juntos
              </h2>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h2 className="font-heading text-2xl font-bold">
                Informações de Contato
              </h2>

              <p className="mt-2 text-gray-300">
                Estou disponível para trabalhos freelance e colaborações. Fique à vontade
                para entrar em contato comigo através dos canais abaixo.
              </p>
            </motion.div>

            <div className="space-y-6">
              {contactInfo.map((item) => {
                const Icon = item.icon

                return (
                  <motion.div
                    key={item.title}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/20 text-red-400"
                    >
                      <Icon className="h-5 w-5" />
                    </motion.div>

                    <div>
                      <h4 className="text-sm text-gray-400">
                        {item.title}
                      </h4>
                      <p className="text-base font-semibold text-white">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="font-heading text-2xl font-bold">
                Conecte-se comigo
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon

                  return (
                    <motion.div
                      key={social.label}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.1 + 0.5, duration: 0.4 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Link
                        href={social.href}
                        aria-label={social.label}
                        className="flex h-12 w-12 items-center justify-center rounded-xl border border-red-600/40 bg-red-600/30 transition hover:bg-red-600/50"
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            className="relative h-[40rem] w-full overflow-hidden rounded-3xl"
          >
            <Image
              src="/minhafoto.jpeg"
              alt="Gabriel Rocha - Desenvolvedor Full Stack especializado em React, Next.js e Node.js"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              quality={85}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}