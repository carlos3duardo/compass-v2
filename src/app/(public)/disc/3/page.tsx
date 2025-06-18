'use client';
import React, { useState } from 'react';

interface CompanyFormData {
  companyName: string;
  email: string;
  responsibleName: string;
  businessSector: string;
}

const DISCLandingPage: React.FC = () => {
  const [companyForm, setCompanyForm] = useState<CompanyFormData>({
    companyName: '',
    email: '',
    responsibleName: '',
    businessSector: '',
  });

  const handleCompanyFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setCompanyForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCompanySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados da empresa:', companyForm);
    // Aqui você implementaria a lógica para gerar o link
    alert('Link gerado com sucesso! Verifique seu email.');
  };

  const handleIndividualTest = () => {
    // Redirecionar para o teste individual
    console.log('Redirecionando para teste individual');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                <span className="text-xl font-bold text-white">D</span>
              </div>
              <span className="ml-3 text-2xl font-bold text-gray-900">
                DISC360
              </span>
            </div>
            <nav className="hidden space-x-8 md:flex">
              <a
                href="#como-funciona"
                className="text-gray-600 transition-colors hover:text-blue-600"
              >
                Como Funciona
              </a>
              <a
                href="#vantagens"
                className="text-gray-600 transition-colors hover:text-blue-600"
              >
                Vantagens
              </a>
              <a
                href="#perfis"
                className="text-gray-600 transition-colors hover:text-blue-600"
              >
                Perfis DISC
              </a>
              <a
                href="#contato"
                className="text-gray-600 transition-colors hover:text-blue-600"
              >
                Contato
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 text-5xl font-bold text-gray-900">
            Avaliação DISC para <span className="text-blue-600">Empresas</span>{' '}
            e <span className="text-blue-600">Indivíduos</span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-600">
            Descubra o potencial do seu time ou entenda melhor seu próprio
            perfil comportamental com o teste DISC. Resultados rápidos,
            relatórios completos e insights práticos para o desenvolvimento
            profissional.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button
              onClick={handleIndividualTest}
              className="rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Fazer Teste Individual
            </button>
            <a
              href="#empresa"
              className="rounded-lg border-2 border-blue-600 bg-white px-8 py-3 font-semibold text-blue-600 transition-colors hover:bg-blue-50"
            >
              Para Empresas
            </a>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="como-funciona" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Como Funciona?
          </h2>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                step: '1',
                title: 'Escolha o tipo',
                desc: 'Para você ou sua empresa',
              },
              {
                step: '2',
                title: 'Preencha os dados',
                desc: 'Informações básicas',
              },
              {
                step: '3',
                title: 'Receba o link',
                desc: 'Link exclusivo do teste',
              },
              {
                step: '4',
                title: 'Veja os resultados',
                desc: 'Relatórios detalhados',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section id="vantagens" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Vantagens para sua Empresa
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: '💬',
                title: 'Comunicação',
                desc: 'Melhore a comunicação interna',
              },
              {
                icon: '🤝',
                title: 'Trabalho em Equipe',
                desc: 'Potencialize a colaboração',
              },
              {
                icon: '🎯',
                title: 'Identificação de Talentos',
                desc: 'Descubra perfis de liderança',
              },
              {
                icon: '📈',
                title: 'Produtividade',
                desc: 'Reduza conflitos e aumente resultados',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-lg bg-white p-6 text-center shadow-sm"
              >
                <div className="mb-4 text-4xl">{item.icon}</div>
                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perfis DISC */}
      <section id="perfis" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Perfis DISC
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                letter: 'D',
                title: 'Dominância',
                desc: 'Foco em resultados, assertivo, gosta de desafios.',
                color: 'bg-red-500',
                bgColor: 'bg-red-50',
              },
              {
                letter: 'I',
                title: 'Influência',
                desc: 'Comunicativo, entusiasta, motiva e engaja pessoas.',
                color: 'bg-yellow-500',
                bgColor: 'bg-yellow-50',
              },
              {
                letter: 'S',
                title: 'Estabilidade',
                desc: 'Colaborativo, paciente, valoriza a harmonia no ambiente.',
                color: 'bg-green-500',
                bgColor: 'bg-green-50',
              },
              {
                letter: 'C',
                title: 'Conformidade',
                desc: 'Analítico, detalhista, busca precisão e qualidade.',
                color: 'bg-blue-500',
                bgColor: 'bg-blue-50',
              },
            ].map((profile, index) => (
              <div
                key={index}
                className={`${profile.bgColor} rounded-lg border-2 border-transparent p-6 transition-all hover:border-gray-200`}
              >
                <div
                  className={`h-16 w-16 ${profile.color} mb-4 flex items-center justify-center rounded-full text-2xl font-bold text-white`}
                >
                  {profile.letter}
                </div>
                <h3 className="mb-2 text-xl font-semibold">{profile.title}</h3>
                <p className="text-gray-600">{profile.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulários */}
      <section id="empresa" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            Faça o Teste Agora
          </h2>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Formulário Empresa */}
            <div className="rounded-lg bg-white p-8 shadow-sm">
              <h3 className="mb-6 text-center text-2xl font-bold">
                Para Empresas
              </h3>
              <form onSubmit={handleCompanySubmit} className="space-y-4">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Nome da Empresa *
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={companyForm.companyName}
                    onChange={handleCompanyFormChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    placeholder="Digite o nome da empresa"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={companyForm.email}
                    onChange={handleCompanyFormChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    placeholder="empresa@exemplo.com"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Nome do Responsável *
                  </label>
                  <input
                    type="text"
                    name="responsibleName"
                    value={companyForm.responsibleName}
                    onChange={handleCompanyFormChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                    placeholder="Nome completo"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Ramo de Atividade *
                  </label>
                  <select
                    name="businessSector"
                    value={companyForm.businessSector}
                    onChange={handleCompanyFormChange}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Selecione o ramo</option>
                    <option value="tecnologia">Tecnologia</option>
                    <option value="saude">Saúde</option>
                    <option value="educacao">Educação</option>
                    <option value="financeiro">Financeiro</option>
                    <option value="varejo">Varejo</option>
                    <option value="industria">Indústria</option>
                    <option value="servicos">Serviços</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
                >
                  Gerar Link para Colaboradores
                </button>
              </form>

              <p className="mt-4 text-center text-sm text-gray-600">
                Após o preenchimento, você receberá um link exclusivo para
                compartilhar com sua equipe.
              </p>
            </div>

            {/* Teste Individual */}
            <div className="flex flex-col items-center justify-center rounded-lg bg-white p-8 text-center shadow-sm">
              <h3 className="mb-6 text-2xl font-bold">Para Indivíduos</h3>
              <p className="mb-8 text-gray-600">
                Descubra seu perfil comportamental e potencialize seu
                desenvolvimento profissional.
              </p>
              <button
                onClick={handleIndividualTest}
                className="rounded-lg bg-green-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-green-700"
              >
                Fazer Teste Individual
              </button>
              <p className="mt-4 text-sm text-gray-500">
                Resultado imediato • Relatório completo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                  <span className="font-bold text-white">D</span>
                </div>
                <span className="ml-2 text-xl font-bold">DISC360</span>
              </div>
              <p className="text-gray-400">
                Transformando pessoas e empresas através do autoconhecimento.
              </p>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">Contato</h4>
              <div className="space-y-2 text-gray-400">
                <p>📱 WhatsApp</p>
                <p>✉️ contato@disc360.com</p>
                <p>💬 Chat Online</p>
              </div>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">Links Úteis</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white">
                  Sobre o DISC
                </a>
                <a href="#" className="block text-gray-400 hover:text-white">
                  FAQ
                </a>
                <a href="#" className="block text-gray-400 hover:text-white">
                  Suporte
                </a>
              </div>
            </div>

            <div>
              <h4 className="mb-4 font-semibold">Legal</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white">
                  Termos de Uso
                </a>
                <a href="#" className="block text-gray-400 hover:text-white">
                  Política de Privacidade
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DISC360. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DISCLandingPage;
