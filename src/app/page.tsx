import Hero from "@/components/Hero";
import Header from "@/components/Header"

import Contact from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { About } from "@/components/About";
import { Journey } from "@/components/Journey"
import { Skills } from "@/components/Skills"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section id="inicio" className="scroll-mt-24">
          <Hero />
        </section>

        <section id="sobre" className="scroll-mt-24">
          <About />
        </section>

        <section id="habilidades" className="scroll-mt-24">
          <Skills />
        </section>

        <section id="experiencia" className="scroll-mt-24">
          <Journey />
        </section>

        <section id="contato" className="scroll-mt-24">
          <Contact />
        </section>

        <section className="scroll-mt-24">
          <Footer />
        </section>
      </main>
    </>
  )
}