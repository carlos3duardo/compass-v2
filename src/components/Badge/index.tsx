import { TinyColor } from '@ctrl/tinycolor';
import { ElementType } from 'react';
import { twMerge } from 'tailwind-merge';

interface BadgeProps {
  label: string;
  color?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  withBorder?: boolean;
  withDot?: boolean;
  icon?: ElementType;
  tooltip?: string;
  className?: string;
}

export function Badge({
  label,
  color = 'gray',
  withBorder = false,
  withDot = false,
  tooltip,
  icon: Icon,
  className,
}: BadgeProps) {
  const backgroundColor = new TinyColor(color).setAlpha(0.15).toString();
  const borderColor = new TinyColor(color).setAlpha(0.42).toString();

  return (
    <span
      className={twMerge(
        'inline-flex w-fit items-center gap-1 rounded-md bg-gray-50 px-2 py-0.5 text-xs font-medium',
        className,
      )}
      style={{
        backgroundColor,
        boxShadow: withBorder ? `0 0 0 1px inset ${borderColor}` : 'none',
        color,
      }}
      title={tooltip}
    >
      {Icon !== undefined ? (
        <Icon size={14} />
      ) : withDot ? (
        <span
          className="h-2 w-2 rounded-full"
          style={{ backgroundColor: color }}
        />
      ) : (
        ''
      )}

      {label}
    </span>
  );
}
