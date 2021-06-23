import { Row } from 'antd';
import styled from 'styled-components';

export const RowContainer = styled(Row)`
  margin-top: 27px;

  & > #info {
    height: 100%;
  }
`;

export const Illustration = styled.div<{ src: string }>`
  background: url(${({ src }) => src}) no-repeat right;
  background-size: contain;
  min-height: 800px;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 64px;
  line-height: 64px;
  font-weight: bold;
  margin: 0;
`;

export const Subtitle = styled.h3`
  font-size: 28px;
  font-weight: bold;

  & > span:nth-child(odd) {
    color: ${({ theme }) => theme.textColor.primary};
  }
  & > span:nth-child(even) {
    color: ${({ theme }) => theme.textColor.secondary};
  }
`;

export const Description = styled.p`
  font-size: 20px;
  color: ${({ theme }) => theme.textColor.coal};
`;
