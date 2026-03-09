"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/home", label: "Início" },
    { href: "#sobre", label: "Sobre Nós" },
    { href: "#teste", label: "Serviços" },
    { href: "#participe", label: "Participe" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <a href="/home" className="flex items-center">
          <Image
            src="/img/png1-01.png"
            alt="Vozes na Tech Logo"
            width={120}
            height={50}
            className="object-contain"
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/120x50/3B82F6/FFFFFF?text=VT";
            }}
          />
        </a>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            <a
              href={link.href}
              key={link.href}
              className="text-gray-600 hover:text-purple-900 transition-colors font-medium text-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Botões Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/login"
            className="bg-white text-purple-900 px-4 py-1.5 rounded-full text-sm font-semibold border-2 border-purple-300 hover:bg-purple-100 transition-colors shadow"
          >
            Doar
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfOqBjxTorLz0x0jtC_sUSk1C4HPLf9CweJFnRk7aJZMJQ3rA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-900 text-white px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-purple-700 transition-colors shadow"
          >
            Entrar
          </a>
        </div>

        {/* Menu Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white p-4 border-t shadow-md">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                href={link.href}
                key={link.href}
                className="text-gray-700 hover:text-purple-900 block py-2 font-medium"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            <hr className="my-2 border-gray-300" />
            <a
              href="/login"
              className="text-purple-900 font-semibold py-2"
              onClick={closeMenu}
            >
              Doar
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfOqBjxTorLz0x0jtC_sUSk1C4HPLf9CweJFnRk7aJZMJQ3rA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 text-white text-center px-4 py-2 rounded-full text-sm font-semibold hover:bg-purple-700"
              onClick={closeMenu}
            >
              Entrar
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}