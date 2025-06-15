'use client';

import { Bell } from 'lucide-react';

import { Popover } from '@/components/Popover';

export function Notifications() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="text-foreground hover:bg-foreground/10 dark:hover:bg-foreground/20 flex h-8 w-8 items-center justify-center rounded transition hover:cursor-pointer">
          <Bell className="h-4 w-4" />
        </button>
      </Popover.Trigger>
      <Popover.Content className="w-80 p-4">
        <div className="text-muted-foreground text-sm">
          Você não tem notificações no momento.
        </div>
      </Popover.Content>
    </Popover.Root>
  );
}
