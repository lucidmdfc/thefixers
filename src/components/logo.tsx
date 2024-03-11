import type { FC } from 'react';
import logo from '../../public/assets/unnamed.png';
import Image from 'next/image';

export const Logo: FC = () => {
  return (
    <Image
      src={logo}
      alt="Logo"
      width={130}
      height={40}
      priority
      unoptimized
    />
  );
};
