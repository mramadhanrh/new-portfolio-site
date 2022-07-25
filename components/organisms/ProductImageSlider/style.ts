import Button from 'components/atoms/Button';
import { mediaBreakpoint } from 'constants/breakpoint';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  cursor: pointer;
  min-height: 600px;
`;

export const GradientOverlay = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    360deg,
    rgba(117, 73, 7, 0.56) 0%,
    rgba(117, 73, 7, 0) 100%
  );
  opacity: 1;
  transform: translate(0, 50%);
  transition: 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition-property: opacity, transform;

  ${Container}:hover & {
    transform: translate(0, 0%);
    opacity: 1;
  }
`;

export const ProductImage = styled.img<{ offset?: number | string }>`
  position: absolute;
  top: 0;
  left: ${({ offset = 0 }) => offset};
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 1s left cubic-bezier(0.215, 0.61, 0.355, 1);
  object-position: top;
`;

export const StepWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  z-index: 1;
  bottom: 18px;
  left: 50%;
  transform: translate(-50%, 0);
`;

export const DotStep = styled.div<{ active?: boolean }>`
  margin: 0 5px;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.white};
  opacity: ${({ active }) => (active ? 1 : 0.5)};
  transform: ${({ active }) => `scale(${active ? 1 : 0.8})`};
  transition: 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
  transition-property: opacity, transform;
`;

export const NavWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

export const NavButton = styled(Button)`
  position: relative;
  width: 36px;
  height: 36px;
  border-radius: 17px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    width: 12px;
    height: 12px;
  }

  ${mediaBreakpoint.lg} {
    width: 42px;
    height: 42px;
  }
`;
