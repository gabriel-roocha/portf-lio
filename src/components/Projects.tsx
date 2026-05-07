'use client'

import { useRef, useState, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Code2, Layers, Zap } from "lucide-react";
import Image from "next/image";

type Project = {
  title: string;
  category: string;
  stack: string[];
  role: string;
  highlight: string;
  description: string;
  images: string[];
  link?: string;
};

const projects: Project[] = [
  {
    title: "Plataforma [8]/actio",
    category: "Full Stack",
    stack: ["React", "NestJS", "TypeScript", "PostgreSQL"],
    role: "Backend + apoio frontend em ciclo ágil completo",
    highlight: "APIs robustas com entregas iterativas em ambiente ágil",
    description:
      "Plataforma de treinamento corporativo com cursos, recomendações por IA e assistente virtual. Atuei no desenvolvimento de APIs RESTful e integração com o frontend React em sprints semanais.",
    images: ["/actio-v2.png"],
  },
  {
    title: "TOO Company",
    category: "UX/UI + Frontend",
    stack: ["Figma", "React", "Next.js"],
    role: "Design system completo + implementação frontend",
    highlight: "Identidade visual do zero até produção",
    description:
      "Plataforma educacional com dashboard de cursos, mentorias e eventos. Responsável pela criação da identidade visual e design system completo, com tradução fiel para código React.",
    images: ["/tooCompany.png"],
  },
  {
    title: "Harpia Solutions",
    category: "Backend",
    stack: ["Node.js", "PostgreSQL", "Docker", "Git"],
    role: "Reestruturação completa da arquitetura backend",
    highlight: "Redução de débito técnico + documentação completa",
    description:
      "Site institucional e sistema backend para empresa de consultoria estratégica. Reconstrução da base de dados e APIs legadas com padrões REST, versionamento Git e documentação técnica.",
    images: ["/arphia.png"],
  },
];
function ImageCarousel({ images, title }: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="relative w-full h-76 sm:h-84 overflow-hidden rounded-xl bg-neutral-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.35 }}
          className="absolute inset-0"
        >
          <Image
            src={images[current]}
            alt={`${title} - imagem ${current + 1}`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 via-transparent to-transparent" />
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 transition"
            aria-label="Imagem anterior"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80 transition"
            aria-label="Próxima imagem"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-4 bg-red-500" : "w-1.5 bg-white/40"
                  }`}
                aria-label={`Ir para imagem ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = useCallback(() =>
    setActiveIndex((i) => (i === 0 ? projects.length - 1 : i - 1)), []);
  const next = useCallback(() =>
    setActiveIndex((i) => (i === projects.length - 1 ? 0 : i + 1)), []);

  // Projetos visíveis: ativo e próximo (em telas grandes)
  const visibleProjects = [
    projects[activeIndex],
    projects[(activeIndex + 1) % projects.length],
  ];

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
            Portfólio
          </p>
          <h2 className="font-heading text-4xl font-bold md:text-5xl">
            Projetos Selecionados
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl">
            Uma seleção de projetos que refletem minha atuação técnica, capacidade de entrega e evolução profissional.
          </p>
        </motion.div>
        <div className="relative">
          <div className="grid gap-6 md:grid-cols-2">
            {visibleProjects.map((project, i) => (
              <motion.div
                key={`${activeIndex}-${i}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`${i === 1 ? "hidden md:block" : ""}`}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
          <div className="mt-10 flex items-center justify-between">
            <div className="flex gap-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex ? "w-6 bg-red-500" : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                  aria-label={`Ir para projeto ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={prev}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-red-500/30 bg-red-500/10 text-white transition hover:bg-red-500/20"
                aria-label="Projeto anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={next}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-red-500/30 bg-red-500/10 text-white transition hover:bg-red-500/20"
                aria-label="Próximo projeto"
              >
                <ChevronRight className="h-5 w-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group flex flex-col rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-900/10 to-neutral-900/60 overflow-hidden backdrop-blur-sm hover:border-red-500/40 transition-colors duration-300"
    >
      <ImageCarousel images={project.images} title={project.title} />
      <div className="flex flex-col flex-1 p-6 gap-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">
              {project.category}
            </span>
            <h3 className="mt-1 text-xl font-bold text-white">{project.title}</h3>
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 text-gray-500 hover:text-red-400 transition"
              aria-label="Ver projeto"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </div>
        <p className="text-sm text-gray-400 leading-relaxed">{project.description}</p>
        <div className="flex items-center gap-2 flex-wrap">
          <Code2 className="h-4 w-4 text-red-400 flex-shrink-0" />
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-red-500/20 bg-red-500/10 px-2.5 py-0.5 text-xs font-medium text-red-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-auto space-y-2 border-t border-white/5 pt-4">
          <div className="flex items-start gap-2 text-sm text-gray-300">
            <Layers className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
            <span><span className="text-gray-500">Atuação:</span> {project.role}</span>
          </div>
          <div className="flex items-start gap-2 text-sm text-gray-300">
            <Zap className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
            <span><span className="text-gray-500">Destaque:</span> {project.highlight}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}