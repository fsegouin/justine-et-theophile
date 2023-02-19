import * as React from 'react';

type DateProps = React.ComponentPropsWithoutRef<'div'>;
export default function Date({ className, children }: DateProps) {
  return (
    <div className='flex w-full flex-row items-center text-sm'>
      <div className='mr-4 uppercase'>{children}</div>
      <div className='h-[1px] flex-grow bg-darkGreen/50' />
    </div>
  );
}
