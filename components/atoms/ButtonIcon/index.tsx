import Image from 'next/image';
import { FC, ButtonHTMLAttributes, Key } from 'react';
import InvisibleButton from '../InvisibleButton';

interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  src?: string;
  size?: Key;
  width?: Key;
  height?: Key;
}

const ButtonIcon: FC<ButtonIconProps> = ({
  src,
  size,
  width = size,
  height = size,
  ...props
}) => (
  <InvisibleButton {...props}>
    <Image src={src} width={width} height={height} />
  </InvisibleButton>
);

export default ButtonIcon;
