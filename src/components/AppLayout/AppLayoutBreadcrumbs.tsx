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
    <div className="text-foreground/60 flex items-center text-xs font-medium">
      {breadcrumbs.map((breadcrumb, index) => {
        return (
          <div
            className="flex items-center"
            key={`${breadcrumb.label}.${index}`}
          >
            {breadcrumb.href ? (
              <Link
                href={breadcrumb.href}
                className="text-foreground/60 hover:text-primary"
              >
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
