import { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type FieldsetProps = ComponentProps<'fieldset'> & {
  children: ReactNode;
  layout?: 'grid' | 'horizontal';
};

export function FormFieldset({
  children,
  className,
  layout = 'grid',
  ...rest
}: FieldsetProps) {
  // const { layout } = useContext(FormContext);

  if (['grid', 'horizontal'].indexOf(layout) === -1) {
    return (
      <fieldset
        className="bg-red-50 p-6 text-red-400"
        {...rest}
      >{`FormFieldset: Layout ${layout} não reconhecido.`}</fieldset>
    );
  }

  return (
    <fieldset
      data-layout={layout}
      className={twMerge(
        `group layout-${layout} grid grid-cols-12 gap-x-6 gap-y-4 px-4 py-4 data-[layout=horizontal]:flex data-[layout=horizontal]:flex-col xl:px-6`,
        className,
      )}
      {...rest}
    >
      {children}
    </fieldset>
  );
}
