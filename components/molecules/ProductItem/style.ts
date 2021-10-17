import styled, { keyframes } from 'styled-components';

const swipeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    ${({ theme }) => theme.color.primary} 100%
  );
  z-index: 1;
  transition: opacity 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  opacity: 0;
  cursor: pointer;

  &:hover {
    opacity: 1;

    & > div > div {
      animation: ${swipeIn} 0.5s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
    }
  }
`;

export const Container = styled.div`
  position: relative;

  & > div:nth-child(2) {
    position: unset !important;

    & > img {
      object-fit: contain;
      width: 100% !important;
      position: relative !important;
      height: unset !important;
    }
  }
`;
