import { ModeToggle, Notifications, UserMenu } from '@/components';

export function AppLayoutHeader() {
  return (
    <header className="sticky top-0 right-0 left-0 flex h-20 items-center justify-between gap-4 px-8">
      <div className="bg-background/85 absolute top-0 right-0 bottom-0 left-0 backdrop-blur-[4px]" />
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
  );
}
