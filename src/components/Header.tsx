'use client'

import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'
import Link from "next/link";
import { Instagram, Github, Linkedin, Phone } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

const navigation = [
  { name: 'Início', href: '#inicio' },
  { name: 'Sobre', href: '#sobre' },
  { name: 'Habilidades', href: '#habilidades' },
  { name: 'Experiência', href: '#experiencia' },
  { name: 'Contato', href: '#contato' },
]

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/gabrielsarnno/", label: "Instagram" },
  { icon: Github, href: "https://github.com/gabriel-roocha", label: "Github" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/gabriel-rocha-sarno?utm_source=share_via&utm_content=profile&utm_medium=member_ios", label: "Linkedin" },
  { icon: Phone, href: WHATSAPP_LINK, target: "_blank", label: "Telefone" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 lg:px-8">
      <nav aria-label="Global" className="mx-auto flex flex-col max-w-7xl px-6 py-6 rounded-2xl bg-neutral-900/80 backdrop-blur-md border border-white/10">

        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="text-2xl lg:text-3xl font-bold">
              <span className="text-white">Gabriel</span>
              <span className="text-red-600">-Dev</span>
            </span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
          >
            <span className="sr-only">{mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}</span>
            {mobileMenuOpen
              ? <XMarkIcon aria-hidden="true" className="size-6" />
              : <Bars3Icon aria-hidden="true" className="size-6" />
            }
          </button>

          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-lg font-semibold text-white hover:text-gray-300 transition-colors">
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex lg:gap-x-4">
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
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden lg:hidden"
            >
              <div className="flex flex-col gap-1 pt-4 mt-4 border-t border-white/10">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-lg px-4 py-2.5 text-base font-semibold text-white hover:bg-white/5 transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
                <div className="flex gap-5 px-4 pt-4 mt-2 border-t border-white/10">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <Link
                        key={social.label}
                        href={social.href}
                        className="text-gray-400 transition hover:text-white"
                        aria-label={social.label}
                      >
                        <Icon className="h-5 w-5" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}