import { FC, useMemo, useState } from 'react';
import Icon from '@ant-design/icons';
import Button from 'components/atoms/Button';
import Image from 'next/image';
import {
  Container,
  DotStep,
  GradientOverlay,
  ProductImage,
  NavButton,
  NavWrapper,
  StepWrapper,
} from './style';

const ProductImageSlider: FC<{ data?: string[] }> = ({
  data = [
    'sample-modal-pic0.png',
    'sample-modal-pic1.png',
    'sample-modal-pic2.png',
  ],
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOnTransition, setOnTransition] = useState(false);
  const [isNextDirection, setNextDirection] = useState(false);
  const currentIndex = useMemo(
    () => activeIndex % data.length,
    [activeIndex, data.length],
  );

  const imageList = useMemo(() => {
    if (data.length > 0 && data.length < 3)
      return new Array(4).fill('').map((_, i) => data[i % data.length]);
    return data;
  }, [data]);

  const nextIndex = useMemo(
    () => (activeIndex + 1) % imageList.length,
    [activeIndex, imageList.length],
  );
  const prevIndex = useMemo(
    () => (activeIndex === 0 ? imageList.length - 1 : activeIndex - 1),
    [activeIndex, imageList.length],
  );

  const getOffset = (idx: number) => {
    if (idx === activeIndex) return '0%';
    if (idx === nextIndex) return '100%';
    return '-100%';
  };

  const getTransition = (idx: number) => {
    if (idx === activeIndex) return '';
    if (isNextDirection && idx === prevIndex) return '';
    if (!isNextDirection && idx === nextIndex) return '';
    return '0s';
  };

  const handleTransitionEnd = () => {
    setOnTransition(false);
  };

  const handleClick = (isNext: boolean) => {
    if (isOnTransition) return;
    setOnTransition(true);
    setNextDirection(isNext);
    setActiveIndex(isNext ? (activeIndex + 1) % imageList.length : prevIndex);
  };

  return (
    <Container>
      <GradientOverlay />

      <NavWrapper>
        <NavButton
          variant="primary"
          style={{ borderRadius: 100 }}
          onClick={() => handleClick(false)}
        >
          <Image
            alt="slider-previous"
            src="/chevron-left.svg"
            layout="raw"
            width="12px"
            height="12px"
          />
        </NavButton>
        <NavButton
          variant="primary"
          style={{ borderRadius: 100 }}
          onClick={() => handleClick(true)}
        >
          <Image
            alt="slider-next"
            src="/chevron-right.svg"
            layout="raw"
            width="12px"
            height="12px"
          />
        </NavButton>
      </NavWrapper>

      {imageList.map((item, i) => (
        <ProductImage
          key={i.toString()}
          style={{ transitionDuration: getTransition(i) }}
          offset={getOffset(i)}
          src={item}
          onTransitionEnd={i === activeIndex ? handleTransitionEnd : undefined}
        />
      ))}

      <StepWrapper>
        {data.map((_, i) => (
          <DotStep active={i === currentIndex} key={i.toString()} />
        ))}
      </StepWrapper>
    </Container>
  );
};

export default ProductImageSlider;
