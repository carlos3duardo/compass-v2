// pages/index.tsx (Next.js + TailwindCSS)

import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-6">
        <div className="flex items-center gap-2">
          <Image
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=facearea&w=64&h=64"
            alt="Logo DISC"
            width={48}
            height={48}
            className="rounded-full"
          />
          <span className="text-2xl font-bold text-blue-700">
            DISC Empresas
          </span>
        </div>
        <a
          href="#cadastro"
          className="rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white shadow transition hover:bg-blue-700"
        >
          Comece Agora
        </a>
      </header>

      {/* Hero Section */}
      <section className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-10 px-4 py-16 md:flex-row">
        <div className="flex-1">
          <h1 className="mb-6 text-4xl font-extrabold text-blue-800 md:text-5xl">
            Potencialize sua equipe com o{' '}
            <span className="text-blue-600">Teste DISC</span>
          </h1>
          <p className="mb-8 text-lg text-gray-700">
            Descubra o perfil comportamental dos seus colaboradores, melhore a
            comunicação interna e tome decisões mais assertivas em gestão de
            pessoas.
          </p>
          <ul className="mb-8 space-y-3">
            <li className="flex items-center gap-2">
              <span className="text-xl text-blue-600">✔️</span>
              Relatórios completos e visualização dos resultados em tempo real
            </li>
            <li className="flex items-center gap-2">
              <span className="text-xl text-blue-600">✔️</span>
              Plataforma fácil, rápida e segura
            </li>
            <li className="flex items-center gap-2">
              <span className="text-xl text-blue-600">✔️</span>
              Link exclusivo para sua empresa aplicar o teste
            </li>
          </ul>
          <a
            href="#cadastro"
            className="inline-block rounded-lg bg-blue-600 px-8 py-3 text-lg font-bold text-white shadow transition hover:bg-blue-700"
          >
            Quero aplicar o Teste DISC
          </a>
        </div>
        <div className="flex flex-1 justify-center">
          <Image
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80"
            alt="Equipe colaborando"
            width={480}
            height={360}
            className="rounded-xl shadow-lg"
            priority
          />
        </div>
      </section>

      {/* Benefícios */}
      <section className="bg-white px-4 py-16">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-8 text-3xl font-bold text-blue-800">
            Por que aplicar o DISC na sua empresa?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-blue-50 p-6 shadow transition hover:shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
                alt="Gestão de pessoas"
                width={80}
                height={80}
                className="mx-auto mb-4 rounded-full"
              />
              <h3 className="mb-2 text-lg font-semibold text-blue-700">
                Gestão de Pessoas
              </h3>
              <p className="text-gray-600">
                Identifique talentos, alinhe equipes e desenvolva lideranças com
                base em dados comportamentais.
              </p>
            </div>
            <div className="rounded-lg bg-blue-50 p-6 shadow transition hover:shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80"
                alt="Clima organizacional"
                width={80}
                height={80}
                className="mx-auto mb-4 rounded-full"
              />
              <h3 className="mb-2 text-lg font-semibold text-blue-700">
                Clima Organizacional
              </h3>
              <p className="text-gray-600">
                Melhore a comunicação, reduza conflitos e aumente o engajamento
                dos colaboradores.
              </p>
            </div>
            <div className="rounded-lg bg-blue-50 p-6 shadow transition hover:shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1515168833906-d2a3b82b3029?auto=format&fit=crop&w=400&q=80"
                alt="Decisões estratégicas"
                width={80}
                height={80}
                className="mx-auto mb-4 rounded-full"
              />
              <h3 className="mb-2 text-lg font-semibold text-blue-700">
                Decisões Estratégicas
              </h3>
              <p className="text-gray-600">
                Tenha informações valiosas para processos de seleção, promoção e
                desenvolvimento de equipes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        id="cadastro"
        className="bg-gradient-to-r from-blue-600 to-blue-400 px-4 py-20"
      >
        <div className="mx-auto max-w-3xl text-center text-white">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Pronto para transformar sua equipe?
          </h2>
          <p className="mb-8 text-lg">
            Cadastre sua empresa e comece agora mesmo a aplicar o Teste DISC nos
            seus colaboradores!
          </p>
          <a
            href="/cadastro"
            className="inline-block rounded-lg bg-white px-10 py-4 text-lg font-bold text-blue-700 shadow transition hover:bg-blue-100"
          >
            Cadastrar minha empresa
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-500">
        <div>
          &copy; {new Date().getFullYear()} DISC Empresas. Todos os direitos
          reservados.
        </div>
        <div>
          Dúvidas?{' '}
          <a
            href="mailto:contato@suaempresa.com"
            className="text-blue-600 hover:underline"
          >
            contato@suaempresa.com
          </a>
        </div>
      </footer>
    </main>
  );
}
