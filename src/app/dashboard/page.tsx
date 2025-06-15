import { Metadata } from 'next';
import Link from 'next/link';

import { ModeToggle, Notifications } from '@/components';
import { UserMenu } from '@/components/Header/UserMenu';

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default function DashboardPage() {
  return (
    <div className="flex min-h-dvh items-stretch">
      <aside className="fixed top-0 bottom-0 hidden flex-col gap-2 bg-white pb-4 shadow lg:flex lg:w-[240px] xl:w-[260px] 2xl:w-[300px] dark:bg-slate-900 dark:shadow-none"></aside>
      <div className="bg-background relative flex flex-1 flex-col justify-between gap-2 lg:ml-[240px] xl:ml-[260px] 2xl:ml-[300px]">
        <header className="sticky top-0 right-0 left-0 flex h-20 items-center justify-between gap-4 px-8 shadow-lg ring-1 ring-black/5">
          <div className="bg-background/85 absolute top-0 right-0 bottom-0 left-0 backdrop-blur-[6px]" />
          <div className="relative flex w-full items-center justify-between">
            <div>
              <h1 className="text-foreground text-xl font-semibold">
                Olá, Usuário.
              </h1>
              <p className="text-foreground/60 text-sm font-medium">
                Frase motivacional ou de boas-vindas aqui.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div role="menu" className="flex items-center gap-1 rounded p-1">
                <Notifications />
                <ModeToggle />
              </div>
              <UserMenu />
            </div>
          </div>
        </header>
        <main className="flex-1 px-8">
          <p>
            Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis,
            eu reclamis. Leite de capivaris, leite de mula manquis sem cabeça.
            Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus
            tristique interdum. Suco de cevadiss deixa as pessoas mais
            interessantis.
          </p>
          <p>
            Praesent vel viverra nisi. Mauris aliquet nunc non turpis
            scelerisque, eget. Manduma pindureta quium dia nois paga.
            Casamentiss faiz malandris se pirulitá. Nullam volutpat risus nec
            leo commodo, ut interdum diam laoreet. Sed non consequat odio.
          </p>
          <p>
            Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis
            e fermentis. Quem manda na minha terra sou euzis! Quem num gosta di
            mé, boa gentis num é. Negão é teu passadis, eu sou faxa pretis.
          </p>
          <p>
            Pellentesque nec nulla ligula. Donec gravida turpis a vulputate
            ultricies. Bota 1 metro de cachacis aí pra viagem! Tá deprimidis, eu
            conheço uma cachacis que pode alegrar sua vidis. Interessantiss
            quisso pudia ce receita de bolis, mais bolis eu num gostis.
          </p>
          <p>
            Copo furadis é disculpa de bebadis, arcu quam euismod magna. Suco de
            cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e
            fermentis. Suco de cevadiss deixa as pessoas mais interessantis.
            Admodum accumsan disputationi eu sit. Vide electram sadipscing et
            per.
          </p>
          <p>
            Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam
            vulputate dapibus. Atirei o pau no gatis, per gatis num morreus.
            Cevadis im ampola pa arma uma pindureta. Aenean aliquam molestie
            leo, vitae iaculis nisl.
          </p>
          <p>
            Mé faiz elementum girarzis, nisi eros vermeio. Aenean aliquam
            molestie leo, vitae iaculis nisl. Tá deprimidis, eu conheço uma
            cachacis que pode alegrar sua vidis. Negão é teu passadis, eu sou
            faxa pretis.
          </p>
          <p>
            Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis,
            eu reclamis. Leite de capivaris, leite de mula manquis sem cabeça.
            Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus
            tristique interdum. Suco de cevadiss deixa as pessoas mais
            interessantis.
          </p>
          <p>
            Praesent vel viverra nisi. Mauris aliquet nunc non turpis
            scelerisque, eget. Manduma pindureta quium dia nois paga.
            Casamentiss faiz malandris se pirulitá. Nullam volutpat risus nec
            leo commodo, ut interdum diam laoreet. Sed non consequat odio.
          </p>
          <p>
            Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis
            e fermentis. Quem manda na minha terra sou euzis! Quem num gosta di
            mé, boa gentis num é. Negão é teu passadis, eu sou faxa pretis.
          </p>
          <p>
            Pellentesque nec nulla ligula. Donec gravida turpis a vulputate
            ultricies. Bota 1 metro de cachacis aí pra viagem! Tá deprimidis, eu
            conheço uma cachacis que pode alegrar sua vidis. Interessantiss
            quisso pudia ce receita de bolis, mais bolis eu num gostis.
          </p>
          <p>
            Copo furadis é disculpa de bebadis, arcu quam euismod magna. Suco de
            cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e
            fermentis. Suco de cevadiss deixa as pessoas mais interessantis.
            Admodum accumsan disputationi eu sit. Vide electram sadipscing et
            per.
          </p>
          <p>
            Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam
            vulputate dapibus. Atirei o pau no gatis, per gatis num morreus.
            Cevadis im ampola pa arma uma pindureta. Aenean aliquam molestie
            leo, vitae iaculis nisl.
          </p>
          <p>
            Mé faiz elementum girarzis, nisi eros vermeio. Aenean aliquam
            molestie leo, vitae iaculis nisl. Tá deprimidis, eu conheço uma
            cachacis que pode alegrar sua vidis. Negão é teu passadis, eu sou
            faxa pretis.
          </p>
          <p>
            Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis,
            eu reclamis. Leite de capivaris, leite de mula manquis sem cabeça.
            Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus
            tristique interdum. Suco de cevadiss deixa as pessoas mais
            interessantis.
          </p>
          <p>
            Praesent vel viverra nisi. Mauris aliquet nunc non turpis
            scelerisque, eget. Manduma pindureta quium dia nois paga.
            Casamentiss faiz malandris se pirulitá. Nullam volutpat risus nec
            leo commodo, ut interdum diam laoreet. Sed non consequat odio.
          </p>
          <p>
            Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis
            e fermentis. Quem manda na minha terra sou euzis! Quem num gosta di
            mé, boa gentis num é. Negão é teu passadis, eu sou faxa pretis.
          </p>
          <p>
            Pellentesque nec nulla ligula. Donec gravida turpis a vulputate
            ultricies. Bota 1 metro de cachacis aí pra viagem! Tá deprimidis, eu
            conheço uma cachacis que pode alegrar sua vidis. Interessantiss
            quisso pudia ce receita de bolis, mais bolis eu num gostis.
          </p>
          <p>
            Copo furadis é disculpa de bebadis, arcu quam euismod magna. Suco de
            cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e
            fermentis. Suco de cevadiss deixa as pessoas mais interessantis.
            Admodum accumsan disputationi eu sit. Vide electram sadipscing et
            per.
          </p>
          <p>
            Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam
            vulputate dapibus. Atirei o pau no gatis, per gatis num morreus.
            Cevadis im ampola pa arma uma pindureta. Aenean aliquam molestie
            leo, vitae iaculis nisl.
          </p>
          <p>
            Mé faiz elementum girarzis, nisi eros vermeio. Aenean aliquam
            molestie leo, vitae iaculis nisl. Tá deprimidis, eu conheço uma
            cachacis que pode alegrar sua vidis. Negão é teu passadis, eu sou
            faxa pretis.
          </p>
          <p>
            Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis,
            eu reclamis. Leite de capivaris, leite de mula manquis sem cabeça.
            Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus
            tristique interdum. Suco de cevadiss deixa as pessoas mais
            interessantis.
          </p>
          <p>
            Praesent vel viverra nisi. Mauris aliquet nunc non turpis
            scelerisque, eget. Manduma pindureta quium dia nois paga.
            Casamentiss faiz malandris se pirulitá. Nullam volutpat risus nec
            leo commodo, ut interdum diam laoreet. Sed non consequat odio.
          </p>
          <p>
            Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis
            e fermentis. Quem manda na minha terra sou euzis! Quem num gosta di
            mé, boa gentis num é. Negão é teu passadis, eu sou faxa pretis.
          </p>
          <p>
            Pellentesque nec nulla ligula. Donec gravida turpis a vulputate
            ultricies. Bota 1 metro de cachacis aí pra viagem! Tá deprimidis, eu
            conheço uma cachacis que pode alegrar sua vidis. Interessantiss
            quisso pudia ce receita de bolis, mais bolis eu num gostis.
          </p>
          <p>
            Copo furadis é disculpa de bebadis, arcu quam euismod magna. Suco de
            cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e
            fermentis. Suco de cevadiss deixa as pessoas mais interessantis.
            Admodum accumsan disputationi eu sit. Vide electram sadipscing et
            per.
          </p>
          <p>
            Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam
            vulputate dapibus. Atirei o pau no gatis, per gatis num morreus.
            Cevadis im ampola pa arma uma pindureta. Aenean aliquam molestie
            leo, vitae iaculis nisl.
          </p>
          <p>
            Mé faiz elementum girarzis, nisi eros vermeio. Aenean aliquam
            molestie leo, vitae iaculis nisl. Tá deprimidis, eu conheço uma
            cachacis que pode alegrar sua vidis. Negão é teu passadis, eu sou
            faxa pretis.
          </p>
          <p>
            Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis,
            eu reclamis. Leite de capivaris, leite de mula manquis sem cabeça.
            Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus
            tristique interdum. Suco de cevadiss deixa as pessoas mais
            interessantis.
          </p>
          <p>
            Praesent vel viverra nisi. Mauris aliquet nunc non turpis
            scelerisque, eget. Manduma pindureta quium dia nois paga.
            Casamentiss faiz malandris se pirulitá. Nullam volutpat risus nec
            leo commodo, ut interdum diam laoreet. Sed non consequat odio.
          </p>
          <p>
            Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis
            e fermentis. Quem manda na minha terra sou euzis! Quem num gosta di
            mé, boa gentis num é. Negão é teu passadis, eu sou faxa pretis.
          </p>
          <p>
            Pellentesque nec nulla ligula. Donec gravida turpis a vulputate
            ultricies. Bota 1 metro de cachacis aí pra viagem! Tá deprimidis, eu
            conheço uma cachacis que pode alegrar sua vidis. Interessantiss
            quisso pudia ce receita de bolis, mais bolis eu num gostis.
          </p>
          <p>
            Copo furadis é disculpa de bebadis, arcu quam euismod magna. Suco de
            cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e
            fermentis. Suco de cevadiss deixa as pessoas mais interessantis.
            Admodum accumsan disputationi eu sit. Vide electram sadipscing et
            per.
          </p>
          <p>
            Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam
            vulputate dapibus. Atirei o pau no gatis, per gatis num morreus.
            Cevadis im ampola pa arma uma pindureta. Aenean aliquam molestie
            leo, vitae iaculis nisl.
          </p>
          <p>
            Mé faiz elementum girarzis, nisi eros vermeio. Aenean aliquam
            molestie leo, vitae iaculis nisl. Tá deprimidis, eu conheço uma
            cachacis que pode alegrar sua vidis. Negão é teu passadis, eu sou
            faxa pretis.
          </p>
        </main>
        <footer className="flex h-12 items-center justify-between px-8 text-sm font-medium text-slate-400">
          <div>
            {new Date().getFullYear()} &copy; Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4">
            <Link href="#">Termos de uso</Link>
            <Link href="#">Política de privacidade</Link>
            <Link href="#">Dev</Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
