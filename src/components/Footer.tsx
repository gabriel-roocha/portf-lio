'use client'

import Link from "next/link";
import { Instagram, Github, LinkedinIcon, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Navegação",
      links: [
        { label: "Início", href: "#inicio" },
        { label: "Sobre", href: "#sobre" },
        { label: "Habilidades", href: "#habilidades" },
        { label: "Experiência", href: "#experiencia" },
        { label: "Contato", href: "#contato" }
      ],
    },
  ];

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

  return (
    <footer className="text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="mb-12">
          <span className="text-2xl font-bold">
            <span className="text-white">Gabriel</span>
            <span className="text-red-600">-Dev</span>
          </span>
        </div>

        <div className="mb-12 flex gap-6">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <Link
                key={social.label}
                href={social.href}
                className="text-gray-400 transition hover:text-white"
                aria-label={social.label}
              >
                <Icon className="h-6 w-6" />
              </Link>
            );
          })}
        </div>

        <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-12 md:grid-cols-4">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-sm font-semibold text-white">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-sm text-gray-400">
            © {currentYear} Gabriel-Dev. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}