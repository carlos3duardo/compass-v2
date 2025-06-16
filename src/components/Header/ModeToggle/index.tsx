'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { DropdownMenu } from '../../DropdownMenu';

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="text-foreground hover:bg-foreground/10 dark:hover:bg-foreground/20 flex h-8 w-8 items-center justify-center rounded transition hover:cursor-pointer">
          <Sun className="h-4 w-4 dark:hidden" />
          <Moon className="hidden h-4 w-4 dark:block" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="end">
        <DropdownMenu.Item onClick={() => setTheme('light')}>
          Claro
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => setTheme('dark')}>
          Escuro
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => setTheme('system')}>
          Sistema
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
