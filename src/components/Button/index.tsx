import { cva, type VariantProps } from 'class-variance-authority';
import { Loader2Icon } from 'lucide-react';
import React, { ComponentProps, ElementType, forwardRef } from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'relative inline-flex items-center justify-center gap-2 hover:cursor-pointer whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[processing=true]:opacity-70',
  {
    variants: {
      variant: {
        solid: 'text-primary-foreground',
        flat: '',
        surface: '',
        outline: '',
        ghost: '',
        plain: '',
      },
      color: {
        primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/90',
        success: 'bg-green-600 text-white hover:bg-green-600/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        warning: 'bg-amber-500 text-white hover:bg-amber-500/90',
        info: 'bg-cyan-500 text-white hover:bg-cyan-500/90',
      },
      size: {
        xs: 'h-6 text-xs font-medium px-3',
        sm: 'h-8 gap-1.5 px-3 has-[>svg]:px-2.5',
        md: 'h-10 px-4 py-2 has-[>svg]:px-3',
        lg: 'h-12 px-6 text-base has-[>svg]:px-4',
        xl: 'h-14 px-6 text-lg has-[>svg]:px-4',
      },
      fullWidth: {
        false: 'inline-flex',
        true: 'flex w-full',
      },
    },
    compoundVariants: [
      // variant outline

      {
        color: 'primary',
        variant: 'outline',
        className:
          'bg-transparent border border-primary text-primary hover:bg-primary/20',
      },
      {
        color: 'secondary',
        variant: 'outline',
        className:
          'bg-transparent border border-secondary text-secondary hover:bg-secondary/20',
      },
      {
        color: 'success',
        variant: 'outline',
        className:
          'bg-transparent border border-green-600 text-green-600 hover:bg-green-600/20',
      },
      {
        color: 'destructive',
        variant: 'outline',
        className:
          'bg-transparent border border-destructive text-destructive hover:bg-destructive/20',
      },
      {
        color: 'warning',
        variant: 'outline',
        className:
          'bg-transparent border border-amber-500 text-amber-500 hover:bg-amber-500/20',
      },
      {
        color: 'info',
        variant: 'outline',
        className:
          'bg-transparent border border-cyan-500 text-cyan-500 hover:bg-cyan-500/20',
      },

      // variant flat

      {
        color: 'primary',
        variant: 'flat',
        className: 'bg-primary/20 text-primary hover:bg-primary/30',
      },
      {
        color: 'secondary',
        variant: 'flat',
        className: 'bg-secondary/20 text-secondary hover:bg-secondary/30',
      },
      {
        color: 'success',
        variant: 'flat',
        className: 'bg-green-600/20 text-green-600 hover:bg-green-600/30',
      },
      {
        color: 'destructive',
        variant: 'flat',
        className: 'bg-destructive/20 text-destructive hover:bg-destructive/30',
      },
      {
        color: 'warning',
        variant: 'flat',
        className: 'bg-amber-600/20 text-amber-600 hover:bg-amber-600/30',
      },
      {
        color: 'info',
        variant: 'flat',
        className: 'bg-cyan-600/20 text-cyan-600 hover:bg-cyan-600/30',
      },

      // variant surface

      {
        color: 'primary',
        variant: 'surface',
        className:
          'bg-primary/20 border border-primary/30 text-primary hover:bg-primary/30',
      },
      {
        color: 'secondary',
        variant: 'surface',
        className:
          'bg-secondary/20 border border-secondary/30 text-secondary hover:bg-secondary/30',
      },
      {
        color: 'success',
        variant: 'surface',
        className:
          'bg-green-600/20 border border-green-600/30 text-green-600 hover:bg-green-600/30',
      },
      {
        color: 'destructive',
        variant: 'surface',
        className:
          'bg-destructive/20 border border-destructive/30 text-destructive hover:bg-destructive/30',
      },
      {
        color: 'warning',
        variant: 'surface',
        className:
          'bg-amber-600/20 border border-amber-600/30 text-amber-600 hover:bg-amber-600/30',
      },
      {
        color: 'info',
        variant: 'surface',
        className:
          'bg-cyan-600/20 border border-cyan-600/30 text-cyan-600 hover:bg-cyan-600/30',
      },

      // variant ghost

      {
        color: 'primary',
        variant: 'ghost',
        className: 'bg-transparent text-primary hover:bg-primary/20',
      },
      {
        color: 'secondary',
        variant: 'ghost',
        className: 'bg-transparent text-secondary hover:bg-secondary/20',
      },
      {
        color: 'success',
        variant: 'ghost',
        className: 'bg-transparent text-green-600 hover:bg-green-600/20',
      },
      {
        color: 'destructive',
        variant: 'ghost',
        className: 'bg-transparent text-destructive hover:bg-destructive/20',
      },
      {
        color: 'warning',
        variant: 'ghost',
        className: 'bg-transparent text-amber-600 hover:bg-amber-600/20',
      },
      {
        color: 'info',
        variant: 'ghost',
        className: 'bg-transparent text-cyan-600 hover:bg-cyan-600/20',
      },
    ],
    defaultVariants: {
      variant: 'solid',
      color: 'primary',
      size: 'md',
      fullWidth: false,
    },
  },
);

const buttonLoading = cva(
  'absolute top-0 left-0 w-full h-full flex items-center justify-center',
  {
    variants: {
      color: {
        primary: '',
        secondary: '',
        success: '',
        destructive: '',
        warning: '',
        info: '',
      },
    },
    defaultVariants: {
      color: 'primary',
    },
  },
);

export type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    icon?: ElementType;
    iconSize?: number;
    iconSide?: 'left' | 'right';
    isLoading?: boolean;
  };

const Button: React.ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  {
    type = 'button',
    variant,
    color,
    size,
    fullWidth = false,
    icon: Icon,
    iconSize,
    iconSide = 'left',
    isLoading,
    disabled,
    children,
    className,
    ...rest
  },
  ref,
) => {
  const classIconSide = iconSide === 'right' ? 'flex-row-reverse' : '';
  return (
    <button
      ref={ref}
      type={type}
      data-processing={isLoading}
      disabled={isLoading || disabled}
      className={cn(
        buttonVariants({ variant, color, size, className, fullWidth }),
        classIconSide,
      )}
      {...rest}
    >
      {isLoading && (
        <span className={cn(buttonLoading({ color }))}>
          <Loader2Icon className="animate-spin" />
        </span>
      )}
      {Icon && (
        <Icon
          size={
            iconSize ||
            (size === 'xs' ? 12 : size === 'sm' ? 14 : size === 'lg' ? 18 : 16)
          }
          data-is-loading={isLoading}
          className="data-[is-loading=true]:opacity-0"
        />
      )}
      <span
        data-is-loading={isLoading}
        className="data-[is-loading=true]:opacity-0"
      >
        {children}
      </span>
    </button>
  );
};

export default forwardRef(Button);
