"use client"
import React from "react";
import { Instagram } from "lucide-react";
import Image from "next/image";


function Footer() {
  return (
    <footer className="bg-stone-200 py-16 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo and Social */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Image src="/img/png1-01.png" 
              alt="Vozes na Tech"
               width={250} height={250} />
            </div>
            <div className="flex items-center gap-1">
              <a href="#" className="w-10 h-10 rounded-full bg-purple-900 flex items-center justify-center hover:bg-purple-100 transition-colors">
                <svg className="w-5 h-5 fill-bg-purple-200" viewBox="0 0 25 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-purple-900 flex items-center justify-center hover:bg-purple-100 transition-colors">
                <Instagram className="w-5 h-5 text-bg-purple-900" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-purple-900 flex items-center justify-center hover:bg-purple-100 transition-colors">
                <svg className="w-5 h-5 fill-bg-purple-200" viewBox="0 0 25 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-bg-stone-900 mb-4">Fale conosco</h4>
            <p className="text-muted-bg-stone-800 mb-2">21 XXXXX-XXXX</p>
            <p className="text-muted-bg-stone-800">xxxxxxx@email.com</p>

            <h4 className="font-bold text-bg-stone-900 mt-6 mb-4">Menu</h4>
            <ul className="space-y-2 text-muted-bg-stone-900">
              <li><a href="#" className="hover:text-primary transition-colors">Início</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sobre</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Ferramentas</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Faça parte</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Entrar</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Doar</a></li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-stone-900 mb-4">Vamos conversar</h4>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-bg-stone-800 mb-1">Nome*</label>
                  <input
                    type="text"
                    placeholder="Sobrenome"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-1">Assunto</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-1">Email*</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-1">Insira sua mensagem</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:border-primary focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-pink-400 text-bg-stone-100 font-semibold hover:bg-purple-900 transition-colors"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
