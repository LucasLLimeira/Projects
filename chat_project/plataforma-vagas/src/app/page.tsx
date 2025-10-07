export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h1 className="text-4xl font-bold mb-4">Bem-vindo à Plataforma de Vagas</h1>
      <p className="text-lg text-gray-700 mb-6">
        Candidate-se às vagas ou publique oportunidades para sua empresa.
      </p>
      <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
        Ver Vagas
      </button>
    </div>
  );
}