"use client"; // Habilita interatividade no lado do cliente (necessário para Hooks)

import { useState } from "react";
import Image from "next/image"; // Otimiza automaticamente peso e carregamento das imagens

export default function Home() {
  // Gerencia o estado do filme e sessão para disparar atualizações na interface
  const [filmeSelecionado, setFilmeSelecionado] = useState<string | null>(null);
  const [sessaoEscolhida, setSessaoEscolhida] = useState<string | null>(null);

  // Fonte de dados centralizada para renderização dinâmica (map)
  const filmes = [
    { id: 1, nome: "A Sociedade do Anel", img: "/img/cartaz-filme-1.webp" },
    { id: 2, nome: "As Duas Torres", img: "/img/cartaz-filme-2.webp" },
    { id: 3, nome: "O Retorno do Rei", img: "/img/cartaz-filme-3.webp" },
  ];

  const sessoes = ["Às 14:00 - Dublado", "Às 17:30 - Legendado", "Às 21:00 - Legendado"];

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col">
      <nav className="p-4 bg-black/40 border-b border-white/10 flex justify-between items-center">
        <h1 className="text-xl font-black text-[#d4af37] tracking-tighter">CINE MILLENIUM</h1>
        <span className="text-[10px] uppercase tracking-widest text-gray-400">Trilogia O Senhor dos Anéis</span>
      </nav>

      {/* Grid com espaçamento fixo para evitar saltos de layout (CLS) no Lighthouse */}
      <main className="flex-grow flex items-center justify-center p-8">
        <div className="grid grid-cols-3 gap-16">
          {filmes.map((filme) => (
            <article
              key={filme.id}
              onClick={() => setFilmeSelecionado(filme.nome)} // Abre o modal ao selecionar o filme
              className="w-[210px] cursor-pointer group flex flex-col items-center bg-[#1e293b]/30 p-6 rounded-[2rem] border border-white/5 shadow-2xl transition-all hover:bg-[#1e293b]/60 hover:border-[#d4af37]/40"
            >
              {/* Proporção aspect-ratio reserva o espaço da imagem antes do download (Performance) */}
              <div className="relative aspect-[2/3] w-full mb-5 overflow-hidden rounded-2xl border border-white/10 shadow-lg transition-all group-hover:scale-105">
                <Image
                  src={filme.img} 
                  alt={filme.nome}
                  fill 
                  className="object-cover"
                  sizes="210px" // Ajuda o navegador a escolher a resolução correta
                  priority={filme.id === 1} // Prioriza a primeira imagem para otimizar o LCP (Largest Contentful Paint)
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-[10px] font-bold bg-[#d4af37] text-black px-4 py-2 rounded-full tracking-widest">ESCOLHER SESSÃO</span>
                </div>
              </div>

              <h2 className="text-[13px] font-bold text-center leading-tight text-gray-400 group-hover:text-white transition-colors px-2">
                {filme.nome}
              </h2>
            </article>
          ))}
        </div>
      </main>

      {/* Modal renderizado condicionalmente para manter o DOM leve */}
      {filmeSelecionado && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
          <div className="bg-[#1e293b] p-8 rounded-3xl max-w-sm w-full border border-white/10 shadow-2xl">
            <h2 className="text-lg font-bold mb-1 text-center">Horários Disponíveis</h2>
            <p className="text-[#d4af37] text-xs mb-6 text-center font-medium uppercase tracking-wider">{filmeSelecionado}</p>

            <div className="space-y-3 mb-8">
              {sessoes.map((sessao) => (
                <button
                  key={sessao}
                  onClick={() => setSessaoEscolhida(sessao)}
                  className={`w-full py-3 rounded-xl text-xs font-bold transition-all ${
                    sessaoEscolhida === sessao
                      ? "bg-[#d4af37] text-black shadow-lg shadow-[#d4af37]/20" 
                      : "bg-gray-800/50 hover:bg-gray-700 text-gray-300"
                  }`}
                >
                  {sessao}
                </button>
              ))}
            </div>

            <div className="flex gap-4">
              {/* Reseta os estados para fechar o modal e limpar seleções anteriores */}
              <button
                onClick={() => { setFilmeSelecionado(null); setSessaoEscolhida(null); }}
                className="flex-1 py-3 bg-red-600/20 text-red-500 rounded-xl text-xs font-black hover:bg-red-600 hover:text-white transition-all border border-red-600/30"
              >
                CANCELAR
              </button>
              <button
                disabled={!sessaoEscolhida} // UX: Impede o envio sem dados selecionados
                onClick={() => { 
                  alert(`Reserva confirmada para ${filmeSelecionado}!\nSessão: ${sessaoEscolhida}`); 
                  setFilmeSelecionado(null); 
                  setSessaoEscolhida(null); 
                }}
                className="flex-1 py-3 bg-emerald-600 text-white rounded-xl text-xs font-black disabled:opacity-20 transition-all hover:bg-emerald-500"
              >
                CONFIRMAR
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}