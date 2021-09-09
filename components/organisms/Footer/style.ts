import styled, { ColorVariant } from 'styled-components';

export const ColorBlock = styled.div<{ color: ColorVariant }>`
  width: 100%;
  height: 30px;
  background-color: ${({ theme, color }) => theme.color[color]};
`;
