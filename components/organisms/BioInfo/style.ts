import { Row } from 'antd';
import styled from 'styled-components';
import { transparentize } from 'polished';
import { mediaBreakpoint } from 'constants/breakpoint';

export const BioRowContainer = styled(Row)`
  background-color: ${({ theme }) => theme.color.bridalHeath};
  padding: 68px 0;

  ${mediaBreakpoint.md} {
    padding: 68px 0 88px;
  }

  ${mediaBreakpoint.lg} {
    padding: 68px 0 108px;
  }
`;

export const TextBackdrop = styled.h1`
  font-size: 48px;
  font-style: normal;
  font-weight: bold;
  margin-bottom: 10px;

  color: ${({ theme }) => theme.color.sandyBeach};
  text-shadow: 10px 10px 0px
    ${({ theme }) => transparentize(0.95, theme.color.ecstasy)};

  ${mediaBreakpoint.md} {
    font-size: 72px;
    text-shadow: 20px 20px 0px
      ${({ theme }) => transparentize(0.95, theme.color.ecstasy)};
  }

  ${mediaBreakpoint.lg} {
    font-size: 80px;
  }
`;

export const BioTagline = styled.h2`
  font-weight: bold;
  font-size: 24px;
  color: ${({ theme }) => theme.color.primary};
  text-shadow: 1px 1px 0px ${({ theme }) => theme.color.secondary};

  ${mediaBreakpoint.md} {
    text-shadow: 2px 2px 0px ${({ theme }) => theme.color.secondary};
    font-size: 36px;
    line-height: 54px;
  }
`;

export const BioDescription = styled.p`
  font-weight: normal;
  color: ${({ theme }) => theme.color.chelseaGem};
  opacity: 0.75;
  text-align: justify;
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

export const CardRow = styled(Row)`
  margin-top: -60px;
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 80px;

  ${mediaBreakpoint.md} {
    padding: 0;
  }
`;
