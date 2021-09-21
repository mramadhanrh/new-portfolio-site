import styled, { ColorVariant } from 'styled-components';
import { Row } from 'antd';

export const FooterInfoRow = styled(Row)`
  margin-bottom: 10px;
`;

export const ColorBlock = styled.div<{ color: ColorVariant }>`
  width: 100%;
  height: 30px;
  background-color: ${({ theme, color }) => theme.color[color]};
`;

export const LicenseText = styled.p`
  font-weight: 500;
  font-size: 12px;
  margin: 0;
  text-align: right;
`;
