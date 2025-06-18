import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

import { Card } from '../Card';

export function DataTableFooterSection({
  className,
  ...rest
}: ComponentProps<'div'>) {
  return <Card.FooterSection className={twMerge('', className)} {...rest} />;
}
