"use client";
import React from 'react';

export const Footer = () => (
<div>
  {/* Rodapé */}
      <footer className="bg-purple-950 text-white">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 justify-items-center">
          <div>
              <h3 className="text-lg font-bold">Vozes na Tech</h3>
              <p className="mt-2 text-gray-400 text-sm">Capacitando mulheres na tecnologia.</p>
          </div>
          <div>
              <h4 className="font-semibold mb-3">Links Rápidos</h4>
              <ul className="space-y-2 text-sm">
                  <li><a href="#cursos-eventos" className="text-gray-400 hover:text-white">Cursos e Eventos</a></li>
                  <li><a href="#vagas" className="text-gray-400 hover:text-white">Vagas</a></li>
                  <li><a href="#teste" className="text-gray-400 hover:text-white">Teste Vocacional</a></li>
                  <li><a href="#participe" className="text-gray-400 hover:text-white">Participe</a></li>
              </ul>
          </div>
           <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-gray-400 hover:text-white">Termos de Serviço</a></li>
                  <li><a href="#" className="text-gray-400 hover:text-white">Política de Privacidade</a></li>
              </ul>
          </div>
           <div>
              <h4 className="font-semibold mb-3">Redes Sociais</h4>
              <div className="flex space-x-4">
                  <a href="https://www.instagram.com/vozesnatech/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">Instagram</a>
                  <a href="https://linktr.ee/vozesnatech" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">Linktree</a>
              </div>
          </div>
      </div>
      <div className="border-t border-purple-500 py-4 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Vozes na Tech. Todos os direitos reservados.
      </div>
  </footer>
</div>
);
export default Footer;