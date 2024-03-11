import Image from 'next/image';
import type { FC } from 'react';
import ESITH from '../../../public/assets/esith1.png';

export const LogoSamsung: FC = (props) => (
  <Image
    src={ESITH}
    alt="ESITH"
    width={350}
    height={200}
    priority
    unoptimized
  ></Image>
);
