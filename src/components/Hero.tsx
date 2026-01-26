'use client'

import { motion } from "framer-motion";
import { Braces, Component, Layers3, Package, Server } from "lucide-react";

export default function Hero() {

  const techs = [
    {
      icon: Component,
      title: "React/Next.js",
    },
    {
      icon: Braces,
      title: "TypeScript",
    },
    {
      icon: Server,
      title: "Node.js",
    },
    {
      icon: Layers3,
      title: "Nest.js",
    },
    {
      icon: Package,
      title: "Docker",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] as any,
      },
    },
  } as const;

  return (
    <section className="bg-slate sm:min-h-screen flex items-center">
      <div className="relative isolate w-full px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#7f1d1d] to-[#dc2626] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-5xl pt-20 pb-4 sm:pt-24 sm:pb-8"
        >
          <div className="text-left w-full">
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight text-balance text-white"
            >
              Construindo soluções inovadoras e modernas
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl font-medium text-pretty text-gray-400"
            >
              Sou um desenvolvedor web focado em criar aplicações modernas, eficientes e bem estruturadas.
              Do design no Figma ao código em produção com Next.js, Node e NestJS, transformo ideias em produtos digitais funcionais, escaláveis e bem pensados.
            </motion.p>

            <div className="flex flex-wrap gap-4 pt-8">
              {techs.map((h, index) => {
                const Icon = h.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -4 }}
                    className="inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-500/10 px-4 py-2 backdrop-blur-sm text-sm font-medium text-white"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="flex items-center justify-center"
                    >
                      <Icon className="h-4 w-4 text-white" />
                    </motion.div>

                    <span>{h.title}</span>
                  </motion.div>
                );
              })}
            </div>


            <motion.div
              variants={itemVariants}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 sm:gap-x-6"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#experiencia"
                className="w-full sm:w-auto rounded-xl bg-red-600 px-12 sm:px-16 py-4 sm:py-5 text-sm font-semibold text-white shadow-xs transition-colors duration-300 hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 text-center"
              >
                Ver Experiência
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contato"
                className="w-full sm:w-auto text-sm rounded-xl px-12 sm:px-16 py-4 sm:py-5 text-white border border-red-500/50 font-semibold transition-colors duration-300 hover:bg-red-500/10 text-center"
              >
                Contate-me
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}