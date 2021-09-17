import styled, { ColorVariant } from 'styled-components';

export const ColorBlock = styled.div<{ color: ColorVariant }>`
  width: 100%;
  height: 30px;
  background-color: ${({ theme, color }) => theme.color[color]};
`;

export const TagText = styled.p`
  font-weight: 800;
  font-size: 24px;
  margin: 0;
  margin-bottom: 14px;
`;

export const LicenseText = styled.p`
  font-weight: 500;
  font-size: 12px;
  margin: 0;
  text-align: right;
`;
