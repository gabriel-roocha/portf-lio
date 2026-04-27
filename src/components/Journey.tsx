'use client'

import { Briefcase, GraduationCap, Award, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Journey() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Desenvolvedor Frontend | Design UX/UI",
      company: "ONG Salvar Cão – Goiânia/GO",
      period: "Jan 2024 - Mar 2024",
      description:
        "Liderou o processo de design end-to-end no Figma, desde wireframes até protótipos navegáveis, aplicando metodologia UX centrada no usuário. Converteu o design system em código React responsivo, reduzindo o gap entre layout e implementação. Entregou landing page e páginas internas dentro do prazo, com foco em acessibilidade e performance web.",
    },
    {
      title: "Designer UX/UI",
      company: "TOO Company – Goiânia/GO",
      period: "Abr 2024 - Jun 2024",
      description:
        "Conduziu a criação da identidade visual completa do produto, incluindo guia de estilo, componentes reutilizáveis e design responsivo para web. Definiu a arquitetura de informação e fluxos de navegação da plataforma, garantindo consistência visual e experiência intuitiva para o usuário final. Colaborou diretamente com stakeholders para alinhar entregas ao roadmap do produto.",
    },
    {
      title: "Desenvolvedor Backend",
      company: "Harpia Solutions – Goiânia/GO",
      period: "Jul 2024 - Set 2024",
      description:
        "Realizou refatoração completa do banco de dados legado e redesenhou a arquitetura backend do zero, aumentando a manutenibilidade e escalabilidade do sistema. Implementou versionamento com Git, documentação técnica e padrões REST, viabilizando onboarding mais rápido de novos desenvolvedores. Reduziu débito técnico crítico e estabeleceu boas práticas de desenvolvimento para o time.",
    },
    {
      title: "Desenvolvedor Full Stack",
      company: "[8]/actio – Goiânia/GO",
      period: "Out 2024 - Jan 2025",
      description:
        "Atuou como desenvolvedor full stack com protagonismo no backend, construindo APIs RESTful robustas e realizando integrações com o frontend React. Participou de todo o ciclo de desenvolvimento — análise de requisitos, implementação, revisão de código e deploy — em ambiente ágil com entregas iterativas. Colaborou diretamente com o time de produto para garantir qualidade técnica e aderência às funcionalidades especificadas.",
    },
  ];

  const education = [
    {
      title: "Diploma de Ensino Médio",
      institution: "Prevest / Fractal",
      period: "2020 - 2024",
      description: "Concluiu o ensino médio com foco em tecnologia e desenvolvimento.",
    },
  ];

  const certifications = [
    {
      title: "NestJS do Zero com Banco de dados, Prisma, Testes, Swagger",
      institution: "Udemy",
      year: "2025",
      link: "https://www.udemy.com/course/typescript-do-basico-ao-avancado-c-react-express/learn/lecture/30227068?start=15#overview"
    },
    {
      title: "TypeScript do básico ao avançado (c/React, Express)",
      institution: "Udemy",
      year: "2024",
      link: "https://www.udemy.com/course/typescript-do-basico-ao-avancado-c-react-express/learn/lecture/30227068?start=0#overview"
    },
    {
      title: "Curso Vue JS 2 - O Guia Completo (incl.Vue Router & Vuex)",
      institution: "Udemy",
      year: "2023",
      link: "https://www.udemy.com/course/vue-js-completo/learn/lecture/13277832?start=0#overview"
    },
    {
      title: "Docker para desenvolvedores (com Docker Swarm e Kubernetes)",
      institution: "Udemy",
      year: "2025",
      link: "https://www.udemy.com/course/docker-para-desenvolvedores-com-docker-swarm-e-kubernetes/?couponCode=MT260126G3B"
    },
  ];

  const timelineVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
      },
    }),
  };

  const certVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
      },
    }),
  };

  return (
    <section ref={ref} className="py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-red-400">
            <motion.span
              initial={{ width: 0 }}
              animate={isInView ? { width: 32 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-px bg-red-400"
            />
            Minha Experiência
          </p>
          <h2 className="font-heading text-4xl font-bold md:text-5xl">
            Jornada Profissional
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/20">
                <Briefcase className="h-5 w-5 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold">Experiência de Trabalho</h3>
            </motion.div>

            <div className="relative space-y-8 before:absolute before:left-[7px] before:top-0 before:h-full before:w-px before:bg-red-500/50">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={timelineVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="relative pl-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.3 }}
                    className="absolute left-0 top-1 h-4 w-4 rounded-full border-2 border-red-500 bg-black"
                  />

                  <motion.div
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="group rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-900/20 to-transparent p-6 transition hover:border-red-500/40 hover:bg-red-900/30"
                  >
                    <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-lg font-semibold">{exp.title}</h4>
                      <span className="flex items-center gap-1 rounded-full bg-red-500/20 px-3 py-1 text-xs font-semibold text-red-300">
                        <Calendar className="h-3 w-3" />
                        {exp.period}
                      </span>
                    </div>
                    <p className="mb-3 text-sm text-gray-400">{exp.company}</p>
                    <p className="text-sm leading-relaxed text-gray-300">
                      {exp.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-8 flex items-center gap-3"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/20">
                  <GraduationCap className="h-5 w-5 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold">Educação</h3>
              </motion.div>

              <div className="relative space-y-8 before:absolute before:left-[7px] before:top-0 before:h-full before:w-px before:bg-red-500/30">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="relative pl-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.7, duration: 0.3 }}
                      className="absolute left-0 top-1 h-4 w-4 rounded-full border-2 border-red-500 bg-black"
                    />

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-900/20 to-transparent p-6 transition hover:border-red-500/40"
                    >
                      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                        <h4 className="text-lg font-semibold">{edu.title}</h4>
                        <span className="flex items-center gap-1 rounded-full bg-red-500/20 px-3 py-1 text-xs font-semibold text-red-300">
                          <Calendar className="h-3 w-3" />
                          {edu.period}
                        </span>
                      </div>
                      <p className="mb-2 text-sm text-gray-400">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-gray-300">{edu.description}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mb-8 flex items-center gap-3"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/20">
                  <Award className="h-5 w-5 text-red-400" />
                </div>
                <h3 className="text-2xl font-bold">Certificações</h3>
              </motion.div>

              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.a
                    key={index}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    custom={index}
                    variants={certVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    whileHover={{ x: 5, scale: 1.02 }}
                    className="group flex items-start gap-3 rounded-xl border border-red-500/20 bg-gradient-to-br from-red-900/10 to-transparent p-4 transition hover:border-red-500/40 hover:bg-red-900/20 cursor-pointer"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        delay: index * 0.2,
                      }}
                      className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-red-400"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-white group-hover:text-red-400 transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {cert.institution} • {cert.year}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}