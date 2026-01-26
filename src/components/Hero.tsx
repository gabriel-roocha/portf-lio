'use client'

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

  return (
    <section className="bg-slate min-h-screen flex items-center">
      <div className="relative isolate w-full px-4 sm:px-6 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 opacity-30"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#7f1d1d] to-[#dc2626] sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div className="mx-auto max-w-5xl pt-20 pb-4 sm:pt-24 sm:pb-8">
          <div className="text-left w-full">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight text-white">
              Construindo soluções inovadoras e modernas
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl font-medium text-gray-400">
              Sou um desenvolvedor web focado em criar aplicações modernas, eficientes e bem estruturadas.
              Do design no Figma ao código em produção com Next.js, Node e NestJS, transformo ideias em produtos digitais funcionais, escaláveis e bem pensados.
            </p>

            <div className="flex flex-wrap gap-4 pt-8">
              {techs.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={index}
                    className="inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-500/10 px-4 py-2 backdrop-blur-sm text-sm font-medium text-white hover:bg-red-500/20 transition-colors"
                  >
                    <Icon className="h-4 w-4 text-white" />
                    <span>{tech.title}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 sm:gap-x-6">
              <a
                href="#experiencia"
                className="w-full sm:w-auto rounded-xl bg-red-600 px-12 sm:px-16 py-4 sm:py-5 text-sm font-semibold text-white shadow-xs transition-colors duration-300 hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 text-center"
              >
                Ver Experiência
              </a>
              <a
                href="#contato"
                className="w-full sm:w-auto text-sm rounded-xl px-12 sm:px-16 py-4 sm:py-5 text-white border border-red-500/50 font-semibold transition-colors duration-300 hover:bg-red-500/10 text-center"
              >
                Contate-me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}