import { Row } from 'antd';
import styled from 'styled-components';
import { transparentize } from 'polished';

export const RowContainer = styled(Row)`
  background-color: ${({ theme }) => theme.color.bridalHeath};
  padding: 68px 0;
`;

export const TextBackdrop = styled.h1`
  font-size: 80px;
  font-style: normal;
  font-weight: bold;
  margin-bottom: 10px;

  color: ${({ theme }) => theme.color.sandyBeach};
  text-shadow: 20px 20px 0px
    ${({ theme }) => transparentize(0.95, theme.color.ecstasy)};
`;

export const BioTagline = styled.h2`
  font-weight: bold;
  font-size: 36px;
  line-height: 54px;
  color: ${({ theme }) => theme.color.primary};
  text-shadow: 2px 2px 0px ${({ theme }) => theme.color.secondary};
`;

export const BioDescription = styled.p`
  font-weight: normal;
  color: ${({ theme }) => theme.color.chelseaGem};
  opacity: 0.75;
`;

export const Testimony = styled.div`
  font-weight: bold;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  text-shadow: 1px 1px 0px ${({ theme }) => theme.color.ecstasy};
  margin-bottom: 40px;
  padding-right: 20px;

  & > span {
    color: ${({ theme }) => theme.color.ecstasy};
    text-shadow: 1px 1px 0px ${({ theme }) => theme.color.pizzaz};
  }
`;
