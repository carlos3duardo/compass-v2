import {
  Building,
  HelpCircle,
  History,
  Lock,
  LogOut,
  User,
} from 'lucide-react';

import { DropdownMenu } from '@/components/DropdownMenu';

import { UserAvatar } from '../UserAvatar';

export function UserMenu() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="hover:cursor-pointer" asChild>
        <UserAvatar />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="end">
        <DropdownMenu.Arrow />
        <DropdownMenu.Item>
          <User size={18} /> Meus dados
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <Building size={18} /> Alterar empresa
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <Lock size={18} /> Segurança
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <History size={18} />
          Histórico
        </DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item>
          <HelpCircle size={18} /> Ajuda
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <LogOut size={18} /> Sair
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
