'use client';
import { Files, Folder, House, LogOut, Settings2, Users } from 'lucide-react';
import { ElementType } from 'react';

export type SubmenuItemProps = {
  id: number;
  label: string;
  href: string;
  permissions?: string;
  free?: boolean;
};

export type MenuItemProps = {
  id: number;
  label: string;
  href: string;
  icon: ElementType;
  isActive?: boolean;
  free?: boolean;
  permissions?: string | string[];
  submenu?: SubmenuItemProps[];
};

export const primaryMenu: MenuItemProps[] = [
  {
    id: 2201,
    label: 'Início',
    href: '/',
    free: true,
    icon: House,
  },
  {
    id: 2203,
    label: 'Cadastro',
    href: '/cadastro',
    icon: Folder,
    free: false,
    submenu: [
      {
        id: 1,
        label: 'Colaboradores',
        href: '/cadastro/colaborador',
      },
      {
        id: 2,
        label: 'Cargos',
        href: '/cadastro/cargo',
      },
      {
        id: 3,
        label: 'Setores',
        href: '/cadastro/setor',
      },
      {
        id: 4,
        label: 'Equipes',
        href: '/cadastro/equipe',
      },
      {
        id: 5,
        label: 'Unidades',
        href: '/cadastro/unidade',
      },
    ],
  },
  {
    id: 2206,
    label: 'Relatórios',
    href: '/relatorio',
    icon: Files,
  },
  {
    id: 2207,
    label: 'Reuniões',
    href: '/reuniao',
    icon: Users,
  },
];

export const secondaryMenu: MenuItemProps[] = [
  {
    id: 4202,
    label: 'Configurações',
    href: '/config',
    free: true,
    icon: Settings2,
  },
  {
    id: 4203,
    label: 'Sair',
    href: '/logout',
    free: true,
    icon: LogOut,
  },
];
