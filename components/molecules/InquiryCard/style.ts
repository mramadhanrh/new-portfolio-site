import { Col, Row } from 'antd';
import Button from 'components/atoms/Button';
import { mediaBreakpoint } from 'constants/breakpoint';
import styled from 'styled-components';

export const Card = styled(Row)`
  padding: 32px;
  margin-bottom: 111px;

  width: 100%;
  background-color: ${({ theme }) => theme.color.bridalHeath};
  box-shadow: 15px 15px 0px #fb8c00;

  text-align: left;

  ${mediaBreakpoint.md} {
    padding: 32px 48px;
  }

  ${mediaBreakpoint.lg} {
    padding: 64px;
    min-height: 283px;
    text-align: left;
    box-shadow: 25px 25px 0px #fb8c00;
  }
`;

export const InfoWrapper = styled(Col)`
  margin-bottom: 20px;

  & > h1 {
    font-weight: bold;
    font-size: 28px;
    color: ${({ theme }) => theme.textColor.primary};
    margin: 0;
  }

  & > h3 {
    font-weight: normal;
    font-size: 16px;
    line-height: 27px;
    color: ${({ theme }) => theme.color.tussock};
    margin: 0;
  }

  ${mediaBreakpoint.lg} {
    margin-bottom: 0;

    & > h1 {
      font-size: 48px;
      line-height: 72px;
    }

    & > h3 {
      font-size: 18px;
      line-height: 27px;
    }
  }
`;

export const ChatButton = styled(Button)`
  padding: 14px 30px;
  width: 100%;
  font-size: 18px;
  align-self: flex-end;
  float: right;

  ${mediaBreakpoint.lg} {
    font-size: 24px;
    min-width: 178px;
    max-width: 200px;
  }
`;
