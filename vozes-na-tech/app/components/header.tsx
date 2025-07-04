"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

// Componente de Cabeçalho
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { href: "#cursos-eventos", label: "Cursos e Eventos" },
    { href: "#vagas", label: "Vagas" },
    { href: "#teste", label: "Teste Vocacional" },
    { href: "#participe", label: "Participe" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/img/logo1.png"
            alt="Vozes na Tech Logo"
            width={40}
            height={40}
            className="rounded-full"
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/40x40/3B82F6/FFFFFF?text=VT";
            }}
          />
          <span className="text-xl font-bold text-purple-900">
            Vozes na Tech
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              href={link.href}
              key={link.href}
              className="text-gray-600 hover:text-purple-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#"
            className=" text-purple-900 font-semibold hover:underline"
          >
            Login
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfOqBjxTorLz0x0jtC_sUSk1C4HPLf9CweJFnRk7aJZMJQ3rA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-900 text-white px-5 py-2 rounded-full font-semibold hover:bg-purple-500 transition-colors shadow"
          >
            Cadastre-se
          </a>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white p-4 border-t">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                href={link.href}
                key={link.href}
                className="text-gray-600 hover:text-purple-600 block py-2"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            <hr />
            <a
              href="#"
              className=" text-purple-900 font-semibold py-2"
              onClick={closeMenu}
            >
              Login
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfOqBjxTorLz0x0jtC_sUSk1C4HPLf9CweJFnRk7aJZMJQ3rA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white text-center px-5 py-2 rounded-full font-semibold hover:bg-blue-700"
              onClick={closeMenu}
            >
              Cadastre-se
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
