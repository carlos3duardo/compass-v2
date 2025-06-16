import { primaryMenu, secondaryMenu } from '@/data';

import { NavigationMenu } from '../NavigatioMenu/NavigationMenu';
import { CompanyLogo } from './CompanyLogo';

export function AppLayoutSidebar() {
  return (
    <aside className="bg-sidebar border-r-sidebar-border fixed top-0 bottom-0 hidden flex-col gap-2 border-r lg:flex lg:w-[240px] xl:w-[260px] 2xl:w-[300px]">
      <header className="flex h-24 items-stretch justify-center px-14 py-3">
        <CompanyLogo />
      </header>
      <div className="scrollbar scrollbar-w-1 scrollbar-thumb-slate-400 scrollbar-track-white mb-2 flex flex-1 flex-col justify-between overflow-y-auto">
        <NavigationMenu menu={primaryMenu} />
        <NavigationMenu menu={secondaryMenu} />
      </div>
    </aside>
  );
}
