"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { GraduationCap, Users, Briefcase, Compass } from "lucide-react";

// --- Dados do Hero ---
const heroSlides = [
  {
    title: "Tecnologia com propósito",
    subtitle: "Impulsionando, gerando impacto.",
    description:
      "Vozes na Tech é a sua plataforma para se conectar, aprender e crescer no mundo da tecnologia.",
    imgSrc: "/img/Captura de tela 2025-12-05 101629.png",
  },
  {
    title: "Vozes na Tech",
    subtitle: "Juntas potencializamos nossas vozes!",
    description:
      "Se conecte com mentorias, cursos e oportunidades de carreira exclusivas.",
    imgSrc: "/img/logo1.png",
  },
  {
    title: "Comunidade em Ação",
    subtitle: "Transformando vidas através da tecnologia",
    description:
      "Participantes, voluntários e parceiros unidos por um objetivo comum.",
    imgSrc: "/img/slide2.png",
  },
];

// --- Dados dos formulários de participação ---
const forms = [
  {
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfOqBjxTorLz0x0jtC_sUSk1C4HPLf9CweJFnRk7aJZMJQ3rA/viewform",
    imgSrc: "/img/aluna.png",
    label: "QUERO SER ALUNA",
  },
  {
    href: "https://docs.google.com/forms/d/e/1FAIpQLSc7pXazj43K5IdN5X230KHiY5icV0SgDxHVASjOQQZLADHOxw/viewform",
    imgSrc: "/img/voluntaria.png",
    label: "QUERO SER VOLUNTÁRIO(A)",
  },
  {
    href: "https://docs.google.com/forms/d/e/1FAIpQLScSL6Jwk4Z4hy0soiL6Ccqi2OpM79IYo06SVHn_Oc41A/viewform",
    imgSrc: "/img/parceira.png",
    label: "QUERO SER PARCEIRO(A)",
  },
];

export default function LandingPage() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <main>

        {/* HERO */}
        <HeroCarousel slides={heroSlides} />

        {/* SOBRE */}
        <section id="sobre" className="bg-[#ef469c] py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-white text-center">
              Sobre Nós
            </h2>

            <div className="max-w-4xl mx-auto text-white space-y-8">

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-pink-300">
                  Missão
                </h3>
                <p className="text-lg leading-relaxed">
                  Ampliar a presença de mulheres na tecnologia, oferecendo
                  caminhos reais e escaláveis para crescimento profissional,
                  por meio de educação, mentoria e acesso a oportunidades.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-pink-300">
                  Visão
                </h3>
                <p className="text-lg leading-relaxed">
                  Ser referência em empoderamento feminino no setor de
                  tecnologia, criando um ecossistema inclusivo onde mulheres
                  podem desenvolver todo seu potencial e ocupar posições
                  estratégicas no mercado.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-pink-300">
                  Valores
                </h3>
                <p className="text-lg leading-relaxed">
                  Educação, Mentoria, Oportunidades, Inclusão e Impacto
                  sustentável — princípios que guiam nossas ações para
                  construir uma tecnologia mais diversa e representativa.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* O QUE FAZEMOS */}
        <section id="teste" className="py-20 bg-white">
          <div className="container mx-auto px-4">

            <div className="text-center mb-16">
              <h2 className="text-5xl font-black mb-6 text-yellow-600">
                O que fazemos
              </h2>

              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Promovemos inclusão e representatividade feminina na
                tecnologia através de capacitação, mentoria e oportunidades.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <GraduationCap className="w-12 h-12 mx-auto mb-4 text-yellow-600" />
                <h3 className="text-xl font-bold mb-2">
                  Cursos de capacitação
                </h3>
                <p className="text-gray-600">
                  Desenvolva habilidades técnicas com cursos focados no mercado.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-yellow-600" />
                <h3 className="text-xl font-bold mb-2">
                  Mentorias
                </h3>
                <p className="text-gray-600">
                  Conectamos você com profissionais experientes da área tech.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <Briefcase className="w-12 h-12 mx-auto mb-4 text-yellow-600" />
                <h3 className="text-xl font-bold mb-2">
                  Oportunidades
                </h3>
                <p className="text-gray-600">
                  Acesso a vagas e oportunidades em empresas parceiras.
                </p>
              </div>

            </div>

            <div className="bg-gray-50 border p-10 rounded-3xl max-w-3xl mx-auto text-center">

              <Compass className="w-12 h-12 mx-auto mb-6 text-yellow-600" />

              <h3 className="text-3xl font-bold mb-6 text-yellow-600">
                Teste Vozes do Futuro
              </h3>

              <p className="text-lg text-gray-700">
                Para quem está começando na tecnologia e ainda não sabe qual
                caminho seguir, o teste Vozes do Futuro identifica suas
                habilidades e sugere a área de tecnologia ideal para você.
              </p>

            </div>

          </div>
        </section>

        {/* PARTICIPE */}
        <section id="participe" className="bg-[#eae158] py-20">

          <div className="container mx-auto px-4">

            <h2 className="text-4xl font-black text-center mb-16">
              Faça parte da <span className="text-pink-500">Vozes na Tech</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {forms.map((form) => (
                <a
                  key={form.href}
                  href={form.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-3xl shadow-xl overflow-hidden hover:scale-105 transition"
                >

                  <Image
                    src={form.imgSrc}
                    alt={form.label}
                    width={400}
                    height={400}
                    className="w-full h-64 object-cover"
                  />

                  <div className="p-6 text-center">
                    <span className="px-6 py-2 bg-pink-500 text-white rounded-full font-bold">
                      {form.label}
                    </span>
                  </div>

                </a>
              ))}

            </div>

          </div>

        </section>

      </main>
    </div>
  );
}

interface HeroSlide {
  title: string;
  subtitle: string;
  description: string;
  imgSrc: string;
}

function HeroCarousel({ slides }: { slides: HeroSlide[] }) {
  return (
    <section className="bg-[#392361]">

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
      >

        {slides.map((slide, index) => (

          <SwiperSlide key={index}>

            <div className="grid md:grid-cols-2 gap-8 items-center py-12 px-6">

              <div className="flex justify-center">
                <Image
                  src={slide.imgSrc}
                  alt={slide.title}
                  width={500}
                  height={500}
                  className="rounded-lg object-cover"
                />
              </div>

              <div>

                <h1 className="text-4xl md:text-5xl font-black text-white mb-2">
                  {slide.title}
                </h1>

                <h2 className="text-2xl text-yellow-300 mb-6">
                  {slide.subtitle}
                </h2>

                <p className="text-lg text-white mb-8">
                  {slide.description}
                </p>

                <div className="flex gap-4">

                  <a
                    href="#participe"
                    className="bg-pink-600 text-white px-6 py-3 rounded-full font-bold"
                  >
                    Participar
                  </a>

                  <a
                    href="#sobre"
                    className="bg-white text-purple-900 px-6 py-3 rounded-full font-bold"
                  >
                    Saiba Mais
                  </a>

                </div>

              </div>

            </div>

          </SwiperSlide>

        ))}

      </Swiper>

    </section>
  );
}