import { twMerge } from 'tailwind-merge';

export default function ScreenSizeViewer() {
  const env = process.env.APP_ENV;

  if (env === 'production') {
    return null;
  }

  const defaultStyle =
    'hidden items-center rounded-md bg-muted px-2 py-1 text-xs uppercase font-medium text-muted-foreground';
  return (
    <div>
      <span className={twMerge(defaultStyle, 'block md:hidden')}>sm</span>
      <span className={twMerge(defaultStyle, 'md:block lg:hidden')}>md</span>
      <span className={twMerge(defaultStyle, 'lg:block xl:hidden')}>lg</span>
      <span className={twMerge(defaultStyle, 'xl:block 2xl:hidden')}>xl</span>
      <span className={twMerge(defaultStyle, '2xl:block')}>2xl</span>
    </div>
  );
}
