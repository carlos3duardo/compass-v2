import { LoaderCircle } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

interface InputSkeletonProps {
  className?: string;
}

export default function InputSkeleton({ className = '' }: InputSkeletonProps) {
  return (
    <div
      className={twMerge(
        'relative flex h-10 w-full animate-pulse items-center justify-between rounded-md border border-slate-300 bg-slate-100 px-2 transition duration-200 data-[size=lg]:h-12 data-[size=lg]:px-3 data-[size=sm]:h-8 data-[size=xs]:h-6 dark:border-white/10 dark:bg-white/5',
        className,
      )}
    >
      <span className="text-sm font-medium">Carregando...</span>
      <LoaderCircle className="animate-spin" />
    </div>
  );
}
