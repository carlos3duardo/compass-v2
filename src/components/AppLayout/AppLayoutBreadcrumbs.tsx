import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

type BreadcrumbProps = {
  label: string;
  href?: string;
};

interface ComponentProps {
  breadcrumbs: BreadcrumbProps[];
}

export function AppLayoutBreadcrumbs({ breadcrumbs }: ComponentProps) {
  return (
    <div className="flex items-center text-sm font-medium text-slate-400">
      {breadcrumbs.map((breadcrumb, index) => {
        return (
          <div
            className="flex items-center"
            key={`${breadcrumb.label}.${index}`}
          >
            {breadcrumb.href ? (
              <Link href={breadcrumb.href} className="text-slate-400">
                {breadcrumb.label}
              </Link>
            ) : (
              <span>{breadcrumb.label}</span>
            )}

            {index < breadcrumbs.length - 1 && <ChevronRight size={16} />}
          </div>
        );
      })}
    </div>
  );
}
