export default function CineMillenium() {
  const filmesEmCartaz = [
    { id: 1, titulo: "O Senhor dos Anéis: A Sociedade do Anel" },
    { id: 2, titulo: "O Senhor dos Anéis: As Duas Torres" },
    { id: 3, titulo: "O Senhor dos Anéis: O Retorno do Rei" },
  ];

  return (
    <main className="min-h-screen bg-black text-white p-10 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-10 text-amber-500">CINE MILLENIUM</h1>
      <div className="space-y-4 w-full max-w-md">
        {filmesEmCartaz.map((filme) => (
          <div key={filme.id} className="p-4 border border-amber-900 rounded bg-zinc-900">
            <h2 className="text-xl font-semibold">{filme.titulo}</h2>
            <p className="text-zinc-500 text-sm italic">Sessão Comemorativa 25 Anos</p>
          </div>
        ))}
      </div>
    </main>
  );
}