import Image from "next/image";
import { useState } from "react";
import "swiper/swiper-bundle.css";
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

// --- Dados de Missão, Visão e Valores ---
const missoesVisaoValores = [
  {
    title: "Missão",
    description:
      "Ampliar a presença de mulheres na tecnologia, oferecendo caminhos reais e escaláveis para crescimento profissional, por meio de educação, mentoria e acesso a oportunidades.",
  },
  {
    title: "Visão",
    description:
      "Ser referência em empoderamento feminino no setor de tecnologia, criando um ecossistema inclusivo onde mulheres podem desenvolver todo seu potencial e ocupar posições estratégicas no mercado.",
  },
  {
    title: "Valores",
    description:
      "Educação, Mentoria, Oportunidades, Inclusão e Impacto sustentável — princípios que guiam nossas ações para construir uma tecnologia mais diversa e representativa.",
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

// --- Componente principal da Landing Page ---
export default function LandingPage() {
  const [showTest, setShowTest] = useState(false);

  return (
    <div className="bg-gray-50 text-gray-800">
      <main>
        {/* Hero Carrossel */}
        <HeroCarousel slides={heroSlides} />

        {/* Sobre Nós (Missão, Visão e Valores) */}
        <section id="sobre" className="bg-[#ef469c] py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-white text-center">Sobre Nós</h2>
            <div className="max-w-4xl mx-auto text-white space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-pink-300">Missão</h3>
                <p className="text-lg leading-relaxed">
                  Ampliar a presença de mulheres na tecnologia, oferecendo caminhos reais e escaláveis para crescimento profissional, por meio de educação, mentoria e acesso a oportunidades.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-pink-300">Visão</h3>
                <p className="text-lg leading-relaxed">
                  Ser referência em empoderamento feminino no setor de tecnologia, criando um ecossistema inclusivo onde mulheres podem desenvolver todo seu potencial e ocupar posições estratégicas no mercado.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-pink-300">Valores</h3>
                <p className="text-lg leading-relaxed">
                  Educação, Mentoria, Oportunidades, Inclusão e Impacto sustentável — princípios que guiam nossas ações para construir uma tecnologia mais diversa e representativa.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Teste Vocacional / Serviços */}
        <section id="teste" className="py-20 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              {/* Header da seção */}
              <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-black mb-6 text-yellow-600 leading-tight">
                  O que fazemos
                </h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-semibold">
                  Buscamos promover inclusão e representatividade feminina na área de tecnologia, oferecendo:
                </p>
              </div>

              {/* Pilares principais */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
                  <GraduationCap className="w-12 h-12 mx-auto mb-4 text-yellow-600" />
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Cursos de capacitação</h3>
                  <p className="text-gray-600">Oferecemos cursos especializados para desenvolver habilidades técnicas.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
                  <Users className="w-12 h-12 mx-auto mb-4 text-yellow-600" />
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Mentorias com profissionais</h3>
                  <p className="text-gray-600">Conectamos você com mentoras experientes no mercado de tecnologia.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
                  <Briefcase className="w-12 h-12 mx-auto mb-4 text-yellow-600" />
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Oportunidades de emprego</h3>
                  <p className="text-gray-600">Acesso a vagas exclusivas e estágios em empresas parceiras.</p>
                </div>
              </div>

              {/* Seção do Teste Vocacional */}
              <div className="bg-gray-50 border border-gray-200 p-10 rounded-3xl max-w-3xl mx-auto">
                <div className="text-center">
                  <Compass className="text-6xl mb-6" />
                  <h3 className="text-3xl font-bold mb-6 text-yellow-600">Teste Vozes do Futuro</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Para quem está começando na tecnologia e ainda tem dúvidas sobre qual caminho seguir, oferecemos o teste Vozes do Futuro.
                    Ele identifica suas habilidades e sugere a área de tecnologia que mais combina com você.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Formulários de Participação */}
        <section id="participe" className="bg-[#eae158] py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-gray-900">
                Faça parte da <span className="text-pink-400">Vozes na Tech</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {forms.map((form) => (
                  <a
                    href={form.href}
                    key={form.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl hover:scale-105 transition-all group"
                  >
                    <div className="aspect-square overflow-hidden bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center">
                      <Image
                        src={form.imgSrc}
                        alt={form.label}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+IRjWjBqO6O2mhP//Z"
                        onError={(e) => {
                          e.currentTarget.src = `https://placehold.co/200x200/E91E63/FFFFFF?text=${form.label.charAt(
                            0
                          )}`;
                        }}
                      />
                    </div>
                    <div className="p-6 text-center">
                      <span className="inline-block px-6 py-2 bg-pink-400 text-white rounded-full font-bold text-sm group-hover:bg-pink-500 transition-colors">
                        {form.label}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

// --- Componente do Hero Carrossel ---
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
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="w-full"
      >
        {slides.map((slide: HeroSlide, index: number) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12 px-4 min-h-[500px]">
              {/* Imagem */}
              <div className="flex justify-center">
                <div className="w-full max-w-md h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={slide.imgSrc}
                    alt={slide.title}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+IRjWjBqO6O2mhP//Z"
                    onError={(e) => {
                      e.currentTarget.src = `https://placehold.co/500x500/A78BFA/FFFFFF?text=${slide.title.charAt(
                        0
                      )}`;
                    }}
                  />
                </div>
              </div>

              {/* Texto */}
              <div className="text-left">
                <h1 className="text-4xl md:text-5xl font-black text-white mb-2 leading-tight">
                  {slide.title}
                </h1>
                <h2 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-6">
                  {slide.subtitle}
                </h2>
                <p className="text-lg text-white/90 mb-8 leading-relaxed">
                  {slide.description}
                </p>
                <div className="flex gap-4">
                  <a
                    href="#participe"
                    className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-lg"
                  >
                    Participar
                  </a>
                  <a
                    href="#sobre"
                    className="bg-white text-purple-900 px-8 py-3 rounded-full text-lg font-bold hover:bg-gray-100 transition-all shadow-lg"
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
