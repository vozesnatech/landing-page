"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import 'swiper/swiper-bundle.css'; 
// --- Componente para o Carrossel (Swiper) ---

function SwiperComponent() {

    const slides = [
        { href: "https://meir3manu.github.io/mvp/home.html", src: "/img/1.png", alt: "Logo da Vozes na Tech" },
        { href: "https://docs.google.com/forms/d/e/1FAIpQLScSL6Jwk4Z4hy0soiL6Ccqi2OpM79IYo06SVHkF2WHn_Oc41A/viewform", src: "/img/2.png", alt: "Seja apoiador ou parceiro" },
        { href: "https://www.instagram.com/vozesnatech/", src: "/img/3.png", alt: "Saiba mais dos eventos e palestras" },
    ];
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
            {slides.map((slide, index) => (
                <a href={slide.href} target="_blank" rel="noopener noreferrer" key={index}>
                    <Image 
                        src={slide.src} 
                        alt={slide.alt} 
                        layout="fill" 
                        objectFit="cover"
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                        onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/3B82F6/FFFFFF?text=Imagem+Indispon%C3%ADvel'; }}
                    />
                </a>
            ))}
        </div>
    );
}

export default SwiperComponent;
