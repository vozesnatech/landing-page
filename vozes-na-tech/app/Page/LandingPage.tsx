import Image from "next/image";
import { useState } from "react";
import { CursosEventosSection } from "../components/CursosEventos";
import SwiperComponent from "../components/SwiperComponent";
import "swiper/swiper-bundle.css"; // Importar estilos do Swiper

// --- Componente principal da Landing Page ---

export default function LandingPage() {
  const [showTest, setShowTest] = useState(false);

  const vagas = [
    {
      href: "https://vempraclaro.gupy.io/jobs/8000106?jobBoardSource=share_link",
      imgSrc: "/img/logoclaro.png",
      company: "Claro Brasil",
      title: "Desenvolvedor Android Sênior",
    },
    {
      href: "https://vempraclaro.gupy.io/jobs/8000334?jobBoardSource=gupy_public_page",
      imgSrc: "/img/logoclaro.png",
      company: "Claro Brasil",
      title: "Desenvolvedor iOS Pleno",
    },
    {
      href: "https://vempraclaro.gupy.io/jobs/8000237?jobBoardSource=gupy_public_page",
      imgSrc: "/img/logoclaro.png",
      company: "Claro Brasil",
      title: "Arquiteto de Sistemas",
    },
    {
      href: "https://vempraclaro.gupy.io/jobs/8000256?jobBoardSource=gupy_public_page",
      imgSrc: "/img/logoclaro.png",
      company: "Claro Brasil",
      title: "Dev Full Stack Pleno",
    },
  ];

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
      href: "https://docs.google.com/forms/d/e/1FAIpQLScSL6Jwk4Z4hy0soiL6Ccqi2OpM79IYo06SVHkF2WHn_Oc41A/viewform",
      imgSrc: "/img/parceira.png",
      label: "QUERO SER PARCEIRO(A)",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      <main>
        {/* Secção Hero */}
        <section className="text-center py-20 px-4 bg-purple-50">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
            Tecnologia com propósito: impulsionando, gerando impacto.
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Vozes na Tech é a sua plataforma para se conectar, aprender e
            crescer no mundo da tecnologia.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#cursos-eventos"
              className="bg-purple-900 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-600 transition-transform hover:scale-105 shadow-lg"
            >
              Comece Agora
            </a>
            <a
              href="#vagas"
              className="bg-white text-purple-900 px-8 py-3 rounded-full text-lg font-semibold border-2 border-purple-300 hover:bg-purple-100 transition-colors shadow-lg"
            >
              Ver Vagas
            </a>
          </div>
        </section>

        {/* Secção Swiper */}
        <section className="container mx-auto px-4 py-12">
          <SwiperComponent />
        </section>

        {/* Secção Cursos e Eventos */}
        <CursosEventosSection />

        {/* Secção Vagas */}
        <section id="vagas" className="bg-purple-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              Vagas em Destaque
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {vagas.map((vaga, index) => (
                <a
                  href={vaga.href}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl hover:-translate-y-2 transition-all group"
                >
                  <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center bg-gray-100 rounded-full">
                    <Image
                      src={vaga.imgSrc}
                      alt={vaga.company}
                      width={60}
                      height={60}
                      objectFit="contain"
                      onError={(e) => {
                        e.currentTarget.src = `https://placehold.co/96x96/E2E8F0/475569?text=${vaga.company.charAt(
                          0
                        )}`;
                      }}
                    />
                  </div>
                  <div className="text-md text-gray-500 font-medium">
                    {vaga.company}
                  </div>
                  <div className="font-bold mt-2 text-lg text-gray-900 group-hover:text-purple-900">
                    {vaga.title}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Secção Teste Vocacional */}
        <section id="teste" className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Descubra a sua Carreira na Tecnologia! 😉
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Não tem a certeza de qual área da tecnologia é a ideal para si?
              Faça o nosso teste vocacional e encontre o caminho que mais
              combina consigo.
            </p>
            <div id="teste-container">
              {!showTest ? (
                <button
                  onClick={() => setShowTest(true)}
                  className="bg-purple-900 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-transform hover:scale-105 shadow-lg"
                >
                  Fazer o Teste Agora
                </button>
              ) : (
                <div className="mt-8">
                  <iframe
                    src="https://meir3manu.github.io/mvp/testeapp.html"
                    className="w-full h-[999px] border-2 border-gray-200 rounded-lg shadow-lg"
                    title="Teste Vocacional de Tecnologia"
                  ></iframe>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Secção Participe */}
        <section id="participe" className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              Faça parte da Vozes na Tech
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {forms.map((form) => (
                <a
                  href={form.href}
                  key={form.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl hover:scale-105 transition-all group"
                >
                  <Image
                    src={form.imgSrc}
                    alt={form.label}
                    width={100}
                    height={100}
                    className="mx-auto mb-4"
                    onError={(e) => {
                      e.currentTarget.src = `https://placehold.co/100x100/A78BFA/FFFFFF?text=${form.label.charAt(
                        0
                      )}`;
                    }}
                  />
                  <span className="text-lg font-bold text-gray-800 group-hover:text-purple-900 transition-colors">
                    {form.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
