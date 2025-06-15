'use client';
import { ChevronDown, ChevronUp, Dot } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  SyntheticEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { MenuItemProps, SubmenuItemProps } from '@/data/menu';

export function NavigationMenuItem({
  id,
  label,
  href,
  icon: Icon,
  submenu,
}: MenuItemProps) {
  const [isActive, setIsActive] = useState(false);
  const [submenuIsOpen, setSubmenuIsOpen] = useState(isActive);
  const [submenuItems, setSubmenuItems] = useState<
    SubmenuItemProps[] | undefined
  >([]);
  const pathname = usePathname();
  const menuContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsActive(pathname.startsWith(href));
    setSubmenuIsOpen(pathname.startsWith(href));
  }, [pathname, href]);

  useEffect(() => {
    const navItems = submenu ? submenu : undefined;

    setSubmenuItems(navItems);
  }, [submenu]);

  const handleClick = useCallback((event: SyntheticEvent, push: boolean) => {
    if (!push) {
      event.preventDefault();

      if (menuContainer.current) {
        const submenu = menuContainer.current.querySelector('ul');

        if (menuContainer.current.clientHeight) {
          menuContainer.current.style.height = '0';
          setSubmenuIsOpen(false);
        } else {
          if (submenu) {
            menuContainer.current.style.height = `${
              submenu.offsetHeight + 2
            }px`;
          }
          setSubmenuIsOpen(true);
        }
      }
    }
  }, []);

  return (
    <div data-active={isActive} className="rounded">
      <Link
        href={href}
        data-active={isActive}
        className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground data-[active=true]:bg-sidebar-primary data-[active=true]:text-sidebar-primary-foreground text-sidebar-foreground/80 relative flex h-10 w-full items-center gap-3 rounded px-4 text-sm font-medium transition duration-200 xl:px-6"
        prefetch={false}
        onClick={(evt) => handleClick(evt, !submenu)}
      >
        <div className="flex flex-1 gap-3">
          <Icon size={18} />
          {label}
        </div>
        {submenu && (
          <span className="pl-2">
            {submenu &&
              (submenuIsOpen ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              ))}
          </span>
        )}
      </Link>
      {submenuItems && (
        <div
          data-is-open={submenuIsOpen}
          className="overflow-hidden px-6 duration-500 data-[is-open=false]:h-0"
          ref={menuContainer}
        >
          <ul className="mt-1 flex flex-col gap-[0.125rem] pt-1 pb-2">
            {submenuItems.map((link) => (
              <li key={`${id}.${link.id}`} className="text-sm">
                <Link
                  href={link.href}
                  prefetch={false}
                  className="text-sidebar-foreground/60 hover:text-sidebar-primary flex items-center gap-3 font-medium"
                >
                  <Dot size={18} />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
