import { Row } from 'antd';
import styled from 'styled-components';
import { mediaBreakpoint } from 'constants/breakpoint';

export const RowContainer = styled(Row)`
  margin: 27px 0;
  text-align: center;

  & > div {
    height: 100%;
  }

  ${mediaBreakpoint.lg} {
    min-height: 600px;
    & > div {
      text-align: left;
    }
  }
`;

export const Illustration = styled.div<{ src: string }>`
  background: url(${({ src }) => src}) no-repeat center;
  background-size: contain;
  width: 100%;
  min-height: 300px;
  margin-bottom: 20px;

  ${mediaBreakpoint.lg} {
    min-height: 600px;
    margin-bottom: 0;
  }
`;

export const HeroPicture = styled.div<{ src: string }>`
  background: url(${({ src }) => src}) no-repeat center;
  background-size: contain;
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
  border-radius: 180px;
  overflow: hidden;
  margin: 0 auto 30px auto;
  box-shadow: 5px 5px 0px 0px ${({ theme }) => theme.color.secondary};
  transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  filter: grayscale(0.6);

  ${mediaBreakpoint.lg} {
    margin-left: auto;
    width: 360px;
    height: 360px;
    margin-bottom: 0;
  }

  &:hover {
    filter: grayscale(0);
    transform: translate(-5px, -5px);
    box-shadow: 15px 15px 0px 0px ${({ theme }) => theme.color.secondary};
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  line-height: 27px;
  font-weight: bold;
  margin: 0;

  ${mediaBreakpoint.lg} {
    font-size: 48px;
    line-height: 54px;
  }

  ${mediaBreakpoint.xl} {
    font-size: 64px;
    line-height: 64px;
  }
`;

export const Subtitle = styled.h3`
  font-size: 14px;
  font-weight: bold;

  & > span:nth-child(odd) {
    color: ${({ theme }) => theme.textColor.primary};
  }
  & > span:nth-child(even) {
    color: ${({ theme }) => theme.textColor.secondary};
  }

  ${mediaBreakpoint.lg} {
    font-size: 22px;
  }

  ${mediaBreakpoint.xl} {
    font-size: 28px;
  }
`;

export const Description = styled.p`
  font-size: 14px;
  text-align: center;
  color: ${({ theme }) => theme.textColor.tertiary};
  margin-bottom: 20px;

  ${mediaBreakpoint.lg} {
    font-size: 18px;
    text-align: justify;
  }

  ${mediaBreakpoint.xl} {
    font-size: 20px;
  }
`;
