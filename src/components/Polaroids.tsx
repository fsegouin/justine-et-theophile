import * as React from 'react';
import Image from 'next/image';

import photo2013 from '../../public/images/2013.jpeg';
import photo2017 from '../../public/images/2017.jpg';
import photo2021 from '../../public/images/2021.jpeg';

type PolaroidsProps = React.ComponentPropsWithoutRef<'div'>;
export default function Polaroids({ className, children }: PolaroidsProps) {
  return (
    <div className='-mb-8 flex flex-col font-caveat md:mb-0 md:flex-row'>
      <div className='color-[#8B8B8B] z-20 flex h-[280px] w-[230px] -rotate-6 flex-col overflow-hidden bg-white p-4 shadow-md shadow-dark/50'>
        <div className='h-[200px] w-full overflow-hidden border-[1px] border-[#C9C9C9]'>
          <Image className='h-full object-cover' src={photo2013} alt='2013' />
        </div>
        <div className='relative top-[5px] flex w-full flex-1 items-center justify-center text-3xl text-black'>
          2013
        </div>
      </div>
      <div className='color-[#8B8B8B] z-10 flex h-[280px] w-[230px] -rotate-1 flex-col overflow-hidden bg-white p-4 shadow-md shadow-dark/50'>
        <div className='h-[200px] w-full overflow-hidden border-[1px] border-[#C9C9C9]'>
          <Image className='h-full object-cover' src={photo2017} alt='2017' />
        </div>
        <div className='relative top-[5px] flex w-full flex-1 items-center justify-center text-3xl text-black'>
          2017
        </div>
      </div>
      <div className='color-[#8B8B8B] z-0 z-10 flex h-[280px] w-[230px] rotate-6 flex-col overflow-hidden bg-white p-4 shadow-md shadow-dark/50'>
        <div className='h-[200px] w-full overflow-hidden border-[1px] border-[#C9C9C9]'>
          <Image className='h-full object-cover' src={photo2021} alt='2021' />
        </div>
        <div className='relative top-[5px] flex w-full flex-1 items-center justify-center text-3xl text-black'>
          2021
        </div>
      </div>
    </div>
  );
}
