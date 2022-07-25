import { mediaBreakpoint } from 'constants/breakpoint';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > h2 {
    font-weight: 500;
    font-size: 20px;
    line-height: 36px;
    color: ${({ theme }) => theme.textColor.tertiary};
  }

  & > h4 {
    font-weight: 500;
    font-size: 14px;
    line-height: 27px;
    color: ${({ theme }) => theme.color.grey};
  }

  ${mediaBreakpoint.sm} {
    & > h2 {
      font-size: 24px;
    }

    & > h4 {
      font-size: 18px;
    }
  }
`;

export const MediaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & > a {
    margin-right: 8px;
  }
`;
