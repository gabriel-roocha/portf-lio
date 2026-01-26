'use client'

import { Clock, BookOpen, Zap, Users, CheckCircle, FileText, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const supportCategories = [
    {
      icon: Clock,
      title: "Cumprimento de Prazos",
      description: "Planejo entregas realistas e cumpro cronogramas – updates regulares e comunicação pró-ativa.",
      proof: "Média de entrega: 2–4 semanas por sprint (exemplo).",
      iconColor: "text-sky-400",
      bgColor: "bg-sky-500/10",
    },
    {
      icon: MessageSquare,
      title: "Comunicação Clara",
      description: "Relatórios objetivos, reuniões com pauta e atualizações diárias quando necessário – reduzo ruído e expectativas erradas.",
      proof: "Relatórios semanais + board compartilhado.",
      iconColor: "text-green-400",
      bgColor: "bg-green-500/10",
    },
    {
      icon: FileText,
      title: "Escopo e Estimativas",
      description: "Quebro requisitos, estimo esforço e proponho prioridades para maximizar ROI do projeto.",
      proof: "Estimativas com margem e alternativas (MVP / versão 1).",
      iconColor: "text-violet-400",
      bgColor: "bg-violet-500/10",
    },
    {
      icon: CheckCircle,
      title: "Qualidade & Testes",
      description: "Práticas de QA: testes automatizados simples, revisão de código e checklist de aceitação antes do deploy.",
      proof: "Menos bugs em produção e entregas mais estáveis.",
      iconColor: "text-lime-400",
      bgColor: "bg-lime-500/10",
    },
    {
      icon: Zap,
      title: "Resolução de Problemas",
      description: "Analiso causas, proponho soluções técnicas e comerciais, e priorizo correções de maior impacto.",
      proof: "Redução de incidências recorrentes e decisões baseadas em dados.",
      iconColor: "text-indigo-400",
      bgColor: "bg-indigo-500/10",
    },
    {
      icon: BookOpen,
      title: "Aprendizado Contínuo",
      description: "Adapto-me a novas stacks e boas práticas – busco sempre melhorias que acelerem o projeto.",
      proof: "Integro ferramentas modernas e proponho refactors quando trazem ROI.",
      iconColor: "text-cyan-400",
      bgColor: "bg-cyan-500/10",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section ref={ref} className="relative min-h-screen bg-slate">
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-6 font-heading text-4xl max-w-[70rem] font-bold text-white md:text-6xl"
        >
          Criativo Design de WebSites e soluções inteligentes
        </motion.h1>

        <div className="mb-16 grid gap-16 lg:grid-cols-2 lg:items-start">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.p variants={itemVariants} className="text-lg text-gray-300 md:text-xl">
              Sou um desenvolvedor full stack com forte base em JavaScript e TypeScript, especializado na construção de aplicações web modernas, escaláveis e orientadas a performance. Possuo experiência sólida no desenvolvimento de APIs e sistemas backend robustos utilizando Node.js e NestJS, bem como na criação de interfaces ricas e responsivas com React e Next.js.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-gray-300 md:text-xl">
              Tenho amplo domínio em bancos de dados relacionais, trabalhando principalmente com PostgreSQL e SQLite, sempre aplicando boas práticas de modelagem, performance e segurança. Utilizo Docker para padronizar ambientes, otimizar fluxos de desenvolvimento e garantir maior confiabilidade em produção. Além disso, possuo conhecimento avançado em Figma, o que me permite transformar designs complexos em interfaces funcionais, mantendo fidelidade visual e excelente experiência do usuário.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-gray-300 md:text-xl">
              Minha missão é desenvolver soluções digitais eficientes, bem estruturadas e sustentáveis, conectando backend sólido, frontend moderno e design bem executado. Estou em constante evolução técnica, buscando aprimorar arquiteturas, ferramentas e práticas que elevem a qualidade dos projetos em que atuo.
            </motion.p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {supportCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative overflow-hidden rounded-2xl border border-red-500/20 bg-red-600/10 p-8 backdrop-blur-sm"
                >
                  <div className="flex gap-6 items-center">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="mb-6 inline-flex h-12 w-18 items-center justify-center rounded-xl bg-red-600/30"
                    >
                      <Icon className="h-6 w-6 text-red-500" />
                    </motion.div>

                    <h3 className="mb-4 text-xl font-semibold text-white">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-gray-300">{category.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-24"
        >
          <div className="h-px w-full bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />
      <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-red-500/20 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-purple-500/20 to-transparent" />
    </section>
  );
}