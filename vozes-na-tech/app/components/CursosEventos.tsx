"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import "swiper/swiper-bundle.css";

// --- Componente para a secção de Cursos e Eventos ---
export function CursosEventosSection() {
  const [activeTab, setActiveTab] = useState("cursos");

  const cursos = [
    { title: "Letramento Digital" },
    { title: "Analista de dados" },
    { title: "UX Design" },
    { title: "Inteligência Artificial" },
  ];
  const eventos = [
    { imgSrc: "/img/image.png", title: "Dia das Mulheres na Ciência" },
    { imgSrc: "/img/fgv.png", title: "Campeãs de Pitch na FGV" },
    { imgSrc: "/img/tech.png", title: "Participação na Expo Favela 2024" },
    { imgSrc: "/img/evento.png", title: "Inauguração do projeto Logadas" },
  ];

  return (
    <section id="cursos-eventos" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-4">
        Desenvolva as suas Habilidades
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
        Oferecemos cursos e eventos para impulsionar a sua carreira na
        tecnologia.
      </p>

      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setActiveTab("cursos")}
          className={`px-6 py-2 rounded-full font-semibold transition-all ${
            activeTab === "cursos"
              ? "bg-purple-900 text-white shadow-lg"
              : "bg-white text-gray-700 hover:bg-pink-400"
          }`}
        >
          Cursos
        </button>
        <button
          onClick={() => setActiveTab("eventos")}
          className={`px-6 py-2 rounded-full font-semibold transition-all ${
            activeTab === "eventos"
              ? "bg-purple-900 text-white shadow-lg"
              : "bg-white text-gray-700 hover:bg-pink-400"
          }`}
        >
          Eventos
        </button>
      </div>

      <div className={`${activeTab === "cursos" ? "" : "hidden"}`}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {cursos.map((curso, index) => (
            <a href="#" key={index} className="block">
              <div className="bg-white rounded-xl shadow p-5 text-center hover:shadow-2xl hover:-translate-y-1 transition-all cursor-pointer group">
                <Image
                  src="/img/—Pngtree—degree cap 3d icon education_7429657.png"
                  alt="Capelo"
                  width={80}
                  height={80}
                  className="mx-auto mb-3"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://placehold.co/80x80/BFDBFE/3B82F6?text=Curso";
                  }}
                />
                <div className="text-xs text-purple-900 font-semibold mb-2">
                  CURSO
                </div>
                <div className="font-bold text-gray-800 mb-2 group-hover:text-purple-900 ">
                  {curso.title}
                </div>
                <div className="flex items-center justify-center text-sm text-yellow-500">
                  <Star size={16} className="fill-current" />
                  <span className="ml-1 font-bold">4.8</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className={`${activeTab === "eventos" ? "" : "hidden"}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventos.map((evento, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden group hover:-translate-y-1 transition-transform"
            >
              <Image
                src={evento.imgSrc}
                alt={evento.title}
                width={500}
                height={300}
                objectFit="cover"
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.src = `https://placehold.co/500x300/6366F1/FFFFFF?text=Evento+${
                    index + 1
                  }`;
                }}
              />
              <div className="p-5">
                <h3 className="font-bold text-lg text-gray-800">
                  {evento.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
