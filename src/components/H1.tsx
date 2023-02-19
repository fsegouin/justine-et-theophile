import * as React from 'react';
import clsx from 'clsx';

type H1Props = React.ComponentPropsWithoutRef<'div'>;
export default function H1({ className, children }: H1Props) {
  return (
    <h1
      className={clsx(
        'my-8 border-b-[1px] border-darkGreen/50 pb-8 text-center font-albatros',
        className
      )}
    >
      {children}
    </h1>
  );
}
