'use client';

import { Check, Paintbrush } from 'lucide-react';
import { useCallback, useState } from 'react';

import { Button } from '@/components/shadcn/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/shadcn/ui/dropdown-menu';

const themes = [
  {
    value: 'default',
    label: 'Tema padrão',
    color: 'oklch(0.705 0.213 47.604)',
  },
  {
    value: 'caffeine',
    label: 'Cafeína',
    color: 'oklch(0.4341 0.0392 41.9938)',
  },
  {
    value: 'candyland',
    label: 'Candyland',
    color: 'oklch(0.8677 0.0735 7.0855)',
  },
  {
    value: 'claude',
    label: 'Claude',
    color: 'oklch(0.6171 0.1375 39.0427)',
  },
  {
    value: 'cosmic-night',
    label: 'Cosmic Night',
    color: 'oklch(0.5417 0.179 288.0332)',
  },
  {
    value: 'cyberpunk',
    label: 'Cyberpunk',
    color: 'oklch(0.6726 0.2904 341.4084)',
  },
  {
    value: 'doom64',
    label: 'Doom64',
    color: 'oklch(0.5016 0.1887 27.4816)',
  },
  {
    value: 'solar-dusk',
    label: 'Solar Dusk',
    color: 'oklch(0.5553 0.1455 48.9975)',
  },
  {
    value: 'sunset-horizon',
    label: 'Sunset Horizon',
    color: 'oklch(0.7357 0.1641 34.7091)',
  },
  {
    value: 'tangerine',
    label: 'Tangerine',
    color: 'oklch(0.6397 0.172 36.4421)',
  },
] as const;

export function ThemeToggle() {
  const [currentTheme, setCurrentTheme] = useState<string>(() => {
    if (typeof document === 'undefined') {
      return 'default';
    }
    return document && document.documentElement.dataset.colorTheme
      ? document.documentElement.dataset.colorTheme
      : 'default';
  });
  const handleThemeChange = useCallback((themeValue: string) => {
    document.documentElement.dataset.colorTheme = themeValue;
    setCurrentTheme(themeValue);
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Paintbrush className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((theme) => (
          <DropdownMenuItem
            key={theme.value}
            onClick={() => handleThemeChange(theme.value)}
            className="flex items-center gap-2 text-sm font-medium"
          >
            <span
              className="block h-4 w-4 rounded-full bg-slate-200"
              style={{ backgroundColor: theme.color }}
              aria-hidden="true"
            />
            {theme.label}
            {theme.value === currentTheme && <Check />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
