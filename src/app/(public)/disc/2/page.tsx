'use client';
import React, { useState } from 'react';

type CompanyForm = {
  companyName: string;
  email: string;
  responsible: string;
  sector: string;
};

const DISC_PROFILES = [
  {
    name: 'Dominância (D)',
    color: 'bg-red-100 border-red-400',
    icon: '🔥',
    desc: 'Foco em resultados, assertivo, gosta de desafios.',
  },
  {
    name: 'Influência (I)',
    color: 'bg-yellow-100 border-yellow-400',
    icon: '💡',
    desc: 'Comunicativo, entusiasta, motiva e engaja pessoas.',
  },
  {
    name: 'Estabilidade (S)',
    color: 'bg-green-100 border-green-400',
    icon: '🌱',
    desc: 'Colaborativo, paciente, valoriza a harmonia no ambiente.',
  },
  {
    name: 'Conformidade (C)',
    color: 'bg-blue-100 border-blue-400',
    icon: '📊',
    desc: 'Analítico, detalhista, busca precisão e qualidade.',
  },
];

export default function LandingPage() {
  const [form, setForm] = useState<CompanyForm>({
    companyName: '',
    email: '',
    responsible: '',
    sector: '',
  });
  const [formSent, setFormSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode integrar com sua API ou serviço de formulário
    setFormSent(true);
  };

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="flex w-full items-center justify-between bg-white px-4 py-6 shadow-sm">
        <div className="text-2xl font-bold text-blue-700">DISC360</div>
        <a
          href="#contato"
          className="font-medium text-blue-600 hover:underline"
        >
          Fale conosco
        </a>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center px-4 py-16 text-center">
        <h1 className="mb-4 text-4xl font-extrabold text-gray-800 md:text-5xl">
          Avaliação DISC para Empresas e Indivíduos
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-gray-600 md:text-xl">
          Descubra o potencial do seu time ou entenda melhor seu próprio perfil
          comportamental com o teste DISC. Resultados rápidos, relatórios
          completos e insights práticos para o desenvolvimento profissional.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#empresa"
            className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white shadow transition hover:bg-blue-700"
          >
            Para Empresas
          </a>
          <a
            href="#individual"
            className="rounded-lg bg-green-500 px-8 py-3 font-semibold text-white shadow transition hover:bg-green-600"
          >
            Teste Individual
          </a>
        </div>
      </section>

      {/* Vantagens */}
      <section className="bg-white px-4 py-12">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-800">
          Vantagens para sua empresa
        </h2>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-lg border-l-4 border-blue-400 bg-blue-50 p-6 shadow">
            <h3 className="mb-2 font-semibold text-blue-700">Comunicação</h3>
            <p className="text-gray-600">
              Melhore a comunicação interna e reduza ruídos entre equipes.
            </p>
          </div>
          <div className="rounded-lg border-l-4 border-green-400 bg-green-50 p-6 shadow">
            <h3 className="mb-2 font-semibold text-green-700">Produtividade</h3>
            <p className="text-gray-600">
              Aumente a produtividade e o engajamento dos colaboradores.
            </p>
          </div>
          <div className="rounded-lg border-l-4 border-yellow-400 bg-yellow-50 p-6 shadow">
            <h3 className="mb-2 font-semibold text-yellow-700">Liderança</h3>
            <p className="text-gray-600">
              Identifique talentos e perfis de liderança no seu time.
            </p>
          </div>
        </div>
      </section>

      {/* Perfis DISC */}
      <section className="px-4 py-12">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-800">
          Perfis DISC
        </h2>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-4">
          {DISC_PROFILES.map((profile) => (
            <div
              key={profile.name}
              className={`border-2 ${profile.color} flex flex-col items-center rounded-xl p-6 shadow`}
            >
              <div className="mb-2 text-4xl">{profile.icon}</div>
              <h3 className="mb-1 text-lg font-semibold">{profile.name}</h3>
              <p className="text-center text-gray-600">{profile.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Formulário para Empresas */}
      <section id="empresa" className="bg-white px-4 py-12">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Para Empresas
        </h2>
        <div className="mx-auto max-w-md rounded-xl bg-gray-50 p-8 shadow">
          {formSent ? (
            <div className="text-center font-semibold text-green-600">
              Link gerado! Compartilhe com seus colaboradores para realizar o
              teste. <br />
              (Aqui você pode exibir o link gerado ou instruções)
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="companyName"
                placeholder="Nome da empresa"
                value={form.companyName}
                onChange={handleChange}
                required
                className="rounded border px-4 py-2"
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={form.email}
                onChange={handleChange}
                required
                className="rounded border px-4 py-2"
              />
              <input
                type="text"
                name="responsible"
                placeholder="Nome do responsável"
                value={form.responsible}
                onChange={handleChange}
                required
                className="rounded border px-4 py-2"
              />
              <input
                type="text"
                name="sector"
                placeholder="Ramo de atividade"
                value={form.sector}
                onChange={handleChange}
                required
                className="rounded border px-4 py-2"
              />
              <button
                type="submit"
                className="mt-2 rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Gerar link para colaboradores
              </button>
            </form>
          )}
          <p className="mt-4 text-center text-xs text-gray-500">
            Após o preenchimento, você receberá um link exclusivo para
            compartilhar com sua equipe. Cada colaborador receberá seu relatório
            individual, e você terá acesso ao panorama completo do time.
          </p>
        </div>
      </section>

      {/* Teste Individual */}
      <section id="individual" className="px-4 py-12">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Para Indivíduos
        </h2>
        <div className="flex justify-center">
          <a
            href="/teste-individual"
            className="rounded-lg bg-green-500 px-8 py-3 font-semibold text-white shadow transition hover:bg-green-600"
          >
            Fazer teste individual
          </a>
        </div>
      </section>

      {/* Contato e Rodapé */}
      <footer id="contato" className="mt-auto bg-gray-100 px-4 py-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-sm text-gray-600">
            © 2024 DISC360. Todos os direitos reservados.
          </div>
          <div className="flex gap-4">
            <a
              href="mailto:contato@disc360.com"
              className="text-blue-600 hover:underline"
            >
              contato@disc360.com
            </a>
            <a
              href="https://wa.me/5599999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:underline"
            >
              WhatsApp
            </a>
            <a href="#" className="text-blue-600 hover:underline">
              Chat Online
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
