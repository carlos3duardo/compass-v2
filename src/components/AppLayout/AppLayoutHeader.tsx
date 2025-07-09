import {
  AppLayout,
  ModeToggle,
  Notifications,
  ScreenSizeViewer,
  UserMenu,
} from '@/components';

type BreadcrumbProps = {
  label: string;
  href?: string;
};

interface AppLayoutHeaderProps {
  title: string;
  description?: string;
  breadcrumbs?: BreadcrumbProps[];
  children?: React.ReactNode;
}

export function AppLayoutHeader({
  title,
  description,
  breadcrumbs,
  children,
}: AppLayoutHeaderProps) {
  return (
    <header className="sticky top-0 right-0 left-0 z-10 flex h-20 items-center justify-between gap-4 px-4 lg:px-6 2xl:px-8">
      <div className="bg-background/85 absolute top-0 right-0 bottom-0 left-0 backdrop-blur-[4px]" />
      <div className="relative flex w-full items-center justify-between">
        <div>
          <h1 className="text-foreground text-xl font-semibold" id="page-title">
            {title}
          </h1>
          {description && (
            <p className="text-foreground/60 text-sm font-medium">
              {description}
            </p>
          )}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <AppLayout.Breadcrumbs breadcrumbs={breadcrumbs} />
          )}
        </div>
        <div className="flex items-center gap-3">
          <div className="px-3">{children}</div>
          <div role="menu" className="flex items-center gap-1 rounded p-1">
            <ScreenSizeViewer />
            <Notifications />
            <ModeToggle />
          </div>
          <UserMenu />
        </div>
      </div>
    </header>
  );
}
