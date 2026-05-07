"use client";

import { useEffect, useRef, useState } from "react";

type Skill = {
  name: string;
  level: number;
};

export function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const skills: Skill[][] = [
    [
      { name: "JavaScript", level: 100 },
      { name: "TypeScript", level: 90 },
    ],
    [
      { name: "Node.js/Nest.js", level: 90 },
      { name: "React/Next.js", level: 85 },
    ],
    [
      { name: "UX/UI", level: 90 },
      { name: "Figma", level: 95 },
    ],
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="mb-16 text-center font-heading text-4xl font-bold md:text-5xl">
          Habilidades Técnicas
        </h2>
        <div className="space-y-8">
          {skills.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="grid gap-8 md:grid-cols-2"
              style={{
                animationDelay: `${rowIndex * 100}ms`,
              }}
            >
              {row.map((skill, skillIndex) => (
                <SkillBar
                  key={skillIndex}
                  name={skill.name}
                  level={skill.level}
                  isVisible={isVisible}
                  delay={rowIndex * 100 + skillIndex * 50}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type SkillBarProps = {
  name: string;
  level: number;
  isVisible: boolean;
  delay: number;
};

function SkillBar({ name, level, isVisible, delay }: SkillBarProps) {
  const [currentLevel, setCurrentLevel] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let timer: ReturnType<typeof setInterval>;

    const timeout = setTimeout(() => {
      const duration = 1500;
      const steps = 60;
      const increment = level / steps;
      let current = 0;
      let step = 0;

      timer = setInterval(() => {
        step++;
        current = Math.min(current + increment, level);
        setCurrentLevel(Math.round(current));

        if (step >= steps) {
          clearInterval(timer);
          setCurrentLevel(level);
        }
      }, duration / steps);
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(timer);
    };
  }, [isVisible, level, delay]);

  return (
    <div className="group">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-lg font-semibold text-white">{name}</span>
        <span className="text-lg text-red-400">
          {currentLevel}%
        </span>
      </div>
      <div className="relative h-3 overflow-hidden rounded-full bg-gray-800">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700" />
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-red-600 via-red-500 to-red-500 transition-all duration-300 ease-out"
          style={{
            width: `${currentLevel}%`,
            boxShadow: "0 0 20px rgba(220, 38, 38, 0.5)",
          }}
        >
        </div>
      </div>
    </div>
  );
}