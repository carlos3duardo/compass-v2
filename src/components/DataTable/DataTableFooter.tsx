import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

import { Card } from '../Card';

export function DataTableFooter({ className, ...rest }: ComponentProps<'div'>) {
  return <Card.Footer className={twMerge('', className)} {...rest} />;
}
